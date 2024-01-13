import Swal from 'sweetalert2';

import { WORKSHEET_UPDATE } from '../graphql/operations/worksheet.mutations';
import { useApiUtil } from './';

export default function useWorkSheetComposable() {
    const { withClientMutation } = useApiUtil();

    // unAssign Analyses
    const unAssignSamples = async (uids: string[]) => {
        try {
            Swal.fire({
                title: 'Esta seguro?',
                text: 'Usted quiere Desasignar estos analsis',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Desasignar ahora!',
                cancelButtonText: 'No, cancelar Desasignar!',
            }).then(async result => {
                if (result.isConfirmed) {
                    await withClientMutation(WORKSHEET_UPDATE, uids, 'updateWorksheet').then(payload => {});

                    Swal.fire('ok!', 'Analisis selecionados han sido desasignados.', 'success').then(_ => location.reload());
                }
            });
        } catch (error) {}
    };

    return {
        unAssignSamples,
    };
}
