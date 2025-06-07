<template>
    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">

        <h2 class="text-xl font-bold">Form permintaan pembuatan Akta</h2>
        <DeedAdminForm v-if="authStore.isAdmin" />
        <DeedUserForm v-else />
    </div>
</template>

<script lang="ts" setup>
import DeedAdminForm from '../../components/DeedAdminForm.vue';
import DeedUserForm from '../../components/DeedUserForm.vue';
import { useAuthStore } from '../../stores/authStore';

const authStore = useAuthStore()
</script>
