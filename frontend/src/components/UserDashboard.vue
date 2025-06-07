<template>
    <div class="grid gap-6 lg:grid-cols-3">
        <!-- Kartu Janji Terdekat -->
        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Janji Terdekat</h3>
            <p class="text-lg font-semibold text-blue-600">27 Mei 2025 - 10:00 WIB</p>
            <p class="text-gray-700 text-sm">Konsultasi dokumen warisan</p>
        </div>

        <!-- Status Akta -->
        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Status Akta Terbaru</h3>
            <p class="text-lg font-semibold text-green-600">Menunggu tanda tangan</p>
        </div>

        <!-- Dokumen Pending -->
        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Dokumen Akta Terbaru</h3>
            <p class="text-lg font-semibold text-yellow-600">1 dokumen belum lengkap</p>
            <a href="/dokumen" class="text-sm text-blue-600 hover:underline">Unggah Sekarang</a>
        </div>

        <!-- Aksi Cepat -->
        <div class="col-span-full flex gap-4 mt-4">
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" @click="createAppointment">Buat
                Janji
                Baru</button>

            <button class="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200" @click="viewDeeds">Lihat Semua
                Akta</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();

const createAppointment = () => {
    router.push({ name: 'appointmentCreate' })
}

const viewDeeds = () => {
    router.push({ name: 'akta' })
}
</script>