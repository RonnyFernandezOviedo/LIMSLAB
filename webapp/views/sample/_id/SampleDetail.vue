<script setup lang="ts">
import { ref, computed, reactive, defineAsyncComponent } from "vue";
import { useSampleStore } from "../../../stores";

const tabResults = defineAsyncComponent(
  () => import("./Results.vue")
)
const tabImpress = defineAsyncComponent(
  () => import("./Impress.vue")
)
const tabLogs = defineAsyncComponent(
  () => import("../../components/AuditLog.vue")
)

const sampleStore = useSampleStore();

const state = reactive({
  currentTab: ref("analisis-resultados"),
  tabs: ["analisis-resultados", "auditoria", "reportes"],
  sample: computed(() => sampleStore.getSample),
});

let currentTabComponent = computed(() => "tab-" + state.currentTab);
</script>

<template>
  <section class="col-span-12">
    <nav class="bg-white shadow-md mt-2" v-motion-slide-left>
      <div class="-mb-px flex justify-start">
        <a
          v-for="tab in state.tabs"
          :key="tab"
          :class="[
            'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
            { 'tab-active': state.currentTab === tab },
          ]"
          @click="state.currentTab = tab"
         
        >
          {{ tab }}
        </a>
      </div>
    </nav>

    <div>
      <tab-results v-if="state.currentTab === 'analisis-resultados'" />
      <tab-logs
        v-if="state.currentTab === 'auditoria'"
        targetType="sample"
        :targetId="state.sample?.uid"
      />
      <tab-impress v-if="state.currentTab === 'reportes'" />
    </div>
  </section>
</template>
