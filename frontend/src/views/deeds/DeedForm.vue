<template>
    <div class="max-w-3xl p-6 mx-auto space-y-4 bg-white shadow rounded-xl">

        <h2 class="text-xl font-bold">Form permintaan pembuatan Akta</h2>
        <DeedAdminForm v-if="authStore.isAdmin" />
        <DeedUserForm v-else />
    </div>
</template>

<script setup>
import DeedAdminForm from '@/components/DeedAdminForm.vue';
import DeedUserForm from '@/components/DeedUserForm.vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()
</script>
