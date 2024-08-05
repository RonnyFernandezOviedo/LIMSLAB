<script setup lang="ts">
import VueMultiselect from "vue-multiselect";
import { ref, reactive, computed, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import {
  useSampleStore,
  useAnalysisStore,
  useClientStore,
  usePatientStore,
} from "../../stores";
import {
  IAnalysisCoding,
  IAnalysisProfile,
  IAnalysisRequest,
  IAnalysisService,
  ISample,
  ISampleType,
} from "../../models/analysis";
import { ADD_ANALYSIS_REQUEST } from "../../graphql/operations/analyses.mutations";
import { ifNoValEmpty } from "../../utils/helpers";

import { useField, useForm } from "vee-validate";
import { object, string, array, number } from "yup";
import { IClient } from "../../models/client";
import { useApiUtil, useNotifyToast } from "../../composables";
const LoadingMessage = defineAsyncComponent(
  () => import("../../components/Spinners/LoadingMessage.vue")
)

import { isNullOrWs } from "../../utils/helpers";//by ronny
import { IPatient } from "../../models/patient";

const sampleStore = useSampleStore();
const patientStore = usePatientStore();
const analysisStore = useAnalysisStore();
const clientStore = useClientStore();
const router = useRouter();

const { withClientMutation } = useApiUtil();
const { swalError } = useNotifyToast();

// Patient
let patient = computed(() => patientStore.getPatient);

// Clients, Cient Contacts
let clientParams = reactive({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
});
clientStore.fetchClients(clientParams);

const clients = computed(() => clientStore.getClients);

// const client = ref<IClient>({} as IClient);

//function getClientContacts(item: IClient): void {
  //if (ifNoValEmpty(item)) {
    //clientStore.fetchClientContacts(item?.uid);
  //}
//}

clientStore.fetchClientContacts(patient.value?.client.uid);

let clientContacts = computed(() => clientStore.getClientContacts);

//const clientContacts = computed(() => clientStore.getClientContacts);


// Sample Types
sampleStore.fetchSampleTypes();
const sampleTypes = computed(() => sampleStore.getSampleTypes);

// Analysis Services
let analysesParams = reactive({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
});
analysisStore.fetchAnalysesServices(analysesParams);

const analysesServices = computed<IAnalysisService[]>(() => {
  const services: IAnalysisService[] = analysisStore.getAnalysesServicesSimple;
  let s = new Set<IAnalysisService>();
  services.forEach((service: IAnalysisService, index: number) => {
    if (service.profiles?.length === 0) {
      s.add(service);
    }
  });
  return [...s];
});

// Analysis Profiles
analysisStore.fetchAnalysesProfiles();
const analysesProfiles = computed(() => analysisStore.getAnalysesProfiles);

// Analysis Request Form
const arSaving = ref(false);
const arSchema = object({
  clientRequestId: string().required("Cliente ID es requerido"),
  clinicalData: string().nullable(),
  //client: object().required("Cliente es requerido"),
  clientContactUid: number().required("Contacto de cliente es requerido"),
  samples: array().required().min(1, "Agregue al menos 1 muestra"),
  priority: number(),
  dateCollected: string().nullable(),
});

const { handleSubmit, errors } = useForm({
  validationSchema: arSchema,
  initialValues: {
    dateCollected: !isNullOrWs(patient?.value?.dateOfBirth)//by ronny
      ? (new Date(patient?.value?.dateOfBirth!).toISOString().split("T")[0] as any)//by ronny
      : undefined,
    priority: 0,
    samples: [],
  } as any,
});


const { value: clientRequestId } = useField("clientRequestId");
const { value: clinicalData } = useField<string>("clinicalData");
const { value: clientContactUid } = useField("clientContactUid");
const { value: priority } = useField("priority");
const { value: samples } = useField<ISample[]>("samples");

const submitARForm = handleSubmit((values) => {
  arSaving.value = true;

  for (let sample of values.samples || []) {
    if (typeof sample?.sampleType !== "string") {
      swalError("Debe selecionar tipo de muestra");
      return;
    }
    if (sample?.analyses?.length <= 0 && sample?.profiles?.length <= 0) {
      swalError("La muestra debe tener un perfil de analsis /analisis o ambos");
      return;
    }
  }

  addAnalysesRequest(values as any);
});

// Analysis Request Add
function addAnalysesRequest(request: IAnalysisRequest): void {
  const payload = {
    patientUid: patient.value?.uid,
    clientUid: patient.value?.client.uid,
    clientRequestId: request.clientRequestId,
    clinicalData: request.clinicalData,
    clientContactUid: request.clientContactUid,
    samples: request.samples,
    priority: request.priority,
    //dateCollected: request.dateCollected,
  };
  withClientMutation(ADD_ANALYSIS_REQUEST, { payload }, "createAnalysisRequest")
    .then((result) => {
      sampleStore.addAnalysisRequest(result);
      router.push({ name: "patient-detail", params: { patientUid: patient.value?.uid } });
    })
    .finally(() => {
      arSaving.value = false;
    });
}

function addSample(): void {
  const sample = {
    sampleType: {} as ISampleType,
    dateCollected:"",
    profiles: [] as IAnalysisProfile[],
    analyses: [] as IAnalysisService[],
  } as ISample;
  samples.value.push(sample);
}

function removeSample(index: number): void {
  samples.value.splice(index, 1);
}
</script>

<template>
  <div class="w-3/6 mt-4 py-4">
    <h5 class="mb-4">Agregar Solicitud de Analisis</h5>
    <form action="post" class="p-4 mb-8 bg-white" @submit.prevent="submitARForm">
      <div class="">
        <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">ID Muestra Cliente</span>
          <div class="w-full">
            <input class="form-input mt-1 block w-full" v-model="clientRequestId" placeholder="ID ..." />
            <div class="text-orange-600 w-4/12">{{ errors.clientRequestId }}</div>
          </div>
        </label>

        <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Comentarios</span>
          <div class="w-full">
            <textarea cols="2" class="form-input mt-1 w-full" v-model="clinicalData" placeholder="Comentarios ..." />
            <div class="text-orange-600 w-4/12">{{ errors.clinicalData }}</div>
          </div>
        </label>


         <!-- date of collected sample by Ronny -->

         <!--<label class="flex whitespace-nowrap mb-2 w-full">
      <span class="text-gray-700 w-4/12">Fecha recoleccion</span>
      <div class="w-full">
        <input class="form-input mt-1 w-full disabled:bg-slate-200" type="date" v-model="dateCollected"
          placeholder="Fecha de recoleccion" />
        <div class="text-orange-600 w-4/12">{{ errors.dateCollected }}</div>
      </div>
    </label>-->

    <!--<label class="flex whitespace-nowrap mb-2 w-full">
                <span class="text-gray-700 w-4/12">Fecha recoleccion</span>
                <div class="w-full">
                <input type="datetime-local" class="form-input mt-1 block w-full" v-model="dateCollected" placeholder="Fecha de recoleccion"/>
                <div class="text-orange-600 w-4/12">{{ errors.dateCollected }}</div>
              </div> 
    </label>-->




        <!-- <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Cliente</span>
          <div class="w-full">
            <VueMultiselect placeholder="Seleccione un Cliente" v-model="client" :options="clients" :searchable="true"
              label="name" track-by="uid" @select="getClientContacts">
            </VueMultiselect>
          </div>
        </label>-->
        <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Contacto de Cliente</span>
          <div class="w-full">
            <select name="clientContacts" id="clientContacts" v-model="clientContactUid"
              class="form-input mt-1 block w-full">
              <option value=""></option>
              <option v-for="contact in clientContacts" :key="contact.uid" :value="contact.uid">
                {{ contact.firstName }} {{ contact.lastName }}
              </option>
            </select>
            <div class="text-orange-600 w-4/12">{{ errors.clientContactUid }}</div>
          </div>
        </label>

        <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Prioridad</span>
          <div class="w-full">
            <input type="number" min="0" max="2" class="form-input mt-1 block w-full" v-model="priority" />
            <div class="text-orange-600 w-4/12">{{ errors.priority }}</div>
          </div>
        </label>
      </div>

      <section id="samples">
        <hr />
        <div class="flex justify-between items-center py-2">
          <h5>Muestras</h5>
          <span class="text-orange-600">{{ errors.samples }}</span>
          <button v-if="samples?.length !== 20" @click.prevent="addSample()"
            class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
            Agregar Muestra
          </button>
        </div>
        <hr class="mb-4" />

        <div v-for="(sample, index) in samples" :key="index">
          <div class="flex items-center justify-between">
            <div class="flex items-top gap-x-4">
              <label class="flex flex-col whitespace-nowrap mb-2">
                <span class="text-gray-700">Tipo de Muestra</span>
                <select name="sampleTypes" id="sampleTypes" v-model="sample.sampleType" class="form-input mt-1">
                  <option value=""></option>
                  <option v-for="sampleType in sampleTypes" :key="sampleType.uid" :value="sampleType.uid">
                    {{ sampleType.name }}
                  </option>
                </select>
              </label>

              <label class="flex flex-col whitespace-nowrap mb-2">
                <span class="text-gray-700">Date Collected</span>
                <input type="datetime-local" class="form-input mt-1 block w-full" v-model="sample.dateCollected" />
              </label>




              <label class="flex flex-col whitespace-nowrap mb-2">
                <span class="text-gray-700">Perfil de Analisis</span>
                <select name="analysisProfiles" id="analysisProfiles" v-model="sample.profiles" class="form-input mt-1"
                  multiple>
                  <option value=""></option>
                  <option v-for="(profile, index) in analysesProfiles" :key="profile.uid" :value="profile.uid">
                    {{ profile.name }}
                  </option>
                </select>
              </label>

              <label class="flex flex-col whitespace-nowrap mb-2">
                <span class="text-gray-700">Analisis</span>
                <select name="analysesServices" id="analysesServices" v-model="sample.analyses" class="form-input mt-1"
                  multiple>
                  <option value=""></option>
                  <option v-for="(service, index) in analysesServices" :key="service.uid" :value="service.uid">
                    {{ service.name }}
                  </option>
                </select>
              </label>
            </div>
            <div class="">
              <button @click.prevent="removeSample(index)"
                class="px-2 py-1 mr-2 border-orange-600 border text-orange-600rounded-smtransition duration-300 hover:bg-orange-600 hover:text-white focus:outline-none">
                Remover
              </button>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <hr />
      <button v-if="!arSaving" type="submit"
        class="-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline">
        Agregar muestra(s)
      </button>
      <div v-else class="py-4 text-center">
        <LoadingMessage message="Agregando Muestras ..." />
      </div>
    </form>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
