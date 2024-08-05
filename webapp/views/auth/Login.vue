<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue'
  const LoadingMessage = defineAsyncComponent(
    () => import("../../components/Spinners/LoadingMessage.vue")
  )
  import { useAuthStore } from "../../stores";
  import { storeToRefs } from "pinia";

  import { useField, useForm } from "vee-validate";
  import { object, string } from "yup";

  const emit = defineEmits(["forgot"]);

  const authStore = useAuthStore();
  const { auth } = storeToRefs(authStore);

  const authSchema = object({
    username: string().required("Username is Required"),
    password: string().required("Password is Required"),
  });

  const { handleSubmit, errors } = useForm({
    validationSchema: authSchema,
  });

  const { value: username } = useField("username");
  const { value: password } = useField("password");

  const login = handleSubmit((values) => {
      authStore.authenticate(values);
  });


</script>

<template>
  <div class="flex justify-center items-center h-screen bg-sky-900 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-sm">
      <div class="flex justify-center items-center">
        <span class="text-gray-700 font-semibold text-2xl">Laboratorio</span>
      </div>

      <form v-if="!auth.isAuthenticated" class="mt-4" @submit.prevent="login">
          <label class="block">
            <span class="text-gray-700 text-sm">Usuario</span>
            <input
              type="text"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800 outline-none',
                {'border-red-500 focus:border-red-500 transision-colors duratioon-150': errors?.username}
              ]"
              v-model="username"
              :disabled="auth.processing"
            />
          </label>

          <label class="block mt-3">
            <span class="text-gray-700 text-sm">Contraseña</span>
            <input
              type="password"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800',
                {'border-red-500 focus:border-red-500': errors?.password}
              ]"
              v-model="password"
              :disabled="auth.processing"
            />
          </label>
          <div class="flex justify-between items-center mt-4">
            <div>
              <a class="block text-sm fontme text-indigo-700 hover:underline"
                @click.prevent="emit('forgot')">Olvide mi contraseña?</a
              >
            </div>
          </div>
          <div class="mt-6">
          <button
            v-if="!auth.processing"
            type="submit"
            :class="[
              'py-2 px-4 text-center  rounded-sm w-full text-white text-sm ',
              {
                'bg-gray-500': !password || !username,
                'bg-sky-800 hover:bg-sky-600': password && username
              }
            ]"
            :disabled="!password || !username"
          >
            <span>Ingreso</span>
          </button>
          <div v-else class="text-center">
            <LoadingMessage message="Ingresando..." />
          </div>
        </div>
      </form>
      <LoadingMessage v-else message="Redirigiendo, favor espere..." />
    </div>
  </div>
</template>
