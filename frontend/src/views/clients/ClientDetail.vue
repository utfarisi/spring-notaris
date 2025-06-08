<template>
    <div class="container mx-auto p-6">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-3xl font-bold text-gray-800">Detail Pelanggan</h2>
        </div>

        <div v-if="!customer && !error" class="bg-white p-8 rounded-lg shadow-lg text-center text-gray-600">
            <p>Memuat detail pelanggan...</p>
        </div>

        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">Gagal memuat detail pelanggan: {{ error.message }}</span>
        </div>

        <div v-if="customer" class="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Informasi Personal</h3>
                <div class="mb-3">
                    <p class="text-sm text-gray-500">Nama Lengkap:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.fullname }}</p>
                </div>
                <div class="mb-3">
                    <p class="text-sm text-gray-500">NIP:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.nip }}</p>
                </div>
                <div class="mb-3">
                    <p class="text-sm text-gray-500">Nomor Telepon:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.phone }}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-500">Alamat:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.address }}</p>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Informasi Akun</h3>
                <div class="mb-3">
                    <p class="text-sm text-gray-500">Username:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.username }}</p>
                </div>
                <div class="mb-3">
                    <p class="text-sm text-gray-500">Email:</p>
                    <p class="text-lg font-medium text-gray-900">{{ customer.email }}</p>
                </div>
            </div>

        </div>

        <div class="mt-8 text-center">
            <button @click="router.back()"
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                Kembali ke Daftar Pelanggan
            </button>
        </div>
    </div>
</template>

<script setup>
import api from '@/libs/utils';
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const customer = ref(null)
const id = ref(null)
const error = ref(null)

onMounted(async () => {
    id.value = route.params.id;
    if (!id.value) {
        error.value = new Error("ID pelanggan tidak ditemukan di URL.");
        return;
    }

    try {
        const res = await api.get(`/clients/${id.value}/show`);
        customer.value = res.data;
    } catch (err) {
        console.error("Error fetching client details:", err);

        if (err.response && err.response.status === 404) {
            error.value = new Error("Pelanggan tidak ditemukan.");
        } else {
            error.value = new Error("Terjadi kesalahan saat memuat detail pelanggan.");
        }
    }
})
</script>

<style scoped></style>