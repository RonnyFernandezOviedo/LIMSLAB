<script setup lang="ts">
  import { ref, computed, defineAsyncComponent } from 'vue';
  const tabAnalysesCategories = defineAsyncComponent(
    () => import('./AnalysesCategories.vue')
  )
  const tabAnalysesProfiles = defineAsyncComponent(
    () => import('./AnalysesProfiles.vue')
  )
  const tabAnalysesServices = defineAsyncComponent(
    () => import('./services/index.vue')
  )
  const tabQualityControlLevels = defineAsyncComponent(
    () => import('./QCLevels.vue')
  )
  const tabQualityControlTemplates = defineAsyncComponent(
    () => import('./QCTemplates.vue')
  )
  const tabRejectionReasons = defineAsyncComponent(
    () => import('./RejectionReasons.vue')
  )

  import { useSampleStore, useSetupStore } from '../../../stores';

  const setupStore = useSetupStore()
  const  sampleStore = useSampleStore()

  let currentTab = ref('perfil-analisis');
  const tabs = [
    'perfil-analisis', 
    'servicio-analisis', 
    'categoria-analisis', 
    'rangos-control de calidad', 
    'plantillas-control de calidad',
    'razones de rechazo',
  ];
  let currentTabComponent = computed(() => 'tab-' + currentTab.value);

  sampleStore.fetchSampleTypes();    
  setupStore.fetchDepartments({});   

</script>



<template>
  <div class="mt-4">

        <nav class="bg-white shadow-md mt-2">
          <div class="-mb-px flex justify-start">
            <a
              v-for="tab in tabs"
              :key="tab"
              :class="[
                'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
                { 'tab-active': currentTab === tab },
              ]"
              @click="currentTab = tab"
             
            >
              {{ tab }}
            </a>
          </div>
        </nav>

        <tab-analyses-profiles v-if="currentTab === 'perfil-analisis'"/>
        <tab-analyses-services v-else-if="currentTab === 'servicio-analisis'" />
        <tab-analyses-categories v-else-if="currentTab === 'categoria-analisis'" />
        <tab-quality-control-levels v-else-if="currentTab === 'rangos-control de calidad'" />
        <tab-quality-control-templates v-else-if="currentTab === 'plantillas-control de calidad'" />
        <tab-rejection-reasons v-else-if="currentTab === 'razones de rechazo'" />

  </div>

</template>

<style lang="postcss">

</style>

