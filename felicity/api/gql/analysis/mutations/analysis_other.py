import logging

import strawberry  # noqa
from api.gql.types import OperationError
from api.gql.auth import auth_from_info, verify_user_auth
from api.gql.permissions import IsAuthenticated
from api.gql.analysis.types import analysis as a_types
from apps.analysis import schemas
from apps.analysis.models import analysis as analysis_models


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@strawberry.input
class AnalysisInterimInput:
    key: int
    value: str
    analysis_uid: str
    instrument_uid: str


@strawberry.input
class AnalysisCorrectionFactorInput:
    factor: float
    analysis_uid: str
    instrument_uid: str
    method_uid: str


@strawberry.input
class AnalysisDetectionLimitInput:
    lower_limit: float
    upper_limit: float
    analysis_uid: str
    instrument_uid: str
    method_uid: str


@strawberry.input
class AnalysisUncertaintyInput:
    min: float
    max: float
    value: float
    analysis_uid: str
    instrument_uid: str
    method_uid: str


@strawberry.input
class AnalysisSpecificationInput:
    analysis_uid: str
    min: float | None = None
    max: float | None = None
    min_warn: float | None = None
    max_warn: float | None = None
    min_report: str | None = None
    max_report: str | None = None
    warn_values: str | None = None
    warn_report: str | None = None
    gender: str | None = None
    age_min: int | None = None
    age_max: int | None = None
    method_uid: str | None = None
    unit_uid: str | None = None

#add by ronny
@strawberry.input
class AnalysisMappingInputType:
    analysis_uid: str
    sample_type_uid: str
    name: str
    code: str
    description: str | None = None


AnalysisInterimResponse = strawberry.union(
    "AnalysisInterimResponse",
    (a_types.AnalysisInterimType, OperationError),  # noqa
    description="",
)
AnalysisCorrectionFactorResponse = strawberry.union(
    "AnalysisCorrectionFactorResponse",
    (a_types.AnalysisCorrectionFactorType, OperationError),  # noqa
    description="",
)
AnalysisDetectionLimitResponse = strawberry.union(
    "AnalysisDetectionLimitResponse",
    (a_types.AnalysisDetectionLimitType, OperationError),  # noqa
    description="",
)
AnalysisUncertaintyResponse = strawberry.union(
    "AnalysisUncertaintyResponse",
    (a_types.AnalysisUncertaintyType, OperationError),  # noqa
    description="",
)
AnalysisSpecificationResponse = strawberry.union(
    "AnalysisSpecificationResponse",
    (a_types.AnalysisSpecificationType, OperationError),  # noqa
    description="",
)

#add by ronny

AnalysisMappingResponse = strawberry.union(
    "AnalysisMappingResponse",
    (a_types.AnalysisMappingType, OperationError),  # noqa
    description="Union of possible outcomes when adding a new notice",
)


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_interim(
    info, payload: AnalysisInterimInput
) -> AnalysisInterimResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analysis interims",
    )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisInterimCreate(**incoming)
    interim: analysis_models.AnalysisInterim = (
        await analysis_models.AnalysisInterim.create(obj_in)
    )
    return a_types.AnalysisInterimType(**interim.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_interim(
    info, uid: str, payload: AnalysisInterimInput
) -> AnalysisInterimResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis interims",
    )

    interim = await analysis_models.AnalysisInterim.get(uid=uid)
    if not interim:
        return OperationError(
            error=f"Analysis Interim with uid {uid} does not exist -- cannot update"
        )

    interim_data = interim.to_dict()
    for field in interim_data:
        if field in payload.__dict__:
            try:
                setattr(interim, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisInterimUpdate(**interim.to_dict(nested=False))
    interim = await interim.update(analysis_in)
    return a_types.AnalysisInterimType(**interim.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_correction_factor(
    info, payload: AnalysisCorrectionFactorInput
) -> AnalysisCorrectionFactorResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analysis correction factors",
    )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisCorrectionFactorCreate(**incoming)
    correction_factor: analysis_models.AnalysisCorrectionFactor = (
        await analysis_models.AnalysisCorrectionFactor.create(obj_in)
    )
    return a_types.AnalysisCorrectionFactorType(**correction_factor.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_correction_factor(
    info, uid: str, payload: AnalysisCorrectionFactorInput
) -> AnalysisCorrectionFactorResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis correction factors",
    )

    correction_factor = await analysis_models.AnalysisCorrectionFactor.get(uid=uid)
    if not correction_factor:
        return OperationError(
            error=f"Analysis Correction factor with uid {uid} does not exist -- cannot update"
        )

    correction_factor_data = correction_factor.to_dict()
    for field in correction_factor_data:
        if field in payload.__dict__:
            try:
                setattr(correction_factor, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisCorrectionFactorUpdate(
        **correction_factor.to_dict(nested=False)
    )
    correction_factor = await correction_factor.update(analysis_in)
    return a_types.AnalysisCorrectionFactorType(**correction_factor.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_detection_limit(
    info, payload: AnalysisDetectionLimitInput
) -> AnalysisDetectionLimitResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analysis detection limits",
    )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisDetectionLimitCreate(**incoming)
    detection_limit: analysis_models.AnalysisDetectionLimit = (
        await analysis_models.AnalysisDetectionLimit.create(obj_in)
    )
    return a_types.AnalysisDetectionLimitType(**detection_limit.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_detection_limit(
    info, uid: str, payload: AnalysisDetectionLimitInput
) -> AnalysisDetectionLimitResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis interims",
    )

    detection_limit = await analysis_models.AnalysisDetectionLimit.get(uid=uid)
    if not detection_limit:
        return OperationError(
            error=f"Analysis detection limit with uid {uid} does not exist -- cannot update"
        )

    detection_limit_data = detection_limit.to_dict()
    for field in detection_limit_data:
        if field in payload.__dict__:
            try:
                setattr(detection_limit, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisDetectionLimitUpdate(
        **detection_limit.to_dict(nested=False)
    )
    detection_limit = await detection_limit.update(analysis_in)
    return a_types.AnalysisDetectionLimitType(**detection_limit.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_uncertainty(
    info, payload: AnalysisUncertaintyInput
) -> AnalysisUncertaintyResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analysis uncertainties",
    )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisUncertaintyCreate(**incoming)
    uncertainty: analysis_models.AnalysisUncertainty = (
        await analysis_models.AnalysisUncertainty.create(obj_in)
    )
    return a_types.AnalysisUncertaintyType(**uncertainty.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_uncertainty(
    info, uid: str, payload: AnalysisUncertaintyInput
) -> AnalysisUncertaintyResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis interims",
    )

    uncertainty = await analysis_models.AnalysisUncertainty.get(uid=uid)
    if not uncertainty:
        return OperationError(
            error=f"Analysis uncertainty with uid {uid} does not exist -- cannot update"
        )

    uncertainty_data = uncertainty.to_dict()
    for field in uncertainty_data:
        if field in payload.__dict__:
            try:
                setattr(uncertainty, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisUncertaintyUpdate(**uncertainty.to_dict(nested=False))
    uncertainty = await uncertainty.update(analysis_in)
    return a_types.AnalysisUncertaintyType(**uncertainty.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_specification(
    info, payload: AnalysisSpecificationInput
) -> AnalysisSpecificationResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can add analysis specifications",
    )

    if not payload.min and not payload.warn_values:
        return OperationError(
            error=f"Specification can not be empty",
            suggestion="Provide values for either numeric or texual specification based on expected result type",
        )

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisSpecificationCreate(**incoming)
    specification: analysis_models.AnalysisSpecification = (
        await analysis_models.AnalysisSpecification.create(obj_in)
    )
    return a_types.AnalysisSpecificationType(**specification.marshal_simple())


@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_specification(
    info, uid: str, payload: AnalysisSpecificationInput
) -> AnalysisSpecificationResponse:

    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis specifications",
    )

    specification = await analysis_models.AnalysisSpecification.get(uid=uid)
    if not specification:
        return OperationError(
            error=f"Analysis Specification with uid {uid} does not exist -- cannot update"
        )

    specification_data = specification.to_dict()
    for field in specification_data:
        if field in payload.__dict__:
            try:
                setattr(specification, field, payload.__dict__[field])
            except AttributeError as e:
                logger.warning(e)

    analysis_in = schemas.AnalysisSpecificationUpdate(
        **specification.to_dict(nested=False)
    )
    specification = await specification.update(analysis_in)
    return a_types.AnalysisSpecificationType(**specification.marshal_simple())

#add by ronny

@strawberry.mutation(permission_classes=[IsAuthenticated])
async def create_analysis_mapping(
        info, payload: AnalysisMappingInputType
) -> AnalysisMappingResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can create analysiss mappigs",
    
    )
    exists = await analysis_models.AnalysisCoding.get(sample_type_uid=payload.sample_type_uid)

    #if exists:
        #return OperationError(error=f"Mapping: {payload.sample_type_uid} already exists")

    incoming = {
        "created_by_uid": felicity_user.uid,
        "updated_by_uid": felicity_user.uid,
    }
    for k, v in payload.__dict__.items():
        incoming[k] = v

    obj_in = schemas.AnalysisCodingCreate(**incoming)
    analysis_mapping: analysis_models.AnalysisCoding = (
        await analysis_models.AnalysisCoding.create(obj_in)
    )
    return a_types.AnalysisMappingType(**analysis_mapping.marshal_simple())
@strawberry.mutation(permission_classes=[IsAuthenticated])
async def update_analysis_mapping(
        info, uid: str, payload: AnalysisMappingInputType
) -> AnalysisMappingResponse:
    is_authenticated, felicity_user = await auth_from_info(info)
    verify_user_auth(
        is_authenticated,
        felicity_user,
        "Only Authenticated user can update analysis mappings",
    )

    analysis_mapping = await analysis_models.AnalysisCoding.get(uid=uid)
    if not analysis_mapping:
        return OperationError(error=f"Coding with uid {uid} does not exist")

    st_data = analysis_mapping.to_dict()
    for field in st_data:
        if field in payload.__dict__:
            try:
                setattr(analysis_mapping, field, payload.__dict__[field])
            except Exception as e:
                logger.warning(e)

    analysis_mapping_in = schemas.AnalysisCodingUpdate(**analysis_mapping.to_dict())
    analysis_mapping = await analysis_mapping.update(analysis_mapping_in)
    return a_types.AnalysisMappingType(**analysis_mapping.marshal_simple())
