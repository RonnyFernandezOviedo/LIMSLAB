<script setup lang="ts">
import { h, ref, reactive, computed, defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { IAnalysisProfile, IAnalysisService, ISample } from "../../models/analysis";
import { ifZeroEmpty, parseDate } from "../../utils/helpers";
import { useSampleStore, useAnalysisStore } from "../../stores";
import { useSampleComposable } from "../../composables";
const DataTable = defineAsyncComponent(
  () => import("../../components/datatable/DataTable.vue")
)

import * as shield from "../../guards";

const sampleStore = useSampleStore();
const analysisStore = useAnalysisStore();

const { samplePageInfo, fetchingSamples } = storeToRefs(sampleStore);

let route = useRoute();
let router = useRouter();

const state = reactive({
  can_cancel: false,
  can_receive: false,
  can_reinstate: false,
  can_reject: false,
  can_copy_to: false,
  can_download: false,
  can_print: false,
  can_publish: false,
  can_store: false,
  can_recover: false,
});

// samples
const samples = computed<ISample[]>(() => sampleStore.getSamples);
const filterOptions = ref([
  { name: "Todas", value: "" },
  { name: "Esperada", value: "esperada" },
  { name: "Recibida", value: "recibido" },
  { name: "Esperando", value: "Esperando" },
  { name: "Aprobada", value: "aprobada" },
  { name: "Publicada", value: "publicado" },
  { name: "Invalidada", value: "invalidada" },
  { name: "Cancelada", value: "cancelada" },
  { name: "Rechazada", value: "rechazada" },
  { name: "Almacenada", value: "stored" },
  { name: "Referred", value: "referred" },
  { name: "Paired", value: "paired" },
]);

const tableColumns = ref([
  {
    name: "UID",
    value: "uid",
    sortable: true,
    sortBy: "asc",
    defaultSort: true,
    showInToggler: false,
    hidden: true,
  },
  {
    name: "",
    value: "",
    sortable: false,
    showInToggler: false,
    hidden: false,
    customRender: function (sample, _) {
      return h("div", [
        sample.priority! > 1
          ? h(
            "span",
            { class: [{ "text-orange-600": sample.priority! > 1 }] },
            h("i", { class: "fa fa-star" })
          )
          : "",
        sample.status === "stored" ? h("span", h("i", { class: "fa-briefcase" })) : "",
      ]);
    },
  },
  {
    name: "ID Muestra",
    value: "sampleId",
    sortable: true,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      return h(RouterLink, {
        to: {
          name: "sample-detail",
          params: {
            patientUid: sample?.analysisRequest?.patient?.uid,
            sampleUid: sample?.uid,
          },
        },
        innerHTML: sample?.sampleId,
      });
    },
  },
  {
    name: "Tipo Muestra",
    value: "sampleType.name",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Analisis",
    value: "",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      return h(
        "span",
        {
          innerHTML: profileAnalysesText(sample["profiles"], sample["analyses"]),
        },
        []
      );
    },
  },
  {
    name: "Contacto Cliente",
    value: "",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      const firstName = "analysisRequest.patient.firstName"
        .split(".")
        .reduce((acc, val) => acc?.[val], sample);
      const lasstName = "analysisRequest.patient.lastName"
        .split(".")
        .reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: `${firstName} ${lasstName}`,
        },
        []
      );
    },
  },
  {
    name: "Cliente",
    value: "analysisRequest.client.name",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Codigo Cliente",
    value: "analysisRequest.client.code",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "ID Muestra Cliente",
    value: "analysisRequest.clientRequestId",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Fecha-recoleccion",
    value: "dateCollected",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Fecha-creacion",
    value: "createdAt",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Creador",
    value: "createdBy.firstName",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Fecha-recibido",
    value: "dateReceived",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Fecha-envio",
    value: "dateSubmitted",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Fecha-verificacion",
    value: "dateVerified",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Fecha-publicacion",
    value: "datePublished",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Fecha-impresion",
    value: "datePrinted",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Impreso",
    value: "printed",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Estado",
    value: "status",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "button",
        {
          type: "button",
          class: "bg-sky-800 text-white py-1 px-2 rounded-sm leading-none",
          innerHTML: value,
        },
        []
      );
    },
  },
]);

if (route?.query?.clientUid) {
  sampleStore.resetSamples();
}

sampleStore.fetchSampleTypes();

let analysesParams = reactive({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
});
analysisStore.fetchAnalysesServices(analysesParams);
analysisStore.fetchAnalysesProfiles();

function profileAnalysesText(
  profiles: IAnalysisProfile[],
  analyses: IAnalysisService[]
): string {
  let names: string[] = [];
  profiles.forEach((p) => names.push(p.name!));
  analyses.forEach((a) => names.push(a.name!));
  return names.join(", ");
}

let sampleParams = reactive({
  first: 50,
  before: "",
  status: "",
  text: "",
  sortBy: ["-uid"],
  clientUid: ifZeroEmpty(route?.query?.clientUid),
  filterAction: false,
});
sampleStore.fetchSamples(sampleParams);

function showMoreSamples(opts: any): void {
  sampleParams.first = opts.fetchCount;
  sampleParams.before = samplePageInfo?.value?.endCursor ?? "";
  sampleParams.text = opts.filterText;
  sampleParams.status = opts.filterStatus;
  sampleParams.filterAction = false;
  sampleStore.fetchSamples(sampleParams);
}

function filterSamples(opts: any): void {
  sampleParams.first = 50;
  sampleParams.before = "";
  sampleParams.text = opts.filterText;
  sampleParams.status = opts.filterStatus;
  sampleParams.filterAction = true;
  sampleStore.fetchSamples(sampleParams);
}

// sample tooltip
const sampleToolTip = (sample: ISample) => {
  const sc = sample?.storageContainer;
  const ss = sc?.storageSection;
  const sl = ss?.storageLocation;
  const sr = sl?.storeRoom;
  return `${sr?.name} > ${sl?.name} > ${ss?.name} > ${sc?.name} > ${sample?.storageSlot}`;
};

// user actions perms

const allChecked = ref(false);
function toggleCheckAll(opts: any): void {
  samples.value?.forEach((sample: ISample) => (sample.checked = opts.checked));
  allChecked.value = opts.checked;
  checkUserActionPermissios();
}

function toggleCheck(sample: ISample): void {
  const index = samples.value.findIndex((s) => s.uid === sample.uid);
  samples.value[index].checked = sample.checked;
  if (areAllChecked()) {
    allChecked.value = true;
  } else {
    allChecked.value = false;
  }
  checkUserActionPermissios();
}

function unCheck(sample: ISample): void {
  const index = samples.value.findIndex((s) => s.uid === sample.uid);
  samples.value[index].checked = false;
  allChecked.value = false;
  checkUserActionPermissios();
}

async function unCheckAll() {
  samples.value?.forEach((sample: ISample) => (sample.checked = false));
  allChecked.value = false;
  checkUserActionPermissios();
}

function areAllChecked(): Boolean {
  return samples.value?.every((sample: ISample) => sample.checked === true);
}

function getSamplesChecked(): ISample[] {
  let box: ISample[] = [];
  samples.value?.forEach((sample: ISample) => {
    if (sample.checked) box.push(sample);
  });
  return box;
}

function checkUserActionPermissios(): void {
  // reset
  state.can_cancel = false;
  state.can_receive = false;
  state.can_reinstate = false;
  state.can_download = false;
  state.can_publish = false;
  state.can_print = false;
  state.can_reject = false;
  state.can_store = false;
  state.can_recover = false;
  state.can_copy_to = false;

  const checked: ISample[] = getSamplesChecked();
  if (checked.length === 0) return;

  // can_receive
  if (checked.every((sample: ISample) => sample.status === "esperada")) {
    state.can_receive = true;
  }

  // can_cancel
  if (
    checked.every((sample: ISample) => ["recibido", "esperada"].includes(sample.status!))
  ) {
    state.can_cancel = true;
    state.can_reject = true;
  }

  // can_store;
  if (checked.every((sample: ISample) => ["recibido"].includes(sample.status!))) {
    state.can_store = true;
    state.can_copy_to = true;
  }

  if (checked.every((sample: ISample) => ["stored"].includes(sample.status!))) {
    state.can_recover = true;
  }

  // can_reinstate
  if (checked.every((sample: ISample) => sample.status === "cancelada")) {
    state.can_reinstate = true;
  }

  // can_download
  if (
    checked.every((sample: ISample) => ["aprobada", "publicado"].includes(sample.status!))
  ) {
    state.can_copy_to = true;
  }

  // can_print
  if (checked.every((sample: ISample) => sample.status === "aprobada")) {
    state.can_publish = true;
  }

  // can_print
  if (checked.every((sample: ISample) => sample.status === "publicado")) {
    state.can_print = true;
    state.can_download = true;
  }
}

function getSampleUids(): string[] {
  const items: ISample[] = getSamplesChecked();
  let ready: string[] = [];
  items?.forEach((item) => ready.push(item.uid!));
  return ready;
}

//
const {
  cancelSamples,
  reInstateSamples,
  receiveSamples,
  printSamples,
  downloadSamplesImpress,
  publishSamples,
  recoverSamples,
  cloneSamples,
} = useSampleComposable();

const countNone = computed(
  () => sampleStore.getSamples?.length + " de " + sampleStore.getSampleCount + " samples"
);

const cloneSamples_ = async () =>
  cloneSamples(getSampleUids()).finally(() => unCheckAll());

const cancelSamples_ = async () =>
  cancelSamples(getSampleUids()).finally(() => unCheckAll());

const reInstateSamples_ = async () =>
  reInstateSamples(getSampleUids()).finally(() => unCheckAll());

const receiveSamples_ = async () =>
  receiveSamples(getSampleUids()).finally(() => unCheckAll());

const publishReports_ = async () => {
  const samples = getSampleUids().map((uid) => ({ uid, action: "publicado" }));
  await publishSamples(samples).finally(() => unCheckAll());
};

const printReports_ = async () =>
  await printSamples(getSampleUids()).finally(() => unCheckAll());

const impressDownload_ = async () =>
  await downloadSamplesImpress(getSampleUids()).finally(() => unCheckAll());

const prepareRejections = async () => {
  const selection = getSamplesChecked();
  router.push({ name: "reject-samples", state: { samples: JSON.stringify(selection) } });
};
const prepareStorages = async () => {
  const selection = getSamplesChecked();
  router.push({ name: "store-samples", state: { samples: JSON.stringify(selection) } });
};
const recoverSamples_ = async () =>
  recoverSamples(getSampleUids()).finally(() => unCheckAll());
</script>

<template>
  <div class="mb-4 flex justify-start">
    <router-link v-show="shield.hasRights(shield.actions.CREATE, shield.objects.SAMPLE)" to="/patients/search"
      class="px-2 py-1 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Agregar Solicitud de Laboratorio
      </router-link>
  </div>
  <hr />
  <DataTable :columns="tableColumns" :data="samples" :toggleColumns="true" :loading="fetchingSamples" :paginable="true"
    :pageMeta="{
      fetchCount: sampleParams.first,
      hasNextPage: samplePageInfo?.hasNextPage,
      countNone,
    }" :searchable="true" :filterable="true" :filterMeta="{
  defaultFilter: sampleParams.status,
  filters: filterOptions,
}" :selectable="true" :allChecked="allChecked" @onSearch="filterSamples" @onPaginate="showMoreSamples"
    @onCheck="toggleCheck" @onCheckAll="toggleCheckAll">
    <template v-slot:footer>
      <div>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_cancel
        " @click.prevent="cancelSamples_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Cancelar
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_reinstate
        " @click.prevent="reInstateSamples_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          ReInstate
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_receive
        " @click.prevent="receiveSamples_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Recibir
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_store
        " @click.prevent="prepareStorages()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Almacenar
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_recover
        " @click.prevent="recoverSamples_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Recuperar
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_reject
        " @click.prevent="prepareRejections()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Rechazar
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_copy_to
        " @click.prevent="cloneSamples_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Copiar a nueva
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_download
        " @click.prevent="impressDownload_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Descargar
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_publish
        " @click.prevent="publishReports_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Publish
        </button>
        <button v-show="
          shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
          state.can_print
        " @click.prevent="printReports_()"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800rounded-smtransition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">
          Imprimir
        </button>
      </div>
    </template>
  </DataTable>
</template>
