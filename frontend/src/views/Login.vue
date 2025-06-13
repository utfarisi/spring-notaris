<template>
  <div class="flex flex-col items-center justify-center">
    <div class="w-full">
      <h2 class="mb-6 text-3xl font-bold text-center text-gray-800">Selamat Datang</h2>
      <p class="mb-8 text-center text-gray-600">Silakan masuk ke akun Anda</p>

      <form @submit.prevent="handleLogin">
        <div class="mb-5">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input v-model="username" type="text" id="username"
            class="w-full p-3 transition duration-200 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required aria-label="Username" />
        </div>

        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" id="password"
            class="w-full p-3 transition duration-200 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required aria-label="Password" />
        </div>

        <div v-if="error" class="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-md" role="alert">
          {{ error }}
        </div>

        <button type="submit"
          class="w-full px-5 py-3 text-lg font-semibold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Login
        </button>

        <div class="mt-6 text-center text-gray-600">
          Belum punya akun?
          <router-link to="/register" class="font-medium text-blue-600 hover:underline">Registrasi di sini</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/libs/utils'
import { useAuthStore } from '@/stores/authStore'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  error.value = ''
  try {
    // Kirim login
    await api.post('/auth/login', {
      username: username.value,
      password: password.value,
    })


    // Fetch user info
    const meRes = await api.get('/auth/me')
    authStore.user = meRes.data

    // Redirect ke home
    router.push({ name: 'Home' })
  } catch (err) {
    error.value = err.response?.data || 'Login failed'
    console.log(" error ", error.value)
  }
}
</script>
