<template>
    <div>
        <div class="flex items-center gap-3 mb-4">
            <h2 class="w-10/12 text-2xl font-semibold">Detail Akta</h2>

            <div v-if="loading" class="py-4 text-center">
                <span
                    class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
                <p class="mt-2 text-sm text-gray-500">Memuat daftar janji...</p>
            </div>

            <router-link v-if="deed?.deedStatus === 'DRAFT' && authStore.isUser"
                :to="{ name: 'EditAktaForm', params: { id: route.params.id } }"
                class="px-4 py-2 text-sm text-white bg-blue-400 rounded-md">
                Edit
            </router-link>

            <router-link
                v-if="authStore.isAdmin && (deed?.deedStatus === statusSteps[0] || deed?.deedStatus === statusSteps[4]) && documents.length > 0"
                :to="`/operator/deeds/${route.params.id}/review-documents`"
                class="px-4 py-2 text-sm text-white bg-green-500 rounded-md">
                Verifikasi Dokumen
            </router-link>
        </div>

        <div class="flex gap-8 px-6 py-4 bg-white rounded-lg">
            <div class="w-2/3 border-gray-300 border-e-2 ">
                <div v-if="deed" class="mb-6">
                    <div class="grid grid-cols-[auto_auto_1fr] gap-y-3 gap-x-2">
                        <p class="font-semibold text-left">Nomor Akta</p>
                        <p>:</p>
                        <p>{{ deed.number || 'Belum ada nomor' }}</p>

                        <p class="font-semibold text-left">Judul</p>
                        <p>:</p>
                        <p>{{ deed.title }}</p>

                        <p class="font-semibold text-left">Jenis</p>
                        <p>:</p>
                        <p>{{ deed.deedType }}</p>

                        <p class="font-semibold text-left">Deskripsi</p>
                        <p>:</p>
                        <p>{{ deed.description }}</p>

                        <p class="font-semibold text-left">Tanggal</p>
                        <p>:</p>
                        <p>{{ formatDate(deed.deedDate) }}</p>

                        <p class="font-semibold text-left">Status Saat Ini</p>
                        <p>:</p>
                        <div class="flex justify-start">
                            <span class="px-2 py-1 font-bold text-white bg-green-300 rounded">
                                {{ translateStatus(deed.deedStatus) }}
                            </span>
                        </div>

                    </div>
                </div>

                <div class="px-4 pt-4 pb-2 mr-3 border border-gray-200 border-1">
                    <div v-if="authStore.isAdmin">
                        <div v-if="deed?.deedStatus === statusSteps[0] && documents.length < 1">
                            Menunggu klien mengupload dokumen
                        </div>

                        <div
                            v-else-if="(deed?.deedStatus === statusSteps[0] || deed?.deedStatus === statusSteps[4]) && documents.length > 0">
                            <div class="flex flex-wrap items-center gap-3 mb-4">
                                <button v-for="doc in documents" :key="doc.id"
                                    class="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded" disabled>
                                    {{ doc.docType }}
                                    <component :is="CheckCircle" v-if="doc.status === 'APPROVED'"
                                        class="text-green-900" />
                                    <component :is="XCircle" v-else-if="doc.status === 'REJECTED'"
                                        class="text-red-800" />
                                    <component :is="FileText" v-else />
                                </button>
                            </div>
                            <SetDeedOnProgress :deed="deed" @saved="onProgressSaved" />
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[1]">


                            <h4 class="mb-3 text-lg font-medium text-gray-900">
                                Siap untuk Proses Tanda Tangan
                            </h4>
                            <textarea v-model="note" placeholder="Catatan perubahan status (opsional)"
                                class="w-full p-2 mb-3 border rounded"></textarea>

                            <button @click="submitStatus('WAITING_SIGNATURE')"
                                class="px-4 py-2 text-white bg-green-600 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                                Proses Tanda Tangan
                            </button>
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[2]">
                            <h3 class="mb-3 text-lg font-medium text-gray-900">Selesaikan Proses Akta</h3>
                            <textarea v-model="note" placeholder="Catatan perubahan status (opsional)"
                                class="w-full p-2 mb-3 border rounded"></textarea>

                            <button @click="submitStatus('COMPLETED')"
                                class="px-4 py-2 text-white bg-green-600 rounded">
                                Selesaikan Akta
                            </button>
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[3]">
                            <DeedComplete :deed="deed" @open-invoice-form="openInvoiceForm" />
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[4]">
                            Akta ini DITOLAK.
                        </div>
                    </div>

                    <DeedUserDocument v-else :documents="deed?.deedDocs" />
                </div>
            </div>

            <div class="w-1/3 pl-3">
                <h3 class="mb-2 text-xl font-medium">Riwayat Status</h3>

                <ol class="relative border-gray-200 border-s dark:border-gray-700">
                    <li v-for="(status, index) in deed?.statusHistories" :key="index" class="pb-4 ms-6">
                        <span
                            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{
                            translateStatus(status.status) }}</h3>
                        <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">{{
                            new Date(status.updatedAt).toLocaleString() }}</time>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ status.note }}</p>
                    </li>
                </ol>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/libs/utils';
import { useAuthStore } from '@/stores/authStore';
import DeedUserDocument from '@/components/DeedUserDocument.vue';
import SetDeedOnProgress from '@/components/deeds/SetDeedOnProgress.vue';
import { formatDate } from '@/libs/dateUtils';
import DeedComplete from '@/components/deeds/DeedComplete.vue';


const authStore = useAuthStore();
const route = useRoute();
const deed = ref(null);

const note = ref('');

const loading = ref(true)

const statusSteps = ['DRAFT', 'IN_PROGRESS', 'WAITING_SIGNATURE', 'COMPLETED', 'REJECTED'];

const statusTranslations = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLET',
    'REJECTED': 'DITOLAK'
};

const translateStatus = (status) => {
    return statusTranslations[status] || status;
};

const documents = ref([]);

const onProgressSaved = async (newDeedData) => {
    deed.value = newDeedData;
    documents.value = newDeedData?.deedDocs || [];
};

const fetchDetail = async () => {

    loading.value = true

    try {
        const detailRes = await api.get(`/deeds/${route.params.id}/status-history`);
        deed.value = detailRes.data;
        documents.value = detailRes.data?.deedDocs || [];
    } catch (error) {
        console.error('Error fetching deed detail:', error);
        alert('Gagal mengambil detail akta.');
    }
    finally {
        loading.value = false
    }
};

const submitStatus = async (targetStatus) => {
    try {
        const payload = {
            status: targetStatus,
            note: note.value
        };


        const response = await api.put(`/deeds/${route.params.id}/status`, payload, { withCredentials: true });

        alert('Status berhasil diperbarui!');
        deed.value = response.data;
        note.value = '';
    } catch (error) {
        console.error('Error updating deed status:', error);
        alert('Gagal memperbarui status akta.');
    }
};

onMounted(fetchDetail);
</script>

<style scoped></style>