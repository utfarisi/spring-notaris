<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white rounded shadow-md">
      <h2 class="mb-4 text-2xl font-semibold text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1 text-sm font-medium">Username</label>
          <input v-model="username" type="text" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 text-sm font-medium">Password</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <div v-if="error" class="mb-2 text-sm text-red-500">{{ error }}</div>
        <button type="submit" class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Login
        </button>
        or
        <router-link to="/register">Registrasi</router-link>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    const meRes = await api.get('/auth/me', { withCredentials: true })
    authStore.user = meRes.data

    // Redirect ke home
    router.push({ name: 'Home' })
  } catch (err: any) {
    error.value = err.response?.data || 'Login failed'
    console.log(" error ", error.value)
  }
}
</script>
