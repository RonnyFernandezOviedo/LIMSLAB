<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, defineAsyncComponent, reactive, watch } from "vue";
import { IAnalysisProfile, IAnalysisService, ISample } from "../../../models/analysis";
import { useSampleComposable } from "../../../composables";
import { useSampleStore } from "../../../stores";
import { useRoute, useRouter } from "vue-router";
import { parseDate } from "../../../utils/helpers";
const LoadingMessage = defineAsyncComponent(
  () => import("../../../components/Spinners/LoadingMessage.vue")
)

const sampleStore = useSampleStore();
const route = useRoute();
const router = useRouter();

sampleStore.resetSample();

const {
  cancelSamples,
  reInstateSamples,
  receiveSamples,
  invalidateSamples,
  publishSamples,
  verifySamples,
  recoverSamples,
  printSamples,
} = useSampleComposable();

const state = reactive({
  dropdownOpen: false,
});

const { sample, fetchingSample, repeatSample } = storeToRefs(sampleStore);
sampleStore.fetchSampleByUid(route.params.sampleUid);

watch(
  () => sample?.value?.status,
  (statusIn, _) => {
    if (!statusIn) return;
    if (statusIn !== "invalidada") {
      sampleStore.resetRepeatSample();
      return;
    } else {
      sampleStore.fetchRepeatSampleByParentId(route.params.sampleUid);
    }
  }
);

watch(
  () => route.params.sampleUid,
  (sampleUid, prev) => {
    sampleStore.fetchSampleByUid(+sampleUid);
  }
);

function profileAnalysesText(
  profiles?: IAnalysisProfile[],
  analyses?: IAnalysisService[]
): string {
  let names: string[] = [];
  profiles?.forEach((p) => names.push(p.name!));
  analyses?.forEach((a) => names.push(a.name!));
  return names.join(", ");
}

const canReceive = computed(() => {
  if (["esperada"].includes(sample?.value?.status?.toLowerCase()!)) return true;
  return false;
});

const receiveSample = async () => receiveSamples([sample?.value?.uid!]),
  canCancel = computed(() => {
    if (["recibido", "esperada"].includes(sample?.value?.status?.toLowerCase()!))
      return true;
    return false;
  });

const cancelSample = async () => cancelSamples([sample?.value?.uid!]),
  canReinstate = computed(() => {
    if (["cancelada"].includes(sample?.value?.status?.toLowerCase()!)) return true;
    return false;
  });

const reInstateSample = async () => reInstateSamples([sample?.value?.uid!]),
  canVerify = computed(() => {
    if (sample?.value?.status?.toLowerCase() === "Esperando") return true;
    return false;
  });

const verifySample = async () => verifySamples([sample?.value?.uid!]),
  canInvalidate = computed(() => {
    if (sample?.value?.status?.toLowerCase() === "publicado") return true;
    return false;
  });

const publishText = computed(() => {
  if (["aprobada"].includes(sample?.value?.status?.toLowerCase()!)) return "Publicar";
  if (["publicado"].includes(sample?.value?.status?.toLowerCase()!))
    return "Re publicar";
  return "Pre publicar";
}),
  canPublish = computed(() => {
    if (["Esperando", "aprobada", "publicado"].includes(sample?.value?.status?.toLowerCase()!))
      return true;
    const results = sampleStore.analysisResults;
    if (["recibido", "paired"].includes(sample?.value?.status?.toLowerCase() ?? "") &&
    results?.some((r) => ["aprobada"].includes(r.status?.toLowerCase() ?? ""))
    ) {
      return true;
    }
    return false;
  }),
  publishSample = async () => {
    const action = publishText.value.startsWith("Pre")
      ? "pre-publicar"
      : publishText.value.startsWith("Re")
        ? "re-publicar"
        : "publicar";
    publishSamples([{ uid: sample?.value?.uid, action }]);
  };

const invalidateSample = async () =>
  invalidateSamples([sample?.value?.uid!]).then((res: ISample[]) => {
    let inv = res?.filter((s) => s.uid !== sample?.value?.uid);
    if (inv.length > 0) sampleStore.setRepeatSample(inv[0]);
  });

const canReject = computed(() => {
  if (["recibido", "esperada"].includes(sample?.value?.status?.toLowerCase()!))
    return true;
  return false;
}),
  rejectSample = async () =>
    router.push({
      name: "reject-samples",
      params: { samples: JSON.stringify([sample?.value]) },
    });



const printReports_ = async () => printSamples([sample?.value?.uid!]),
 xxx = computed(() => {
    if (sample?.value?.status?.toLowerCase() === "publicado") return true;
    return false;
  });  

const canRecover = computed(() => {
  if (["stored"].includes(sample?.value?.status?.toLowerCase()!)) return true;
  return false;
}),
  recoverSample = async () => recoverSamples([sample?.value?.uid!]);

// sample storage
const goToStorage = async (sample?: ISample) => {
  router.push({ path: "/bio-banking", state: { sample: JSON.stringify(sample) } });
};
</script>

<template>
  <div class="flex justify-between">
    <h3 class="my-4 font-bold">Detalles de Muestra</h3>
    <router-link v-if="sample?.analysisRequest?.patient?.uid" :to="{
      name: 'patient-detail',
      params: { patientUid: sample?.analysisRequest?.patient?.uid },
    }"
      class="p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100">
      ... otras muestras
    </router-link>
  </div>

  <hr />

  <div class="bg-white rounded-sm shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4" v-motion-slide-right>
    <div v-if="fetchingSample" class="py-4 text-center">
      <LoadingMessage message="Cargando detalles de muestra ..." />
    </div>
    <div class="grid grid-cols-12 gap-3" v-else>
      <!-- Summary Column -->
      <div class="col-span-12 px-3 sm:px-0">
        <div class="mb-2 flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold">
          <div>
            <span v-if="sample?.priority ?? 0 < 1" :class="[
              'font-small',
              { 'text-orange-600': sample?.priority ?? 0 < 1 },
            ]">
              <i class="fa fa-star"></i>
            </span>
            {{ sample?.sampleId }}
            <!-- <button
                                                class="ml-4 text-xs inline-flex items-center justify-center w-6 h-6 mr-2 border-sky-800 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"
                                              >
                                                <i class="fa fa-pen"></i>
                                              </button> -->
            <span v-if="sample?.analysisRequest?.patient?.uid && repeatSample?.uid">
              <font-awesome-icon icon="angle-double-right" class="mx-2" />
              <router-link :to="{
                name: 'sample-detail',
                params: {
                  patientUid: sample?.analysisRequest?.patient?.uid,
                  sampleUid: repeatSample?.uid,
                },
              }"
                class="p-2 my-2 text-sm border-sky-800 border text-dark-700 transition-colors duration-150 rounded-sm focus:outline-none hover:bg-sky-800 hover:text-gray-100">
                {{ repeatSample?.sampleId }}
              </router-link>
            </span>
          </div>
          <span>{{ profileAnalysesText(sample?.profiles, sample?.analyses) }}</span>
          <!-- <button type="button" class="bg-sky-800 text-white p-1rounded-smleading-none">{{ sample?.status }}</button> -->
          <div>
            <div @click="state.dropdownOpen = !state.dropdownOpen"
              class="hidden md:block md:flex md:items-center ml-2 mt-2">
              <button type="button" class="bg-sky-800 text-white px-2 py-1 rounded-sm leading-none">
                {{ sample?.status }}
              </button>
              <div class="ml-2">
                <font-awesome-icon icon="chevron-down" class="text-gray-400" />
              </div>
            </div>
            <div v-show="state.dropdownOpen" @click="state.dropdownOpen = false" class="fixed inset-0 h-full w-full z-10">
            </div>
            <div v-show="state.dropdownOpen" class="absolute mt-4 py-0 bg-gray-300 rounded-sm shadow-xl z-20">
              <div v-show="canReceive" @click="receiveSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white">
                Recibir
              </div>
              <div v-show="canVerify" @click="verifySample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-sky-800 hover:text-white">
                Aprobar
              </div>
              <div v-show="canReject" @click="rejectSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white">
                Rechazar
              </div>
              <div v-show="canCancel" @click="cancelSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white">
                Cancelar
              </div>
              <div v-show="canReinstate" @click="reInstateSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-orange-600 hover:text-white">
                Reinstegrar
              </div>
              <div v-show="canPublish" @click="publishSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white">
                {{ publishText }}
              </div>
              <div v-show="canPublish" @click="printReports_()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white">
                Imprimir
              </div>
              <div v-show="canInvalidate" @click="invalidateSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white">
                Invalidar
              </div>
              <div v-show="canRecover" @click="recoverSample()"
                class="no-underline text-gray-900 py-0 opacity-60 px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark hover:bg-gray-400 hover:text-white">
                Recuperar
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="grid grid-cols-3 gap-x-4 mt-2">
          <div class="col-span-1">
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Client Request ID:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                sample?.analysisRequest?.clientRequestId
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Client:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                sample?.analysisRequest?.client?.name
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Cliet Contact:</span>
              <span class="text-gray-600 text-sm md:text-md">Sister in Charge</span>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Tipo de Muestra:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                sample?.sampleType?.name
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Muestreo:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.dateCollected, true)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Registro:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.createdAt, true)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Recibido:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.dateReceived, true)
              }}</span>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Enviado:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.dateSubmitted, true)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de verificado:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.dateVerified, true)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Publicado:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.datePublished, true)
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-800 text-sm font-semibold">Fecha de Impresion:</span>
              <span class="text-gray-600 text-sm md:text-md">{{
                parseDate(sample?.datePrinted, true)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="sample?.status === 'stored'"
    class="bg-blue-300 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4">
    <div class="flex">
      <div class="mr-4 font-semibold">Storage:</div>
      <!--  -->
      <div class="hover:underline hover:cursor-pointer" @click="goToStorage(sample)">
        <span>{{
          sample?.storageContainer?.storageSection?.storageLocation?.storeRoom?.name
        }}
          &rsaquo;
        </span>
        <span>{{ sample?.storageContainer?.storageSection?.storageLocation?.name }} &rsaquo;
        </span>
        <span>{{ sample?.storageContainer?.storageSection?.name }} &rsaquo; </span>
        <span>{{ sample?.storageContainer?.name }} &rsaquo; </span>
        <span>{{ sample?.storageSlot }}</span>
      </div>
    </div>
  </div>

  <div v-show="sample?.status === 'rejected'"
    class="bg-orange-600 rounded-sm shadow-md duration-500 px-4 sm:px-6 md:px-2 py-4 my-4">
    <!-- <h3 clas="font-bold text-gray-800 text-md">This sample was rejected because of the following reason(s):</h3> -->
    <ul>
      <li v-for="reason in sample?.rejectionReasons" :key="reason.uid">{{ reason.reason }}</li>
    </ul>
  </div>

  <router-view />
</template>
