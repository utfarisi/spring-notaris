<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <div class="max-w-2xl p-6 mx-auto bg-white rounded shadow">
      <h1 class="mb-4 text-2xl font-bold">Dashboard</h1>
      <div v-if="user">
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Role:</strong> {{ user.role }}</p>
      </div>
      <button @click="handleLogout" class="px-4 py-2 mt-6 text-white bg-red-600 rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = authStore.user

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>
