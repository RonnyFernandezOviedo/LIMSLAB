<script setup lang="ts">
  import { ref, reactive, computed, defineAsyncComponent } from 'vue';
  import { IInstrumentType } from '../../../models/setup'
  import { ADD_INSTRUMENT_TYPE, EDIT_INSTRUMENT_TYPE } from '../../../graphql/operations/instrument.mutations';
  import { useSetupStore } from '../../../stores';
  import { useApiUtil } from '../../../composables';
  const modal = defineAsyncComponent(
    () => import('../../../components/SimpleModal.vue')
  )

  const setupStore = useSetupStore()
  const { withClientMutation } = useApiUtil()
  
  let showModal = ref(false);
  let formTitle = ref('');
  const formAction = ref(true);

  setupStore.fetchInstrumentTypes();    
  const instrumentTypes = computed(() => setupStore.getInstrumentTypes);
  let instrumentType = reactive({}) as IInstrumentType;

  function addInstrumentType(): void {
    const payload = { name: instrumentType.name, description: instrumentType.description }
    withClientMutation(ADD_INSTRUMENT_TYPE, { payload }, "createInstrumentType")
    .then((result) => setupStore.addInstrumentType(result));
  }

  function editInstrumentType(): void {
    const payload = { name: instrumentType.name, description: instrumentType.description }
    withClientMutation(EDIT_INSTRUMENT_TYPE, { uid: instrumentType.uid, payload }, "updateInstrumentType")
    .then((result) => setupStore.updateInstrumentType(result));
  }

  function selectInstrumentType(obj: IInstrumentType): void {
    Object.assign(instrumentType, { ...obj})
  }
  
  function resetInstrumentType(): void {
    Object.assign(instrumentType, { ...({} as IInstrumentType)})
  }

  function FormManager(create: boolean, obj = {} as IInstrumentType): void {
    formAction.value = create;
    showModal.value = true;
    formTitle.value = (create ? 'CREAR' : 'EDITAR') + ' ' + "TIPO INSTRUMENTO";
    if (create) {
      Object.assign(instrumentType, { ...({} as IInstrumentType) });
    } else {
      Object.assign(instrumentType, { ...obj });
    }
  }

  function saveForm():void {
    if (formAction.value === true) addInstrumentType();
    if (formAction.value === false) editInstrumentType();
    showModal.value = false;
  }
  
</script>

<template>
  <div class="">
    <div class="container w-full my-4">
      <hr>
      <button
        class="px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
        @click="FormManager(true)"
      > Agregar Tipo de Instrumento</button>
      <hr>
    </div>
    <hr />

    <div class="grid grid-cols-12 gap-4 mt-2">
      <section class="col-span-5">
        <ul>
          <li 
          v-for="instype in instrumentTypes" :key="instype?.uid"
          @click.prevent.stop="selectInstrumentType(instype)"
          class="flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold bg-white p-1 mb-2">
            <span class="cursor-pointer">
              <div class="flex-grow p-1">
                <div class="font-medium text-gray-500 hover:text-gray-700 flex justify-between">
                  <span>{{ instype?.name }}</span>
                  <span class="text-sm text-gray-500"></span>
                </div>
              </div>
            </span>
            <button
              @click="FormManager(false, instype)"
              class="ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </section>

    </div>
  </div>

  <!-- instType Form Modal -->
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Tipo Instrumento</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="instrumentType.name"
              placeholder="Nombre ..."
            />
          </label>
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Descripcion</span>
            <textarea
            cols="2"
              class="form-input mt-1 block w-full"
              v-model="instrumentType.description"
              placeholder="Descripcion ..."
            />
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"
        >
          Guardar forma
        </button>
      </form>
    </template>
  </modal>

</template>