<template>
  <div>
    <AdminDashboard v-if="auth.isAdmin" />
    <UserDashboard v-else />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import AdminDashboard from '@/components/AdminDashboard.vue'
import UserDashboard from '@/components/UserDashboard.vue'

const auth = useAuthStore()
</script>
