<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const PatientForm = defineAsyncComponent(
  () => import('./PatientForm.vue')
)
</script>

<template>
  <section class="w-3/6">
    <h1 class="h1 my-4 text-lg font-bold text-dark-700 uppercase">Formulario nueva solicitud</h1>
    <PatientForm :navigate="true" />
  </section>
</template>



