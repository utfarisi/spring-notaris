<template>
    <div>
        <div class="flex gap-3 items-center mb-4">
            <h2 class="text-2xl font-semibold w-10/12">Detail Akta</h2>

            <router-link v-if="deed?.deedStatus === 'DRAFT' && authStore.isUser"
                :to="{ name: 'EditAktaForm', params: { id: route.params.id } }"
                class="bg-blue-400 px-4 py-2 rounded-md text-white text-sm">
                Edit
            </router-link>

            <router-link
                v-if="authStore.isAdmin && (deed?.deedStatus === statusSteps[0] || deed?.deedStatus === statusSteps[4]) && documents.length > 0"
                :to="`/operator/deeds/${route.params.id}/review-documents`"
                class="bg-green-500 px-4 py-2 rounded-md text-white text-sm">
                Verifikasi Dokumen
            </router-link>
        </div>

        <div class="gap-8 flex bg-white px-6 py-4 rounded-lg">
            <div class="w-2/3 border-e-2 border-gray-300 ">
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
                        <p>{{ deed.deedDate }}</p>

                        <p class="font-semibold text-left">Status Saat Ini</p>
                        <p>:</p>
                        <p class="px-2 py-1 bg-green-800 rounded-md max-w-sm text-white font-bold text-xs">
                            {{ translateStatus(deed.deedStatus) }}
                        </p>
                    </div>
                </div>

                <div class="px-4 pt-4 pb-2 border border-1 border-gray-200 mr-3">
                    <div v-if="authStore.isAdmin">
                        <div v-if="deed?.deedStatus === statusSteps[0] && documents.length < 1">
                            Menunggu klien mengupload dokumen
                        </div>

                        <div
                            v-else-if="(deed?.deedStatus === statusSteps[0] || deed?.deedStatus === statusSteps[4]) && documents.length > 0">
                            <div class="flex flex-wrap items-center gap-3 mb-4">
                                <button v-for="doc in documents" :key="doc.id"
                                    class="flex items-center gap-2 px-4 py-2 rounded border border-gray-400" disabled>
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
                                class="w-full border p-2 mb-3 rounded"></textarea>

                            <button @click="submitStatus('WAITING_SIGNATURE')"
                                class="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                                Proses Tanda Tangan
                            </button>
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[2]">
                            <h3 class="mb-3 text-lg font-medium text-gray-900">Selesaikan Proses Akta</h3>
                            <textarea v-model="note" placeholder="Catatan perubahan status (opsional)"
                                class="w-full border p-2 mb-3 rounded"></textarea>

                            <button @click="submitStatus('COMPLETED')"
                                class="bg-green-600 text-white px-4 py-2 rounded">
                                Selesaikan Akta
                            </button>
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[3]">
                            Akta sudah selesai
                        </div>

                        <div v-else-if="deed?.deedStatus === statusSteps[4]">
                            Akta ini DITOLAK.
                        </div>
                    </div>

                    <DeedUserDocument v-else :documents="deed?.deedDocs" />
                </div>
            </div>

            <div class="pl-3 w-1/3">
                <h3 class="text-xl font-medium mb-2">Riwayat Status</h3>

                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li v-for="(status, index) in deed?.statusHistories" :key="index" class="ms-6 pb-4">
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


const authStore = useAuthStore();
const route = useRoute();
const deed = ref(null);

const note = ref('');
const statusSteps = ['DRAFT', 'IN_PROGRESS', 'WAITING_SIGNATURE', 'COMPLETED', 'REJECTED'];

const statusTranslations = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
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
    try {
        const detailRes = await api.get(`/deeds/${route.params.id}/status-history`);
        deed.value = detailRes.data;
        documents.value = detailRes.data?.deedDocs || [];
    } catch (error) {
        console.error('Error fetching deed detail:', error);
        alert('Gagal mengambil detail akta.');
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