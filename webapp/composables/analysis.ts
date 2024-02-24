import Swal from 'sweetalert2';
import { IAnalysisResult } from '../models/analysis';
import {
    CANCEL_ANALYSIS_RESULTS,
    REINSTATE_ANALYSIS_RESULTS,
    SUBMIT_ANALYSIS_RESULTS,
    VERIFY_ANALYSIS_RESULTS,
    RETEST_ANALYSIS_RESULTS,
    RETRACT_ANALYSIS_RESULTS,
} from '../graphql/operations/analyses.mutations';

import { useSampleStore, useWorksheetStore } from '../stores';

import useApiUtil from './api_util';
import useNotifyToast from './alert_toast';

export default function useAnalysisComposable() {
    const sampleStore = useSampleStore();
    const worksheetStore = useWorksheetStore();
    const { withClientMutation } = useApiUtil();
    const { toastInfo } = useNotifyToast();

    // Cancell Analyses
    const cancelResults = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Quiere cancelar este analisis',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, cancelar ahora!',
                cancelButtonText: 'No, No cancelar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(CANCEL_ANALYSIS_RESULTS, { analyses: uids }, 'cancelAnalysisResults').then(resp => {
                        sampleStore.updateAnalysesResultsStatus(resp.results);
                        worksheetStore.updateWorksheetResultsStatus(resp.results);
                    });
                }
            });
        } catch (error) {}
    };

    // Reinstate Analyses
    const reInstateResults = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere reintegrar estos analisis',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, reintegrar ahora!',
                cancelButtonText: 'No, no reintegrar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(REINSTATE_ANALYSIS_RESULTS, { analyses: uids }, 'reInstateAnalysisResults').then(resp => {
                        sampleStore.updateAnalysesResultsStatus(resp.results);
                        worksheetStore.updateWorksheetResultsStatus(resp.results);
                    });
                }
            });
        } catch (error) {}
    };

    // Submit Analyses
    function submitResult(result: IAnalysisResult): void {
        if (result.status !== 'pendiente') return;
        result.result = result.editResult;
        withClientMutation(SUBMIT_ANALYSIS_RESULTS, [{ uid: result.uid, result: result.result }], 'submitAnalysisResults').then(resp => {
            toastInfo(resp.message);
            sampleStore.backgroundProcessing([{ uid: result.uid, result: result.result }], undefined, 'cargando');
            worksheetStore.backgroundProcessing([{ uid: result.uid, result: result.result }], undefined, 'cargando');
        });
    }

    const submitResults = async (results: any[], sourceObject: string, sourceObjectUid: string) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere cargar estos resultados',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, cargar ahora!',
                cancelButtonText: 'No, cancelar cargar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(
                        SUBMIT_ANALYSIS_RESULTS,
                        { analysisResults: results, sourceObject, sourceObjectUid },
                        'submitAnalysisResults'
                    ).then(resp => {
                        toastInfo(resp.message);
                        sampleStore.backgroundProcessing(results, sourceObject === 'Muestra' ? sourceObjectUid : undefined, 'cargando');
                        worksheetStore.backgroundProcessing(
                            results,
                            sourceObject === 'worksheet' ? sourceObjectUid : undefined,
                            'cargando'
                        );
                    });
                }
            });
        } catch (error) {}
    };

    // Approve Analyses
    const approveResults = async (uids: string[], sourceObject: string, sourceObjectUid: string) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere aprobar estos resultados',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, aprobar ahora!',
                cancelButtonText: 'No, cancelar aprobacion!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(
                        VERIFY_ANALYSIS_RESULTS,
                        { analyses: uids, sourceObject, sourceObjectUid },
                        'verifyAnalysisResults'
                    ).then(resp => {
                        toastInfo(resp.message);
                        const data = uids.map(item => ({ uid: item }));
                        sampleStore.backgroundProcessing(data, sourceObject === 'Muestra' ? sourceObjectUid : undefined, 'aprobando');
                        worksheetStore.backgroundProcessing(data, sourceObject === 'worksheet' ? sourceObjectUid : undefined, 'aprobando');
                    });
                }
            });
        } catch (error) {}
    };

    // Retract Analyses
    const retractResults = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere retractar estos results',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, retractar ahora!',
                cancelButtonText: 'No, cancelar retraccion',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(RETRACT_ANALYSIS_RESULTS, { analyses: uids }, 'retractAnalysisResults').then(resp => {
                        sampleStore.updateAnalysesResults(resp.results);
                        worksheetStore.updateWorksheetResultsStatus(resp.results);
                    });
                }
            });
        } catch (error) {}
    };

    // Retest Analyses
    const retestResults = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere reanalizar este resultado',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, reanalizar ahora!',
                cancelButtonText: 'No, cancelar reanalisis!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(RETEST_ANALYSIS_RESULTS, { analyses: uids }, 'retestAnalysisResults').then(resp =>
                        sampleStore.updateAnalysesResults(resp.results)
                    );
                }
            });
        } catch (error) {}
    };

    return {
        submitResult,
        submitResults,
        cancelResults,
        reInstateResults,
        approveResults,
        retractResults,
        retestResults,
    };
}
