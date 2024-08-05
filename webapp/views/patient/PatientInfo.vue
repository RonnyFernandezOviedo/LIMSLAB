<script setup lang="ts">
import * as shield from "../../guards";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { usePatientStore } from "../../stores";
import { parseDate } from "../../utils/helpers";
import { defineAsyncComponent } from "vue";
const LoadingMessage = defineAsyncComponent(
  () => import("../../components/Spinners/LoadingMessage.vue")
)
import { useClientStore } from "../../stores";

const clientStore = useClientStore();

const route = useRoute();
const patientStore = usePatientStore();
const { patient, fetchingPatient } = storeToRefs(patientStore);
const { client } = storeToRefs(clientStore);

const emit = defineEmits(["editPatient"]);
const editPatient = (patient) => {
  emit('editPatient', patient)
}
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4" v-motion-slide-top>
    <div v-if="fetchingPatient" class="py-4 text-center">
      <LoadingMessage message="Obteniendo informacion de Solicitud ..." />
    </div>
    <div class="grid grid-cols-10 gap-3" v-else>
      <!-- Meta Column -->
      <div class="sm:col-span-2 text-center hidden sm:block">
         <!-- A<div class="inline-block font-bold text-medium mb-2">
          {{ patient?.patientId }}
        </div>-->
        <!-- Age -->
        <div class="flex flex-col items-center justify-center mx-auto py-2 w-4/5 2lg:w-3/5 rounded-sm bg-sky-800">
          <div class="inline-block font-bold text-white text-sm lg:text-md">
            Solicitud
          </div>
          <div class="inline-block font-bold text-2xl text-white my-2">
            {{ patient?.patientId}}
          </div>
          <div class="inline-block font-semibold text-white text-sm lg:text-md">
            {{ parseDate(patient?.createdAt, false) }}
          </div>
        </div>
      </div>

      <!-- Summary Column -->
      <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
        <div class="flex justify-between sm:text-sm md:text-md lg:text-lg">
          <span class="font-bold text-gray-800">{{ patient?.client?.name?.toUpperCase() }}</span>
          <div>
            <span class="font-medium text-md">{{ parseDate(patient?.dateOfBirth, false) }}</span>
            <button v-show="shield.hasRights(shield.actions.UPDATE, shield.objects.PATIENT)" @click="editPatient(patient)"
              class="p-1 ml-2 border-white border text-gray-500 text-md rounded-sm transition duration-300 hover:text-sky-800 focus:outline-none">
              <font-awesome-icon icon="fa-edit" />
            </button>
            <router-link v-show="route.fullPath.includes('patients-compact')" :to="{
              name: 'patient-detail',
              params: { patientUid: patient?.uid },
            }"
              class="p-1 ml-2 border-white border text-gray-500 rounded-sm transition duration-300 hover:text-sky-800 focus:outline-none">
              <font-awesome-icon icon="fa-left-right" />
            </router-link>
          </div>
        </div>

        <hr />

        <div class="grid grid-cols-3 gap-x-8 mt-2">

          <div class="col-span-1 mr-2">
            <h1 class="uppercase text-sm font-semibold">Informacion Cliente</h1>
            <hr class="my-1">
            <!-- Identifiers -->
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 whitespace-nowrap text-sm font-semibold">Codigo Cliente:
              </span>
              <span class="text-gray-600 text-sm md:text-md">
                {{ patient?.client?.clienteId }}</span>
            </div>
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 whitespace-nowrap text-sm font-semibold">Telefono:
              </span>
              <span class="text-gray-600 text-sm md:text-md">
                {{ patient?.client?.phoneMobile }}</span>
            </div>
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 whitespace-nowrap text-sm font-semibold">Correo:
              </span>
              <span class="text-gray-600 text-sm md:text-md">
                {{ patient?.client?.email }}</span>
            </div>
          </div>
          <div class="col-span-1">
            <h1 class="uppercase text-sm font-semibold">Region</h1>
            <hr class="my-1">
            <!-- Client Details -->
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 text-sm font-semibold">Pais</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                patient?.client.district.province?.country?.name}}</span>
            </div>
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 text-sm font-semibold">Provincia:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                patient?.client?.district?.province?.name
              }}</span>
            </div>
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-800 text-sm font-semibold">Distrito: </span>
              <span class="text-gray-600 text-sm md:text-md">{{
                patient?.client?.district?.name
              }}</span>
            </div>
          </div>

          <div class="col-span-1">
            <h1 class="uppercase text-sm font-semibold">Direccion exacta</h1>
            <hr class="my-1">
            <div class="flex justify-between items-center mt-2">
              <span class="text-gray-600 text-sm md:text-md">{{patient?.client.clienteDireccion}}</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

