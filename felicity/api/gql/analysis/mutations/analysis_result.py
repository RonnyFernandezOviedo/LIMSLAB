import logging
from typing import List, Optional

import strawberry  # noqa
from api.gql.types import OperationError, OperationSuccess
from api.gql.auth import auth_from_info, verify_user_auth
from api.gql.analysis.types import results as r_types
from api.gql.permissions import CanVerifyAnalysisResult, IsAuthenticated
from apps.analysis.conf import states as analysis_states
from apps.analysis.models import analysis as analysis_models
from apps.analysis.models import results as result_models
from apps.analysis.utils import retest_from_result_uids
from apps.job import models as job_models
from apps.job import schemas as job_schemas
from apps.job.conf import actions, categories, priorities
from apps.job.conf import states as job_states
from apps.notification.utils import FelicityStreamer
from apps.worksheet import conf as ws_conf
from apps.worksheet import models as ws_models


streamer = FelicityStreamer()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.input
class ARResultInputType:
    uid: str
    result: str
    reportable: bool | None = True


@strawberry.type
class ResultListingType:
    results: List[r_types.AnalysisResultType]


AnalysisResultResponse = strawberry.union(
    "AnalysisResultResponse",
    (ResultListingType, OperationError),  # noqa
    description="Union of possible outcomes when actioning samples",
)

AnalysisResultOperationResponse = strawberry.union(
    "AnalysisResultSubmitResponse",
    (OperationSuccess, OperationError),  # noqa
    description="Union of possible outcomes when submitting/verifying results",
)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def submit_analysis_results(
    info,
    analysis_results: List[ARResultInputType],
    source_object: str,
    source_object_uid: str,
) -> AnalysisResultOperationResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden enviar resultados de análisis",
    )

    if len(analysis_results) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados para actualizar!")

    an_results = [result.__dict__ for result in analysis_results]

    # set status of these analysis_results to SUBMITTING
    await result_models.AnalysisResult.bulk_update_with_mappings(
        [
            {"uid": _ar["uid"], "status": analysis_states.result.SUBMITTING}
            for _ar in an_results
        ]
    )

    # submit an results as jobs
    job_schema = job_schemas.JobCreate(
        action=actions.RESULT_SUBMIT,
        category=categories.RESULT,
        priority=priorities.MEDIUM,
        job_id="0",
        status=job_states.PENDING,
        creator_uid=felicity_user.uid,
        data=an_results,
    )

    await job_models.Job.create(job_schema)

    if source_object == "worksheet" and source_object_uid:
        ws = await ws_models.WorkSheet.get(uid=source_object_uid)
        await ws.change_state(ws_conf.worksheet_states.SUBMITTING, felicity_user.uid)
    # elif source_object == "sample" and source_object_uid:
    #     sa = await analysis_models.Sample.get(uid=source_object_uid)
    #     await sa.change_status("processing", felicity_user.uid)

    return OperationSuccess(
        message="Sus resultados se envian en segundo plano."
    )


@strawberry.mutation(permission_classes=[CanVerifyAnalysisResult])
async def verify_analysis_results(
    info, analyses: list[str], source_object: str, source_object_uid: str
) -> AnalysisResultOperationResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden verificar resultados de análisis",
    )

    if len(analyses) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados para verificar!")

    # set status of these analysis_results to PROCESSING
    await result_models.AnalysisResult.bulk_update_with_mappings(
        [{"uid": uid, "status": analysis_states.result.APPROVING} for uid in analyses]
    )

    job_schema = job_schemas.JobCreate(
        action=actions.RESULT_VERIFY,
        category=categories.RESULT,
        priority=priorities.MEDIUM,
        job_id="0",
        status=job_states.PENDING,
        creator_uid=felicity_user.uid,
        data=analyses,
    )

    await job_models.Job.create(job_schema)

    if source_object == "worksheet" and source_object_uid:
        ws = await ws_models.WorkSheet.get(uid=source_object_uid)
        await ws.change_state(ws_conf.worksheet_states.APPROVING, felicity_user.uid)
    # elif source_object == "sample" and source_object_uid:
    #     sa = await analysis_models.Sample.get(uid=source_object_uid)
    #     await sa.change_status("APPROVING", felicity_user.uid)

    return OperationSuccess(
        message="Sus resultados se verifican en segundo plano."
    )


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def retract_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden retirar resultados de análisis",
    )

    return_results = []

    if len(analyses) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados para retirar!")

    for _ar_uid in analyses:
        a_result: result_models.AnalysisResult = await result_models.AnalysisResult.get(
            uid=_ar_uid
        )
        if not a_result:
            return OperationError(error=f"Resulatado de Analisis con uid {_ar_uid} no encontrado")

        retest, a_result = await a_result.retest_result(
            retested_by=felicity_user, next_action="retract"
        )

        # monkeypatch -> notify of sample state
        sample = await analysis_models.Sample.get(uid=a_result.sample_uid)
        await streamer.stream(sample, felicity_user, sample.status, "sample")

        # if in worksheet then keep add retest to ws
        if a_result.worksheet_uid:
            retest.worksheet_uid = a_result.worksheet_uid
            retest.worksheet_position = a_result.worksheet_position
            retest.assigned = True
            retest = await retest.save()

        # add retest
        if retest:
            return_results.append(retest)

        # add original
        return_results.append(a_result)
    return ResultListingType(results=return_results)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def retest_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden re-analizar resultados",
    )

    if len(analyses) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados para re-analizar!")

    retests, originals = await retest_from_result_uids(analyses, felicity_user)

    # monkeypatch -> notify of sample state
    for result in originals:
        sample = await analysis_models.Sample.get(uid=result.sample_uid)
        await streamer.stream(sample, felicity_user, sample.status, "sample")

    return ResultListingType(results=retests + originals)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def cancel_analysis_results(info, analyses: list[str]) -> AnalysisResultResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden cancelar resultados de analisis",
    )

    return_results = []

    if len(analyses) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados para calcelar!")

    for _ar_uid in analyses:
        a_result: result_models.AnalysisResult = await result_models.AnalysisResult.get(
            uid=_ar_uid
        )
        if not a_result:
            return OperationError(error=f"Resulatado de Analisis con uid {_ar_uid} no encontrado")

        # must not belong to a worksheet
        if a_result.assigned:
            return_results.append(a_result)
            continue

        a_result = await a_result.cancel(cancelled_by=felicity_user)
        if a_result:
            return_results.append(a_result)

    return ResultListingType(results=return_results)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def re_instate_analysis_results(
    info, analyses: list[str]
) -> AnalysisResultResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Solo usuarios autenticados pueden reintegrar resultados de analisis cancelados",
    )

    return_results = []

    if len(analyses) == 0:
        return OperationError(error=f"¡No se han proporcionado resultados de analsis para reintegrar!")

    for _ar_uid in analyses:
        a_result: result_models.AnalysisResult = await result_models.AnalysisResult.get(
            uid=_ar_uid
        )
        if not a_result:
            return OperationError(error=f"Resulatado de Analisis con uid {_ar_uid} no encontrado")

        a_result = await a_result.re_instate(re_instated_by=felicity_user)
        if a_result:
            return_results.append(a_result)

    return ResultListingType(results=return_results)
