<script setup lang="ts">
import VueMultiselect from "vue-multiselect";
import { reactive, computed, onMounted, PropType, toRefs, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IPatient } from "../../models/patient";
import { ADD_PATIENT, UPDATE_PATIENT } from "../../graphql/operations/patient.mutations";

import { useClientStore, useLocationStore, usePatientStore } from "../../stores";
import { useApiUtil } from "../../composables";
import { IClient } from "../../models/client";
import { IPatientIdentificationForm } from "../../models/patient";
import { isNullOrWs } from "../../utils/helpers";
import dayjs from "dayjs";
import { useField, useForm } from "vee-validate";
import { object, string, boolean, number, date } from "yup";
import { ifNoValEmpty } from "../../utils/helpers";//ad by ronny




//Add by ronny 
const clients = computed(() => clientStore.getClients);

// const client = ref<IClient>({} as IClient);

function getClientContacts(item: IClient): void {
  if (ifNoValEmpty(item)) {
    clientStore.fetchClientContacts(item?.uid);
  }
}
const clientContacts = computed(() => clientStore.getClientContacts);

//fin



const props = defineProps({
  patient: Object as PropType<IPatient>,
  navigate: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

let clientStore = useClientStore();
let locationsStore = useLocationStore();
let patientStore = usePatientStore();
const { withClientMutation } = useApiUtil();

let router = useRouter();
let route = useRoute();

const state = reactive({
  genders: ["Male", "Female"] as string[],
  createAction: true,
  countries: computed(() => locationsStore.getCountries),
  provinces: computed(() => locationsStore.getProvinces),
  districts: computed(() => locationsStore.getDistricts),
  clients: computed<IClient[]>(() => clientStore.getClients),
});

let clientParams = reactive({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
  filterAction: false,
});

onMounted(async () => {
  await locationsStore.fetchCountries();
  await clientStore.fetchClients(clientParams);
  if (props.patient?.countryUid) {
    await locationsStore.filterProvincesByCountry(props.patient?.countryUid)
  }
  if (props.patient?.provinceUid) {
    await locationsStore.filterDistrictsByProvince(props.patient?.provinceUid)
  }
  await patientStore.fetchIdentifications();
});

// Patient
const { patient, navigate } = toRefs(props);

const patientSchema = object({
  uid: number(),
  patientId: string().nullable(),
  firstName: string().required("Nombre es requerido"),
  lastName: string().required("Apellido es requerido"),
  client: object().required("Cliente es requerido"),
  dateOfBirth: date().nullable(),
});

const { handleSubmit, errors } = useForm({
  validationSchema: patientSchema,
  initialValues: {
    uid: patient?.value?.uid,
    patientId: patient?.value?.patientId,
    firstName: patient?.value?.firstName,
    lastName: patient?.value?.lastName,
    client: patient?.value?.client,
  } as any,
});

const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");
const { value: client } = useField<IClient>("client");
const { value: provinceUid } = useField<string>("provinceUid");
const { value: countryUid } = useField<string>("countryUid");

const submitPatientForm = handleSubmit((values) => {
  if (!values.uid) addPatient(values as IPatient);
  if (values.uid) updatePatient(values as IPatient);
});

//
function addPatient(payload: IPatient) {
  withClientMutation(
    ADD_PATIENT,
    {
      payload: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        clientUid: payload.client.uid,
      },
    },
    "createPatient"
  ).then((result) => {
    patientStore.addPatient(result);
    emit("close", result);
    if (navigate.value === true)
      router.push({ name: "patient-detail", params: { patientUid: result.uid } });
  });
}

function updatePatient(payload: IPatient) {
  withClientMutation(
    UPDATE_PATIENT,
    {
      uid: payload.uid,
      payload: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        dateOfBirth: payload.dateOfBirth,
        clientUid: payload.client.uid,
      },
    },
    "updatePatient"
  ).then((result) => {
    patientStore.updatePatient(result);
    emit("close", result);
  });
}

// Provinces
function getProvinces(event: any) {
  locationsStore.filterProvincesByCountry(countryUid.value);
}

// Districts
function getDistricts(event: any) {
  locationsStore.filterDistrictsByProvince(provinceUid.value);
}

</script>

<template>
  <form @submit.prevent="submitPatientForm" class="border-2 border-gray-900 border-dotted rounded-sm px-4 py-8"
    autocomplete="off">
        <!-- other identifiers: passport, client pid, national id -->
    <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Cliente</span>
          <div class="w-full">
            <VueMultiselect placeholder="Select a Client" v-model="client" :options="clients" :searchable="true"
              label="name" track-by="uid" @select="getClientContacts">
            </VueMultiselect>
          </div>
        </label>

        <label class="flex whitespace-nowrap mb-2 w-full">
          <span class="text-gray-700 w-4/12">Contacto de Cliente</span>
          <div class="w-full">
            <select name="clientContacts" id="clientContacts" v-model="firstName"
              class="form-input mt-1 block w-full">
              <option value=""></option>
              <option v-for="contact in clientContacts" :key="contact.uid" :value="contact.firstName">
                {{ contact.firstName }}
              </option>
            </select>
            <select name="clientContacts" id="clientContacts" v-model="lastName"
              class="form-input mt-1 block w-full">
              <option value=""></option>
              <option v-for="contact in clientContacts" :key="contact.uid" :value="contact.lastName">
                {{ contact.lastName }}
              </option>
            </select>
            <div class="text-orange-600 w-4/12">{{ errors.clientContactUid }}</div>
          </div>
        </label>
    <hr class="my-2" />
    <hr />
    <button type="submit"
      class="-mb-4 w-1/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline">
      Crear Solcitud
    </button>
  </form>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
