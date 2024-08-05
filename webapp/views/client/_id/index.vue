<script setup lang="ts">
import LoadingMessage from "../../../components/Spinners/LoadingMessage.vue"
import modal from '../../../components/SimpleModal.vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import { ADD_CLIENT, EDIT_CLIENT, DELETE_CLIENT } from '../../../graphql/operations/clients.mutations';
import { useLocationStore, useClientStore } from '../../../stores';
import { IClient } from '../../../models/client';
import { useApiUtil } from '../../../composables'

import * as shield from '../../../guards'

const locationStore = useLocationStore();
const { withClientMutation } = useApiUtil()
const route = useRoute();

const clientStore = useClientStore()
const { client, fetchingClient } = storeToRefs(clientStore)

let showClientModal = ref<boolean>(false);
let createItem = ref<boolean>(false);


let formTitle = ref<string>('');
let form = ref<IClient>({} as IClient);
let countryUid = ref<string>();
let provinceUid = ref<string>();

clientStore.fetchClientByUid(route.query.clientUid!)
locationStore.fetchCountries();

function getProvinces(event: Event) {
  locationStore.filterProvincesByCountry(countryUid.value!)
}

function getDistricts(event: Event) {
  locationStore.filterDistrictsByProvince(provinceUid.value!)
}

function FormManager(create: boolean, obj: IClient = {} as IClient) {
  createItem.value = create;
  formTitle.value = `${create ? 'CREATE' : 'EDITAR'} CLIENTE`;
  showClientModal.value = true;
  if (create) {
    form.value = {} as IClient;
  } else {
    countryUid.value = obj?.district?.province?.countryUid;
    provinceUid.value = obj?.district?.provinceUid
    form.value = obj;
  }
}

function addClient() {
  withClientMutation(ADD_CLIENT, { payload: { name: form?.value?.name, districtUid: form?.value?.districtUid, email:form?.value?.email, phoneMobile: form?.value?.mobilePhone, clienteDireccion: form?.value?.clienteDireccion, } }, "createClient")
    .then((res) => clientStore.addClient(res));
}

function editClient() {
  withClientMutation(EDIT_CLIENT, {
    uid: form?.value?.uid,
    payload: {
      name: form?.value?.name,
      districtUid: form?.value?.districtUid,
      email: form?.value?.email,
      phoneMobile: form?.value?.mobilePhone,
      clienteDireccion: form?.value?.clienteDireccion,
    }
  }, "updateClient")
    .then((result) => clientStore.updateClient(result));
}

function saveForm() {
  if (createItem.value) addClient();
  if (!createItem.value) editClient();
  showClientModal.value = false;
  form.value = {} as IClient;
}

function deleteClient(uid: string) {
  withClientMutation(DELETE_CLIENT, { uid },
    "deleteClient"
  ).then((res) => clientStore.deleteClient(res?.uid));
}

</script>


<template>
  <div class="">

    <div class="grid grid-cols-12 gap-4 mt-2">

      <section class="col-span-12">

        <!-- Listing Item Card -->
        <div class="bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4">
          <div v-if="fetchingClient" class="py-4 text-center">
            <LoadingMessage message="Fetching client metadata ..." />
          </div>
          <div class="grid grid-cols-12 gap-3" v-else>
            <!-- Summary Column -->
            <div class="col-span-12 px-3 sm:px-0">
              <div class="flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold">
                <span>{{ client?.name }}</span>
                <div>
                  <button v-show="shield.hasRights(shield.actions.UPDATE, shield.objects.CLIENT)"
                    @click="FormManager(false, client)"
                    class="p-1 ml-2 border-white border text-gray-500 text-md rounded-sm transition duration-300 hover:text-sky-800 focus:outline-none">
                    <font-awesome-icon icon="fa-edit" />
                  </button>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-2 mt-2">
                <div class="col-span-1">
                  <!-- Client Details -->
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-20">Codigo:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{client?.clienteId}}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-20">Pais:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.district.province?.country?.name }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-20">Provincia:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.district.province?.name }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-20">Distrito:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.district?.name }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-20">Direccion:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.clienteDireccion}}</span>
                  </div>
                </div>
                <div class="col-span-1">
                  <!-- Communication Details -->
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">Email:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.email }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">Telefono:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ client?.phoneMobile }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>

    <router-view />

  </div>

  <!-- Location Edit Form Modal -->
  <modal v-if="showClientModal" @close="showClientModal = false">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">

        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Nombre</span>
            <input class="form-input mt-1 block w-full" v-model="form.name" placeholder="Nombre ..." />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Email</span>
            <input class="form-input mt-1 block w-full" v-model="form.email" placeholder="Email..." />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Telefono</span>
            <input class="form-input mt-1 block w-full" v-model="form.mobilePhone" placeholder="Telefono ..." />
          </label>
        </div>

        <div class="grid grid-cols-3 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Pais</span>
            <select class="form-select block w-full mt-1" v-model="countryUid" @change="getProvinces($event)">
              <option></option>
              <option v-for="country in locationStore.countries" :key="country.uid" :value="country.uid"> {{ country.name
              }}</option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Provincia</span>
            <select class="form-select block w-full mt-1" v-model="provinceUid" @change="getDistricts($event)">
              <option></option>
              <option v-for="province in locationStore.provinces" :key="province.uid" :value="province.uid"> {{
                province.name }}
              </option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Distrito</span>
            <select class="form-select block w-full mt-1" v-model="form.districtUid">
              <option></option>
              <option v-for="district in locationStore.districts" :key="district.uid" :value="district.uid"> {{
                district.name }}
              </option>
            </select>
          </label>
        </div>
        <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Direccion exacta</span>
            <input class="form-input mt-1 block w-full" v-model="form.clienteDireccion" placeholder="Telefono ..." />
          </label>

        <hr />
        <button type="button" @click.prevent="saveForm()"
          class="-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline">
          Guardar formato
        </button>
      </form>
    </template>
  </modal>
</template>
