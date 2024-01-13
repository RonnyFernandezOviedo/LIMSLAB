import Swal from 'sweetalert2';
import { toRefs, computed, reactive } from 'vue';
import {
    REINSTATE_SAMPLES,
    RECEIVE_SAMPLES,
    CANCEL_SAMPLES,
    CLONE_SAMPLES,
    PRINT_SAMPLES,
    PUBLISH_SAMPLES,
    INVALIDATE_SAMPLES,
    VERIFY_SAMPLES,
    REJECT_SAMPLES,
} from '../graphql/operations/analyses.mutations';
import { DOWNLOAD_IMPRESS, DOWNLOAD_IMPRESS_SAMPLES } from '../graphql/operations/analyses.queries';
import { RECOVER_SAMPLES, STORE_SAMPLES } from '../graphql/operations/storage.mutations';
import { useSampleStore } from '../stores';
import { ISample } from '../models/analysis';
import useApiUtil from './api_util';
import useNotifyToast from './alert_toast';

export default function useSampleComposable() {
    const sampleStore = useSampleStore();
    const { withClientMutation, withClientQuery } = useApiUtil();
    const { toastInfo } = useNotifyToast();

    const state = reactive({
        samples: computed(() => sampleStore.getSamples),
    });

    const _updateSamplesStatus = async (samples: ISample[]) => sampleStore.updateSamplesStatus(samples);
    const _updateSampleStatus = async (sample: ISample) => sampleStore.updateSampleStatus(sample);
    const _updateSamples = async (samples: ISample[]) => sampleStore.updateSamples(samples);
    const _addSampleClones = async (samples: ISample[]) => sampleStore.addSampleClones(samples);

    const _fetchAnalysesResultsFor = async (uid: number) => {
        if (!uid) return;
        sampleStore.fetchAnalysisResultsForSample(uid);
    };

    // CANCEL_SAMPLES
    const cancelSamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere cancelar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, cancelar ahora!',
                cancelButtonText: 'No, no cancelar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(CANCEL_SAMPLES, { samples: uids }, 'cancelSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                        if (resp.samples.length !== 1) return;
                        _fetchAnalysesResultsFor(resp.samples[0].uid);
                    });

                    await Swal.fire('Ok!', 'Sus muestras han sido canceladas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // CLONE_SAMPLES
    const cloneSamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere clonar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, clonar ahora!',
                cancelButtonText: 'No, no clonar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(CLONE_SAMPLES, { samples: uids }, 'cloneSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _addSampleClones(resp.samples);
                    });

                    await Swal.fire('ok!', 'Procesando en progreso...', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // REINSTATE_SAMPLES
    const reInstateSamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere reintegrar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, reintegrar ahora!',
                cancelButtonText: 'No, no reintegrar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(REINSTATE_SAMPLES, { samples: uids }, 'reInstateSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                        if (resp.samples.length !== 1) return;
                        _fetchAnalysesResultsFor(resp.samples[0].uid);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido reintegradas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // RECEIVE_SAMPLES
    const receiveSamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere recibir estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, recibir ahora!',
                cancelButtonText: 'No, no recibir!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(RECEIVE_SAMPLES, { samples: uids }, 'receiveSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                        if (resp.samples.length !== 1) return;
                        _fetchAnalysesResultsFor(resp.samples[0].uid);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido recibidas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // RECOVER
    const recoverSamples = async (sampleUids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere recuperar estas muestras del alamcenamiento',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, recuperar ahora!',
                cancelButtonText: 'No, no recuperar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(RECOVER_SAMPLES, { sampleUids }, 'recoverSamples').then(resp => {
                        if (resp.length <= 0) return;
                        _updateSamples(resp.samples);
                        if (resp.samples.length !== 1) return;
                        _fetchAnalysesResultsFor(resp.samples[0].uid);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido recuperadas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // PUBLISH_SAMPLES
    const publishSamples = async (samples: any[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere publicar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, publicar ahora!',
                cancelButtonText: 'No, no publicar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(PUBLISH_SAMPLES, { samples }, 'publishSamples').then(resp => {
                        toastInfo(resp.message);
                    });

                    await Swal.fire('ok!', 'Sus muetras han sido cargadas para impresion', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // DOWNLOAD_IMPRESS by SAMPLES
    const downloadSamplesImpress = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere descargar pdfs',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, descargar ahora!',
                cancelButtonText: 'No, no descargar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientQuery(DOWNLOAD_IMPRESS_SAMPLES, { uids }, 'impressReportsDownload').then(resp => {
                        const tempLink = document.createElement('a');
                        tempLink.href = `data:application/pdf;base64,${resp}`;
                        tempLink.setAttribute('download', 'impress-report.pdf');
                        tempLink.click();
                    });

                    await Swal.fire('ok!', 'Downloading .....', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // DOWNLOAD_IMPRESS
    const downloadImpress = async uid => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere descargar este reporte',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, descargar ahora!',
                cancelButtonText: 'No, no no descargar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientQuery(DOWNLOAD_IMPRESS, { uid }, 'impressReportDownload').then(resp => {
                        const tempLink = document.createElement('a');
                        tempLink.href = `data:application/pdf;base64,${resp}`;
                        tempLink.setAttribute('download', 'impress-report.pdf');
                        tempLink.click();
                    });

                    await Swal.fire('ok!', 'Downloading .....', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // PRINT_SAMPLES
    const printSamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere marcar como impreso',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, marcar ahora!',
                cancelButtonText: 'No, no marcar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(PRINT_SAMPLES, { samples: uids }, 'printSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                        if (resp.samples.length !== 1) return;
                        _fetchAnalysesResultsFor(resp.samples[0].uid);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido marcadas como impresas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // verify sample(s) incase it did not auto transition
    const verifySamples = async (uids: string[]) => {
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere verificar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, verificar ahora!',
                cancelButtonText: 'No, no verificar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(VERIFY_SAMPLES, { samples: uids }, 'verifySamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido verificadas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
    };

    // reject sample(s)
    const rejectSamples = async (samples: any[]) => {
        let rejected = false;
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere rechazar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Rechazar ahora!',
                cancelButtonText: 'No, no rechazar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(REJECT_SAMPLES, { samples }, 'rejectSamples').then(resp => {
                        rejected = true;
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                    });

                    await Swal.fire('ok', 'Sus muestras han sido rechazadas.', 'success').then(_ => {}); // router.push({ name: "samples-listing" })
                }
            });
        } catch (error) {}
        return rejected;
    };

    // invalidate sample
    const invalidateSamples = async (uids: string[]): Promise<ISample[]> => {
        let invalidated: ISample[] = [];
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere invalidar estas muetsras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, invalidar ahora!',
                cancelButtonText: 'No, no invalidar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(INVALIDATE_SAMPLES, { samples: uids }, 'invalidateSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                        _updateSampleStatus(resp.samples[0]);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido invalidadas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
        return invalidated;
    };

    // store samples
    const storeSamples = async (storageParams): Promise<ISample[]> => {
        let stored: ISample[] = [];
        try {
            await Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere almacenar estas muestras',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, almacenar ahora!',
                cancelButtonText: 'No, no almacenar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    withClientMutation(STORE_SAMPLES, { payload: storageParams }, 'storeSamples').then(resp => {
                        if (resp.samples.length <= 0) return;
                        _updateSamplesStatus(resp.samples);
                    });

                    await Swal.fire('ok!', 'Sus muestras han sido almacenadas.', 'success').then(_ => {});
                }
            });
        } catch (error) {}
        return stored;
    };

    return {
        ...toRefs(state),
        cancelSamples,
        reInstateSamples,
        receiveSamples,
        recoverSamples,
        verifySamples,
        printSamples,
        publishSamples,
        downloadSamplesImpress,
        downloadImpress,
        invalidateSamples,
        rejectSamples,
        storeSamples,
        cloneSamples,
    };
}
