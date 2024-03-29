<script setup lang="ts">
import { computed, defineAsyncComponent, toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore, useAuditLogStore } from "../../stores";
import { parseDate } from "../../utils/helpers";
const LoadingMessage = defineAsyncComponent(
  () => import("../../components/Spinners/LoadingMessage.vue")
)

const props = defineProps({
  targetId: String,
  targetType: String,
});
const { targetType, targetId } = toRefs(props);

const userStore = useUserStore();
const auditLogStore = useAuditLogStore();
auditLogStore.restLogs();

const { auditLogs, fetchingAudits } = storeToRefs(auditLogStore);

userStore.fetchUsers({});
auditLogStore.fetchAuditLogs({
  targetType: targetType?.value,
  targetId: targetId?.value,
});

let users = computed(() => userStore.getUsers);

function translateUser(userId: any): string {
  const user = users?.value?.find(
    (u: any) => u["uid"]?.toString() === userId?.toString()
  );
  if (!user) return "";
  return (user as any)["auth"]["userName"];
}

function translateAction(action: number): string {
  if (action === 1) return "creado";
  if (action === 2) return "actualizo";
  if (action === 3) return "borrado";
  return "";
}

function changes(log: any): any {
  let trails = new Set();
  Object.entries(log?.stateBefore)?.map(([keyB, valueB]) => {
    Object.entries(log?.stateAfter)?.map(([keyA, valueA]) => {
      if (keyB === keyA && valueB !== valueA) {
        // user_uids translation
        if (keyA && keyA === "updated_by_uid") {
          keyA = "actualizado_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "submitted_by_uid") {
          keyA = "cargado_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "verified_by_uid") {
          keyA = "verificado_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "updated_at") {
          keyA = "actualizado_el";
          valueB = parseDate(valueB);
          valueA = parseDate(valueA);
        }
        if (keyA && keyA === "cancelled_by_uid") {
          keyA = "cancelado_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "received_by_uid") {
          keyA = "recibido_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "published_by_uid") {
          keyA = "publicado_por";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "status") {
          keyA = "cambio_estado";
        }
        if (keyA && keyA === "date_received") {
          keyA = "fecha_recibido";
          valueA = parseDate(valueA);
        }
        if (keyA && keyA === "date_submitted") {
          keyA = "fecha_carga";
          valueA = parseDate(valueA);
        }
        if (keyA && keyA === "date_verified") {
          keyA = "fecha_verificacion";
          valueA = parseDate(valueA);
        }
        if (keyA && keyA === "date_published") {
          keyA = "fecha_publicacion";
          valueA = parseDate(valueA);
        }

        trails.add({
          key: keyA,
          old: (valueB as any)?.length > 0 ? valueB : "",
          new: (valueA as any)?.toString()?.length > 0 ? valueA : "Ninguna",
        });
      }
    });
  });
  return trails;
}
</script>

<template>
  <div class="relative mt-4">
    <div class="border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0" style="left: 7px"></div>
    <div v-if="fetchingAudits" class="py-4 text-center">
      <LoadingMessage message="Recopilando audit logs ..." />
    </div>
    <ul v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }" :delay="200" class="list-none m-0 p-0" v-else>
      <li v-for="log in auditLogs" :key="log.uid" class="mb-2">
        <div class="flex items-center mb-1">
          <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
          <div class="ml-4 font-medium italic">
            <span>
              {{ translateUser(log?.userId) }} {{ translateAction(log?.action) }}
             <!-- {{ log?.targetType }} by Ronny-->
            </span>la muestra
            el <span> {{ parseDate(log?.stateAfter?.updated_at) }}</span>
          </div>
        </div>
        <div class="ml-12 w-100">
          <div v-for="trail of changes(log)" :key="trail.key" class="grid grid-cols-4">
            <span class="col-span-1">
              <span class="text-sm text-gray-600 italic">{{ trail?.key }}</span>
            </span>
            <span class="col-span-3">
              <span class="text-muted text-xs text-orange-600">{{ trail?.old }}</span>
              &rarr;
              <span class="text-muted text-xs text-sky-800">{{ trail?.new }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
