<script setup lang="ts">
  import { computed, ref, reactive, toRefs, watch, defineAsyncComponent } from 'vue';
  import { ADD_ANALYSIS_MAPPING,EDIT_ANALYSIS_MAPPING, ADD_ANALYSIS_CORRECTION_FACTOR, EDIT_ANALYSIS_CORRECTION_FACTOR  } from '../../../../graphql/operations/analyses.mutations';
  import { IAnalysisLimits } from '../../../../models/analysis';
  import { ISampleType } from '../../../../models/setup';
  import { useSetupStore, useAnalysisStore, useSampleStore } from '../../../../stores';
  import { useApiUtil } from '../../../../composables';
  const modal = defineAsyncComponent(
    () => import('../../../../components/SimpleModal.vue')
  )

  const analysisStore = useAnalysisStore()
  const { withClientMutation } = useApiUtil()

  const props = defineProps({
      analysis: {
          type: Object,
          required: true,
          default: () => ({}),
      },
      analysisUid: {
          type: String,
          required: true,
          default: 0,
      },
  })

  const { analysis } = toRefs(props);
  let showModal = ref(false);
  let formTitle = ref('');
  let form = reactive({}) as IAnalysisLimits;
  const formAction = ref(true);

  watch(() => props.analysisUid, (anal, prev) => {

  })

//add by ronny

const  sampleStore = useSampleStore()

sampleStore.fetchSampleTypes
const sample = computed<ISampleType[]>(() => sampleStore.getSampleTypes)

 //function addAnalysislimits(): void {
     // const payload = { ...form, analysisUid: analysis?.value?.uid }
    //  withClientMutation(ADD_ANALYSIS_MAPPING, { payload }, "createAnalysisMapping")
    //  .then((result) => analysisStore.addAnalysesMapping(result));
 // }

  function addAnalysislimits(): void {
      const payload = { ...form, analysisUid: analysis?.value?.uid }
      withClientMutation(ADD_ANALYSIS_MAPPING, { payload }, "createAnalysisMapping")
      .then((result) => analysisStore.AddAnalysisLimits(result));
  }

  const tipomuestra = (uid: string): string => {
    const index = sample?.value?.findIndex(item => item.uid === uid)
    return sample?.value[index]?.name || "unknown";
 }





 function editAnalysisCorrectionFactor(): void {
      const payload: any = { ...form };
      delete payload['uid']
      delete payload['__typename']

      withClientMutation(EDIT_ANALYSIS_CORRECTION_FACTOR, { uid : form.uid,  payload }, "updateAnalysisCorrectionFactor")
      .then((result) => analysisStore.updateAnalysisCorrectionFactor(result));
  }

  function FormManager(create: boolean, obj = {} as IAnalysisLimits):void {
      formAction.value = create;
      showModal.value = true;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + "ANALYSIS CORRECTION FACTOR";
      if (create) {
          Object.assign(form, { name: "", code: "" , sampleTypeUid: undefined });
      } else {
          Object.assign(form, { ...obj });
      }
  }

  function saveForm():void {
      if (formAction.value === true) addAnalysislimits();
      if (formAction.value === false) editAnalysisCorrectionFactor();
      showModal.value = false;
  }


</script>

<template>
     <button
        class="px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
        @click="FormManager(true)"
      >Agregar limites</button>
    <hr>
    <div class="overflow-x-auto mt-4">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
            <thead>
            <tr>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Tipo muestra</th>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Limite-Min</th>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Limite-Max</th>
                <th class="px-1 py-1 border-b-2 border-gray-300"></th>
            </tr>
            </thead>
            <tbody class="bg-white">
            <tr v-for="cfactor in analysis?.analysisLimits"  :key="cfactor?.uid">
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                    <div>
                    <div class="text-sm leading-5 text-gray-800">{{ tipomuestra(cfactor?.sampleTypeUid) }}</div>
                    </div>
                </div>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-sky-800">{{ cfactor.code  }}</div>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-sky-800">{{ cfactor.name  }}</div>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button @click="FormManager(false, cfactor)" class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Editar</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

  <!-- Correction Factor Form Modal -->
  <modal v-if="showModal" @close="showModal = false" :contentWidth="'w-2/4'">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body >
      <form action="post" class="p-1">
        <div class="grid grid-cols-3 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2" >
            <span class="text-gray-700 w-4/12">Tipo de muestra</span>
            <div class="w-full">
              <select class="form-select mt-1 w-full" v-model="form.sampleTypeUid">
                <option></option>
                <option v-for="sampletype in sample" :key="sampletype?.uid" :value="sampletype.uid"> {{ sampletype?.name }}</option>
              </select>
            </div>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Min</span>
            <input
             type="string"
              class="form-input mt-1 block w-full"
              v-model="form.code"
              placeholder="Min ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Max</span>
            <input
             type="string"
              class="form-input mt-1 block w-full"
              v-model="form.name"
              placeholder="Max ..."
            />
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"
        >
          Save Form
        </button>
      </form>
    </template>
  </modal>

</template>

