<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useLocationStore } from '../../stores';
const PageHeading = defineAsyncComponent(
  () => import("../components/PageHeading.vue")
)

const locationStore = useLocationStore()
const resetSelected = () => locationStore.updateConfRoute("");
const selectedRoute = computed(() => locationStore.getConfRoute)
</script>

<template>
  <PageHeading title="Configuraciones" />
  <div class="flex justify-start italic uppercase text-md text-gray-600 font-bold">
    <span @click="resetSelected">
      <router-link to="/admin" class="no-underline">
        <h4 class="text-gray-600">Principal:</h4>
      </router-link>
    </span>
    <span v-if="selectedRoute" class="mx-4 font-extrabold">&rarr;</span>
    <span class="text-gray-400"> {{ selectedRoute }}</span>
  </div>
  <hr class="my-4">

  <router-view />
</template>