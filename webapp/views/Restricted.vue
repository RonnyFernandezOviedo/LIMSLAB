<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { pages } from "./../router/constants";

  const router = useRouter();
  const goHome = () => router.push({ name: pages.DASHBOARD });
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-gray-700 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-sm">
      <div class="flex justify-center items-center mb-2">
        <span class="text-gray-700 font-semibold text-2xl">LIMS Laboratorio</span>
      </div>
      <hr>
      <section class="flex justify-center items-center mt-4">
        <h1>Lo siento! Usted no esta autorizado para acceder a esta seccion</h1>

        <div>
          <button 
          @click="goHome"
          class="ml-4 py-2 px-4 text-center border-indigo-200 border rounded-sm w-full text-indigo-600 text-sm hover:bg-indigo-600 hover:text-white">
            Regresar
          </button>
        </div>

      </section>
    </div>
  </div>
</template>

