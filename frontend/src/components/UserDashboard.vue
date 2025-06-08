<template>
    <div class="grid gap-6 lg:grid-cols-3">
        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Janji Terdekat</h3>
            <p class="text-lg font-semibold text-blue-600">27 Mei 2025 - 10:00 WIB</p>
            <p class="text-gray-700 text-sm">Konsultasi dokumen warisan</p>
        </div>

        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Status Akta Terbaru</h3>
            <p class="text-lg font-semibold text-green-600">
                {{ translateStatus(currentDeed?.deedStatus) }}
            </p>
        </div>

        <div class="bg-white p-4 rounded shadow col-span-1">
            <h3 class="text-sm text-gray-500">Dokumen Akta Terbaru</h3>
            <p v-if="documentsPendingCount > 0" class="text-lg font-semibold text-yellow-600">
                {{ documentsPendingCount }} dokumen belum lengkap
            </p>
            <p v-else class="text-lg font-semibold text-green-600">
                Semua dokumen lengkap
            </p>
            <router-link v-if="documentsPendingCount > 0" :to="`users/deeds/${currentDeed.id}/upload-documents`"
                class="text-sm text-blue-600 hover:underline">
                Unggah Sekarang
            </router-link>
            <span v-else class="text-sm text-gray-500">Tidak ada aksi diperlukan</span>
        </div>

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
import { ref, onMounted, computed } from 'vue'; // Import 'computed'
import api from '@/libs/utils'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'

const router = useRouter();

const statusTranslations: { [key: string]: string } = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
    'REJECTED': 'DITOLAK'
};

const translateStatus = (status: string): string => {
    return statusTranslations[status] || status;
};

const createAppointment = () => {
    router.push({ name: 'appointmentCreate' })
}

const currentDeed = ref<any>(null) // Inisialisasi dengan null
const documentsPendingCount = computed(() => {
    if (!currentDeed.value || !currentDeed.value.deedType || !requiredDocumentsMap[currentDeed.value.deedType]) {
        return 0; // Jika data belum ada, atau jenis akta tidak ditemukan
    }

    const requiredDocs = requiredDocumentsMap[currentDeed.value.deedType];
    const uploadedDocs = currentDeed.value.deedDocs.map((doc: any) => doc.docType);

    let pendingCount = 0;
    for (const requiredDoc of requiredDocs) {
        if (!uploadedDocs.includes(requiredDoc)) {
            pendingCount++;
        }
    }
    return pendingCount;
});

const viewDeeds = () => {
    router.push({ name: 'akta' })
}

onMounted(async () => {
    try {
        const currentDeedRes = await api.get("/users/dashboard/deeds");
        currentDeed.value = currentDeedRes.data;
    } catch (error) {
        console.error("Error fetching current deed:", error);
        // Tangani error, misal tampilkan pesan ke user
    }
});
</script>