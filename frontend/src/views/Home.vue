<template>
  <div>
    <AdminDashboard v-if="auth.isAdmin" />
    <UserDashboard v-else />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import AdminDashboard from '../components/AdminDashboard.vue'
import UserDashboard from '../components/UserDashboard.vue'

const authStore = useAuthStore()
const router = useRouter()

const auth = useAuthStore()
const user = authStore.user

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>
