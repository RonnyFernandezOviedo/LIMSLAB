<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { ILaboratory, ILaboratorySetting } from "../../../models/setup";
import {
  UPDATE_LABORATOTY,
  UPDATE_LABORATOTY_SETTING,
} from "../../../graphql/operations/_mutations";
import { useUserStore, useSetupStore } from "../../../stores";
import { useApiUtil } from "../../../composables";

const userStore = useUserStore();
const setupStore = useSetupStore();
const { withClientMutation } = useApiUtil();

let currentTab = ref<string>("Info-general");
const tabs: string[] = ["Info-general", "Otras-Config"];

let editDisabled = ref(false);

setupStore.fetchLaboratory();
const laboratory = computed(() => setupStore.getLaboratory);
const formLaboratory = reactive({ ...laboratory.value }) as ILaboratory;

watch(
  () => laboratory.value?.uid,
  (anal, prev) => Object.assign(formLaboratory, laboratory.value)
);

const saveLaboratoryForm = () => {
  const payload = { ...formLaboratory };
  delete payload["uid"];
  delete payload["__typename"];
  payload["labManagerUid"] = payload["labManagerUid"]!;
  withClientMutation(
    UPDATE_LABORATOTY,
    { uid: formLaboratory.uid, payload },
    "updateLaboratory"
  ).then((result) => setupStore.updateLaboratory(result));
};

setupStore.fetchLaboratorySetting();
const laboratorySetting = computed(() => setupStore.getLaboratorySetting);
const formSettings = reactive({ ...laboratorySetting.value }) as ILaboratorySetting;

watch(
  () => laboratorySetting.value?.uid,
  (anal, prev) => Object.assign(formSettings, laboratorySetting.value)
);

const saveSettingForm = () => {
  const payload = { ...formSettings };
  delete payload["uid"];
  delete payload["__typename"];
  withClientMutation(
    UPDATE_LABORATOTY_SETTING,
    { uid: formSettings.uid, payload },
    "updateLaboratorySetting"
  ).then((result) => setupStore.updateLaboratorySetting(result));
};

userStore.fetchUsers({});
const users = computed(() => userStore.getUsers);
</script>

<template>
  <div class="w-full mt-8 pl-4">
    <nav class="bg-white shadow-md mt-2">
      <div class="-mb-px flex justify-start">
        <a v-for="tab in tabs" :key="tab" :class="[
          'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
          { 'tab-active': currentTab === tab },
        ]" @click="currentTab = tab">
          {{ tab }}
        </a>
      </div>
    </nav>

    <section v-if="currentTab === 'Info-general'" class="pt-4">
      <form action="post">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Nombre Laboratorio</span>
            <input class="form-input mt-1 block w-full" v-model="formLaboratory.labName" placeholder="Name ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Gerente de Laboratorio</span>
            <div class="w-full">
              <select class="form-select mt-1 w-full" v-model="formLaboratory.labManagerUid" :disabled="editDisabled">
                <option></option>
                <option v-for="user in users" :key="user?.uid" :value="user.uid">
                  {{ user?.firstName }} {{ user?.lastName }}
                </option>
              </select>
            </div>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Email Laboratorio</span>
            <input class="form-input mt-1 block w-full" v-model="formLaboratory.email" placeholder="Email ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">CC Emails</span>
            <input class="form-input mt-1 block w-full" v-model="formLaboratory.emailCc" placeholder="Email ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Telefono Laboratorio</span>
            <input class="form-input mt-1 block w-full" v-model="formLaboratory.mobilePhone" placeholder="Numero ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Telefono Oficina</span>
            <input class="form-input mt-1 block w-full" v-model="formLaboratory.businessPhone" placeholder="Numero ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Direccion</span>
            <textarea cols="2" class="form-input mt-1 block w-full" v-model="formLaboratory.address"
              placeholder="Descripcion ..." :disabled="editDisabled" />
          </label>
          <!-- <label class="block col-span-1 mb-2">
                                <span class="text-gray-700">Laboratory Logo</span>
                                <input
                                  class="form-input mt-1 block w-full"
                                  v-model="formLaboratory.logo"
                                  placeholder="Name ..."
                                  :disabled="editDisabled"
                                />
                              </label> -->
        </div>
        <hr />
        <button v-show="!editDisabled" type="button" @click.prevent="saveLaboratoryForm()"
          class="w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline">
          Actualizar
        </button>
      </form>
    </section>

    <section v-if="currentTab === 'Otras-Config'" class="pt-4">
      <form action="post">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Página de destino predeterminada</span>
            <input class="form-input mt-1 block w-full" v-model="formSettings.defaultRoute" placeholder="Name ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Tema predeterminado</span>
            <input class="form-input mt-1 block w-full" v-model="formSettings.defaultTheme" placeholder="Name ..."
              :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Password caducidad (dias)</span>
            <input type="number" min="0" class="form-input mt-1 block w-full" v-model="formSettings.passwordLifetime"
              placeholder="Name ..." :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Inactividad Auto Logout (minutos)</span>
            <input type="number" min="0" class="form-input mt-1 block w-full" v-model="formSettings.inactivityLogOut"
              placeholder="Name ..." :disabled="editDisabled" />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Default Sticker copies</span>
            <input type="number" min="0" class="form-input mt-1 block w-full" v-model="formSettings.stickerCopies"
              placeholder="Name ..." :disabled="editDisabled" />
          </label>
          <span class="block col-span-1 mb-2"></span>
          <label class="block col-span-1 mb-2">
            <input type="checkbox" class="" v-model="formSettings.allowSelfVerification" placeholder="Name ..."
              :disabled="editDisabled" />
            <span class="text-gray-700 ml-3">Permitir auto-verificaion</span>
          </label>
          <label class="block col-span-1 mb-2">
            <input type="checkbox" class="" v-model="formSettings.allowPatientRegistration" placeholder="Name ..."
              :disabled="editDisabled" />
            <span class="text-gray-700 ml-3">Permitir registro pacientes</span>
          </label>
          <label class="block col-span-1 mb-2">
            <input type="checkbox" class="" v-model="formSettings.allowSampleRegistration" placeholder="Name ..."
              :disabled="editDisabled" />
            <span class="text-gray-700 ml-3">Permitir registro de muestras</span>
          </label>
          <label class="block col-span-1 mb-2">
            <input type="checkbox" class="" v-model="formSettings.allowWorksheetCreation" placeholder="Name ..."
              :disabled="editDisabled" />
            <span class="text-gray-700 ml-3">Permitir creacion de hojas de trabajo</span>
          </label>
          <label class="block col-span-1 mb-2">
            <input type="checkbox" class="" v-model="formSettings.autoReceiveSamples" placeholder="Name ..."
              :disabled="editDisabled" />
            <span class="text-gray-700 ml-3">Auto recibir muestras</span>
          </label>
        </div>
        <hr />
        <button v-show="!editDisabled" type="button" @click.prevent="saveSettingForm()"
          class="mb-4 w-2/5 border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline">
          Actualizar
        </button>
      </form>
    </section>
  </div>
</template>
../../../graphql/operations/_mutations../../../graphql/_mutations