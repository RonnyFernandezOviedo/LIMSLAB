<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
const ItemSetting = defineAsyncComponent(
  () => import("../components/AdminBreadCrumb.vue") 
);

const configs = ref([
  { title: "Pais, Provincias, Distritos", path: "/admin/location-conf", icon: "flag" },
  {
    title: "Laboratorio, Departamentos",
    path: "/admin/laboratory-conf",
    icon: "file-medical",
  },
  { title: "Usuarios, Grupos", path: "/admin/users-conf", icon: "users" },
  { title: "Proveedor, Fabricantes", path: "/admin/suppliers-conf", icon: "caravan" },
  {
    title: "Instrumentos, Metodos, Unidades",
    path: "/admin/instruments-conf",
    icon: "laptop-medical",
  },
  { title: "Tipo de muestras", path: "/admin/sampletypes-conf", icon: "fill" },
  { title: "Codigo estandar", path: "/admin/coding-conf", icon: "fill" },
  { title: "Identificacion personal", path: "/admin/identification-conf", icon: "fill" },
  {
    title: "Tests, Categorias, Perfiles, QC",
    path: "/admin/analyses-conf",
    icon: "microscope",
  },
  {
    title: "Hoja de trabajo",
    path: "/admin/worksheets-conf",
    icon: "grip-horizontal",
  },
  { title: "Email, SMS", path: "/admin/publication-conf", icon: "copy" },
  { title: "Reflex Reglas", path: "/admin/reflex-rule-conf", icon: "code-branch" },
  { title: "Cargar datos", path: "/admin/setup-data-conf", icon: "database" },
  { title: "Inventario", path: "/admin/inventory-conf", icon: "database" },
  { title: "Muestras Remisión", path: "/admin/shipment-conf", icon: "truck" },
]);
</script>

<template>
  <div class="container w-full my-4">
    <ul class="grid grid-cols-12 gap-4 my-2.5">
      <item-setting v-for="setting in configs" :key="setting.path" :title="setting.title" :path="setting.path"
        :icon="setting.icon" />
    </ul>
    <hr />
  </div>
</template>
