<template>
    <div>
        <div class="flex">
            <h1 class="w-4/5 mb-4 text-2xl font-bold">Daftar Akta Saya</h1>
            <div class="text-center">
                <router-link to="/deeds/create"
                    class="inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-xl">
                    <span>Buat Akta Baru</span>
                </router-link>
            </div>
        </div>

        <div v-if="loading" class="text-center text-gray-500">Memuat data akta...</div>
        <div v-else-if="deeds.length === 0" class="text-gray-500">Belum ada akta.</div>

        <div v-else class="mt-4 space-y-4 bg-white">
            <div v-for="deed in deeds" :key="deed.id"
                class="flex flex-col justify-between gap-2 p-4 border rounded shadow sm:flex-row sm:items-center">
                <div>
                    <p class="mb-2 text-lg font-semibold">{{ deed.title }}</p>
                    <p class="mb-2 text-sm text-gray-500">
                        Jenis: {{ deed.deedType }} · Nomor: {{ deed.number }} ·
                        Tanggal: {{ formatDate(deed.deedDate) }}
                    </p>

                    <p class="mt-1 mb-2 text-sm text-gray-600" v-if="deed.description">{{ deed.description }}</p>
                    <p class="mb-2 text-sm font-bold text-gray font-xl">
                        Status: <span class="px-2 py-1 text-white bg-green-700 rounded-sm">{{
                            translateStatus(deed.deedStatus)
                            }}</span>
                    </p>
                </div>

                <div class="flex flex-wrap gap-2">
                    <button class="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                        @click="showDetail(deed)">
                        Lihat Detail
                    </button>
                    <button class="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                        v-if="!isAllDocsUploadedAndApproved(deed)" @click="openUploadModal(deed)">
                        Unggah Dokumen
                    </button>
                    <router-link :to="`/invoices/${deed?.id}`" v-if="deed?.invoice">Lihat Invoice</router-link>
                </div>
            </div>
            <UploadDokumenModal v-if="selectedDeed !== null" :show="showUploadModal" :deed="selectedDeed"
                :onClose="() => { showUploadModal = false; selectedDeed = null }" />
        </div>
        <InvoicePreview />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'
import UploadDokumenModal from '@/components/UploadDokumenModal.vue'
import { useRouter } from 'vue-router'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'


const showUploadModal = ref(false)
const selectedDeed = ref(null)
const router = useRouter();

const statusTranslations = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
    'REJECTED': 'DITOLAK'
};

const translateStatus = (status) => {
    return statusTranslations[status] || status; // Mengembalikan status asli jika tidak ditemukan
};

const isAllDocsUploadedAndApproved = (deed) => {
    const requiredDocs = requiredDocumentsMap[deed.deedType] || []
    const uploadedDocs = deed.deedDocs || []

    // Buat map dari dokumen yang sudah di-upload (dengan status APPROVED)
    const approvedDocTypes = uploadedDocs
        .filter(doc => doc.status !== 'REJECTED')
        .map(doc => doc.docType)

    // Cek apakah semua required docs ada di approvedDocTypes
    return requiredDocs.every(requiredDoc => approvedDocTypes.includes(requiredDoc))
}

const openUploadModal = (deed) => {
    console.log(" deed type ", deed.deedType)
    selectedDeed.value = deed
    showUploadModal.value = true
}

const showDetail = async (deed) => {
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

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
