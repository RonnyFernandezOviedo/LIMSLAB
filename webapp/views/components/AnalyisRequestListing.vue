<script setup lang="ts">
import { defineAsyncComponent, toRefs, watch } from "vue";
import { storeToRefs } from "pinia";
import { parseDate } from "../../utils/helpers";
import { useSampleStore } from "../../stores";
const LoadingMessage = defineAsyncComponent(
  () => import("../../components/Spinners/LoadingMessage.vue")
)

const props = defineProps({
  target: String,
  targetUid: String,
});

const { targetUid, target } = toRefs(props);

const sampleStore = useSampleStore();
const { analysisRequests, fetchingAnalysisRequests } = storeToRefs(sampleStore);

if (target?.value === "patient-samples")
  sampleStore.fetchAnalysisRequestsForPatient(targetUid?.value);
if (target?.value === "client-samples")
  sampleStore.fetchAnalysisRequestsForClient(targetUid?.value);

watch(
  () => props.targetUid,
  (uid, prev) => {
    sampleStore.resetAnalysisRequests();
    if (target?.value === "patient-samples")
      sampleStore.fetchAnalysisRequestsForPatient(uid);
    if (target?.value === "client-samples")
      sampleStore.fetchAnalysisRequestsForClient(uid);
  }
);

function profileAnalysesText(profiles: any[], analyses: any[]): string {
  let names: string[] = [];
  profiles.forEach((p) => names.push(p.name));
  analyses.forEach((a) => names.push(a.name));
  return names.join(", ");
}
</script>

<template>
  <div class="overflow-x-auto mt-4">
    <div
      class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard p-2 rounded-bl-sm rounded-br-sm">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"></th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
              ID Muestra
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">
              ID Muestra Cliente
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">
              Cliente
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">
              Creado
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">
              Creador
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">
              Estado
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300"></th>
          </tr>
        </thead>
        <tbody class="bg-white" v-for="request in analysisRequests" :key="request.uid">
          <tr v-for="sample in request.samples" :key="sample.uid" v-motion-slide-right>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <span v-if="sample.priority ?? 0 < 1" :class="[
                'font-small',
                { 'text-orange-600': sample.priority ?? 0 == 0 },
              ]">
                <i class="fa fa-star"></i>
              </span>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="flex items-center">
                <div class="font-semibold">
                  <router-link :to="{
                    name: 'sample-detail',
                    params: {
                      patientUid: request.patient?.uid,
                      sampleUid: sample?.uid,
                    },
                  }">{{ sample.sampleId }}</router-link>
                </div>
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                {{ request.clientRequestId }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">{{ request.patient?.client.name }}</div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                {{ parseDate(sample?.createdAt) }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                {{ sample?.createdBy?.firstName }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <button type="button" class="bg-cyan-600 text-white p-1 rounded-sm leading-none">
                {{ sample.status }}
              </button>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
              <router-link :to="{
                name: 'sample-detail',
                params: { patientUid: request.patient?.uid, sampleUid: sample?.uid },
              }"
                class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Ver</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="fetchingAnalysisRequests" class="py-4 text-center">
        <LoadingMessage message="Obteniendo solicitudes de análisis..." />
      </div>
    </div>
  </div>
</template>
