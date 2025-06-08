<template>
    <div>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4 w-4/5">Daftar Akta Saya</h1>
            <div class="text-center">
                <router-link to="/deeds/create"
                    class="bg-blue-500 px-2 py-1 rounded-xl text-white font-semibold inline-block">
                    <span>Buat Akta Baru</span>
                </router-link>
            </div>
        </div>

        <div v-if="loading" class="text-center text-gray-500">Memuat data akta...</div>
        <div v-else-if="deeds.length === 0" class="text-gray-500">Belum ada akta.</div>

        <div v-else class="space-y-4 bg-white mt-4">
            <div v-for="deed in deeds" :key="deed.id"
                class="border p-4 rounded shadow flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
                <div>
                    <p class="text-lg font-semibold mb-2">{{ deed.title }}</p>
                    <p class="text-sm text-gray-500 mb-2">
                        Jenis: {{ deed.deedType }} · Nomor: {{ deed.number }} ·
                        Tanggal: {{ formatDate(deed.deedDate) }}
                    </p>

                    <p class="text-sm mt-1 text-gray-600 mb-2" v-if="deed.description">{{ deed.description }}</p>
                    <p class="text-sm text-gray mb-2 font-xl font-bold">
                        Status: <span class="px-2 py-1 rounded-sm bg-green-700 text-white">{{
                            translateStatus(deed.deedStatus)
                            }}</span>
                    </p>
                </div>

                <div class="flex gap-2 flex-wrap">
                    <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                        @click="showDetail(deed)">
                        Lihat Detail
                    </button>
                    <button class="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                        v-if="!isAllDocsUploadedAndApproved(deed)" @click="openUploadModal(deed)">
                        Unggah Dokumen
                    </button>
                </div>
            </div>
            <UploadDokumenModal v-if="selectedDeed !== null" :show="showUploadModal" :deed="selectedDeed"
                :onClose="() => { showUploadModal = false; selectedDeed = null }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'
import UploadDokumenModal from '@/components/UploadDokumenModal.vue'
import { useRouter } from 'vue-router'
import { requiredDocumentsMap } from '../libs/requiredDocuments'


const showUploadModal = ref(false)
const selectedDeed = ref(null)
const router = useRouter();

const statusTranslations: { [key: string]: string } = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
    'REJECTED': 'DITOLAK'
};

const translateStatus = (status: string): string => {
    return statusTranslations[status] || status; // Mengembalikan status asli jika tidak ditemukan
};

const isAllDocsUploadedAndApproved = (deed: any): boolean => {
    const requiredDocs = requiredDocumentsMap[deed.deedType] || []
    const uploadedDocs = deed.deedDocs || []

    // Buat map dari dokumen yang sudah di-upload (dengan status APPROVED)
    const approvedDocTypes = uploadedDocs
        .filter(doc => doc.status !== 'REJECTED')
        .map(doc => doc.docType)

    // Cek apakah semua required docs ada di approvedDocTypes
    return requiredDocs.every(requiredDoc => approvedDocTypes.includes(requiredDoc))
}

const openUploadModal = (deed: any) => {
    console.log(" deed type ", deed.deedType)
    selectedDeed.value = deed
    showUploadModal.value = true
}

const showDetail = async (deed: any) => {
    await router.push(`deeds/${deed.id}`)
}

const deeds = ref([])
const loading = ref(true)

onMounted(async () => {
    try {
        const res = await api.get('/deeds/my-deed')
        deeds.value = res.data.content
    } catch (error) {
        console.error('Gagal memuat akta', error)
    } finally {
        loading.value = false
    }
})

const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
