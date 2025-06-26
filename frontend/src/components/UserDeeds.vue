<template>
    <div>
        <div class="block md:flex">
            <h1 class="mb-4 text-2xl font-bold text-center md:text-left md:w-4/5">Daftar Akta Saya</h1>
            <div class="">
                <router-link to="/deeds/create"
                    class="block px-2 py-1 font-semibold text-white bg-blue-500 md:inline-block rounded-xl">
                    <span class="block text-center md:flex ">Buat Akta Baru</span>
                </router-link>
            </div>
        </div>


        <div v-if="loading" class="py-4 text-center">
            <span
                class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
            <p class="mt-2 text-sm text-gray-500">Memuat data ...</p>
        </div>
        <div v-else-if="data.empty" class="text-gray-500">Belum ada akta.</div>

        <div v-else class="mt-4 space-y-">
            <div v-for="deed in data.content" :key="deed.id"
                class="flex flex-col justify-between gap-2 p-4 mb-2 bg-white border border-gray-300 rounded shadow sm:flex-row sm:items-center">
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

            <div class="flex justify-between mt-6">
                <button :disabled="firstPage" @click="previousPage()"
                    class="text-blue-600 hover:underline disabled:text-gray-400">
                    ← Sebelumnya
                </button>
                <button :disabled="lastPage" @click="nextPage()"
                    class="text-blue-600 hover:underline disabled:text-gray-400">
                    Selanjutnya →
                </button>
            </div>

            <UploadDokumenModal v-if="selectedDeed !== null" :show="showUploadModal" :deed="selectedDeed"
                @close="() => { showUploadModal = false; selectedDeed = null }"
                @document-uploaded="handleDocumentUploaded" />
        </div>
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
const data = ref()
const page = ref(0)
const size = 4;
const lastPage = ref(false)
const firstPage = ref(false)
const deeds = ref([])
const loading = ref(true)

const statusTranslations = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
    'REJECTED': 'DITOLAK'
};

const fetchData = async () => {
    loading.value = true
    try {
        const res = await api.get(`/deeds/my-deed?page=${page.value}&size=${size}`)
        data.value = res.data
        deeds.value = res.data.content
        lastPage.value = res.data.last
        firstPage.value = res.data.first
        page.value = res.data.number
    } catch (error) {

        console.error('Gagal memuat akta', error)
    } finally {
        loading.value = false
    }
}

const nextPage = () => {
    page.value++
    fetchData()
}

const previousPage = () => {
    page.value--
    fetchData()
}

const translateStatus = (status) => {
    return statusTranslations[status] || status;
};

const isAllDocsUploadedAndApproved = (deed) => {

    if (!deed || !deed.deedType) {
        return false;
    }

    const allRequired = requiredDocumentsMap[deed.deedType] || [];
    const uploadedDeedDocs = deed.deedDocs || [];


    if (allRequired.length === 0) {
        return true;
    }


    const uploadedAndAcceptedDocTypes = new Set(
        uploadedDeedDocs
            .filter(doc => doc.status !== 'REJECTED')
            .map(doc => doc.docType)
    );


    return allRequired.every(requiredDoc => uploadedAndAcceptedDocTypes.has(requiredDoc));
};

const openUploadModal = (deed) => {
    selectedDeed.value = deed
    showUploadModal.value = true
}

const showDetail = async (deed) => {
    await router.push(`deeds/${deed.id}`)
}

onMounted(fetchData)

const handleDocumentUploaded = async (deedId) => {
    try {

        const res = await api.get(`/deeds/${deedId}/status-history`);
        const updatedDeed = res.data;


        const index = deeds.value.findIndex(d => d.id === deedId);

        if (index !== -1) {
            deeds.value[index] = updatedDeed;
        } else {

            console.warn(`Akta dengan ID ${deedId} tidak ditemukan di array. Memuat ulang semua akta.`);
            await fetchDeeds();
        }
    } catch (error) {
        console.error('Gagal memperbarui akta setelah unggah dokumen:', error);

        await fetchDeeds();
    }
};

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>
