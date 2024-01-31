<script lang="ts" setup>
  import { computed, defineAsyncComponent, reactive, ref } from 'vue'
  const LoadingMessage = defineAsyncComponent(
    () => import("../../components/Spinners/LoadingMessage.vue")
  )
  import { useAuthStore } from "../../stores";
  import { storeToRefs } from "pinia";

  const emit = defineEmits(["forgot"]);

  const authStore = useAuthStore();
  const { auth } = storeToRefs(authStore);

  const email = ref("");
  const token = ref("");

  const submitForm = () => {
    if(!auth.value.receivedToken){
      authStore.resetPasswordRequest(email.value);
    } else {
      authStore.validatePasswordResetToken(token.value);
    }
  }
  
  // password form
  const resetForm = reactive({
    password: "",
    passwordc: "" 
  })

  const formIsValid = computed<boolean>(() => {
    if (!resetForm.password || !resetForm.passwordc) return false;
    if (resetForm.password !== resetForm.passwordc) return false;
    return true;
  })

  const changePassword = () => {
    if(!formIsValid){
      alert("Correct Form errrs")
    }
    authStore.resetPassword(resetForm.password, resetForm.passwordc);
  }

</script>

<template>
  <div class="flex justify-center items-center h-screen bg-sky-800 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-sm">
      <div class="flex justify-center items-center">
        <span class="text-gray-700 font-semibold text-2xl">Laboratorio</span>
      </div>

      <form class="mt-4" @submit.prevent="submitForm" v-if="!auth.resetData?.canReset">
        <div v-if="!auth.receivedToken">
          <label class="block mt-3">        
           <div >
            <a class="px-2 py-1 border rounded-sm border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-600 hover:border-none hover:text-gray-100" 
            @click.prevent="emit('forgot')">&larr; Regresar</a>
           </div>
            <span class="text-gray-700 text-sm">Email</span>
            <input
              type="email"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800',
                {'border-red-500 focus:border-red-500': !email}
              ]"
              v-model="email"
              :disabled="auth.processing"
            />
          </label>      
          <div class="flex justify-between items-center mt-4">
            <div>
              <a class="block text-sm fontme text-indigo-700 hover:underline"
                @click.prevent="authStore.setReceivedResetToken(true)">Ingresar Token?</a
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
                  'bg-gray-500': !email,
                  'bg-sky-800 hover:bg-sky-600': email
                }
              ]"
              :disabled="!email"
            >
              <span>Solicitar reseteo de contraseña</span>
            </button>
            <div v-else class="text-center">
              <LoadingMessage message="Solicitando ..." />
            </div>
          </div>
        </div>

        <!-- Token -->

        <div v-else>
          <label class="block mt-3">        
           <div >
            <a class="px-2 py-1 border rounded-sm border-gray-300 text-gray-500 text-xs font-semibold hover:bg-gray-600 hover:border-none hover:text-gray-100" 
            @click.prevent="authStore.setReceivedResetToken(false)">&larr; Token no recibido</a>
           </div>
            <span class="text-gray-700 text-sm">Token</span>
            <input
              type="text"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800',
                {'border-red-500 focus:border-red-500': !token}
              ]"
              v-model="token"
              :disabled="auth.processing"
            />
          </label>   
          <div class="mt-6">
            <button
              v-if="!auth.processing"
              type="submit"
              :class="[
                'py-2 px-4 text-center  rounded-sm w-full text-white text-sm ',
                {
                  'bg-gray-500': !token,
                  'bg-sky-800 hover:bg-sky-600': token
                }
              ]"
              :disabled="!token"
            >
              <span>Enviar token</span>
            </button>
            <div v-else class="text-center">
              <LoadingMessage message="Validating password reset token ..." />
            </div>
          </div>
        </div>
      </form>

      <!-- Passowrd reset -->
      <form class="mt-4" @submit.prevent="changePassword" v-else>
        <p class="mt-2">Hie <span class="bg-blue-100">@{{ auth?.resetData?.username }}</span>. Cambiar su contraseña</p>
        <label class="block mt-3">        
            <span class="text-gray-700 text-sm">Contraseña</span>
            <input
              type="password"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800',
                {'border-red-500 focus:border-red-500': !formIsValid}
              ]"
              v-model="resetForm.password"
              :disabled="auth.processing"
            />
          </label>  
          <label class="block mt-3">
            <span class="text-gray-700 text-sm">Confirmacion de contraseña</span>
            <input
              type="password"
              :class="[
                'form-input mt-1 block w-full rounded-sm focus:border-sky-800',
                {'border-red-500 focus:border-red-500': !formIsValid}
              ]"
              v-model="resetForm.passwordc"
              :disabled="auth.processing"
            />
          </label>  
          <div class="mt-6">
            <button
              v-if="!auth.processing"
              type="submit"
              :class="[
                'py-2 px-4 text-center  rounded-sm w-full text-white text-sm ',
                {
                  'bg-gray-500': !formIsValid,
                  'bg-sky-800 hover:bg-sky-600': formIsValid
                }
              ]"
              :disabled="!formIsValid"
            >
              <span>Restablecer contraseña</span>
            </button>
            <div v-else class="text-center">
              <LoadingMessage message="Restableciendo contraseña..." />
            </div>
          </div>
      </form>
    </div>
  </div>
</template>
