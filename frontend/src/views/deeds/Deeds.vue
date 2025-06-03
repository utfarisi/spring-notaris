<template>
    <div>
        <AdminDeed v-if="authStore.isAdmin" />
        <UserDeeds v-else />

    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import UserDeeds from '@/components/UserDeeds.vue'
import AdminDeed from '@/components/AdminDeed.vue'


const authStore = useAuthStore()


</script>
