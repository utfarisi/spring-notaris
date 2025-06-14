<template>
    <div class="w-full">
        <template v-if="allDocumentsApproved(deed)">
            <div class="flex flex-col gap-3 mb-4">
                <div class="flex flex-col">
                    <label for="deedNumber" class="mb-1 text-sm text-gray-600">Nomor Akta:</label>
                    <input type="number" id="deedNumber" v-model="deedNumberInput" placeholder="Masukkan Nomor Akta"
                        class="w-full p-2 border rounded" :disabled="isProcessing" />
                </div>
                <div class="flex flex-col">
                    <label for="processNote" class="mb-1 text-sm text-gray-600">Catatan Proses (opsional):</label>
                    <textarea id="processNote" v-model="processNoteInput" placeholder="Catatan untuk proses (opsional)"
                        class="w-full p-2 border rounded" rows="2" :disabled="isProcessing"></textarea>
                </div>
            </div>
        </template>

        <div class="flex items-center gap-2 mb-3">
            <button @click="openRejectModal" class="px-4 py-2 text-white bg-red-600 rounded shrink-0">
                Reject Akta
            </button>

            <template v-if="allDocumentsApproved(deed)">
                <button @click="submitProcessStatus" class="px-4 py-2 text-white bg-green-600 rounded shrink-0"
                    :disabled="!deedNumberInput || isProcessing">
                    <span v-if="!isProcessing">Proses Akta</span>
                    <span v-else>Memproses...</span>
                </button>
            </template>
            <p v-else class="ml-2 text-sm text-yellow-700">
                Verifikasi semua dokumen untuk memproses akta.
            </p>
        </div>

        <p v-if="processError" class="mt-1 text-sm text-red-500">{{ processError }}</p>
        <p v-if="processSuccess" class="mt-1 text-sm text-green-500">{{ processSuccess }}</p>

        <div v-if="showRejectModal"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600 bg-opacity-50">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
                <h3 class="mb-4 text-xl font-bold text-gray-800">Tolak Akta</h3>
                <div class="mb-4">
                    <label for="rejectNote" class="block mb-2 text-sm font-bold text-gray-700">Catatan Penolakan
                        (opsional):</label>
                    <textarea id="rejectNote" v-model="rejectNoteInput"
                        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        rows="3" placeholder="Cth: Dokumen KTP tidak jelas, mohon diunggah ulang."
                        :disabled="isProcessingReject"></textarea>
                </div>
                <div class="flex justify-end space-x-3">
                    <button @click="cancelReject"
                        class="px-4 py-2 font-semibold text-gray-800 bg-gray-300 rounded-lg hover:bg-gray-400"
                        :disabled="isProcessingReject">
                        Batal
                    </button>
                    <button @click="confirmReject" :disabled="isProcessingReject"
                        class="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50">
                        <span v-if="!isProcessingReject">Tolak</span>
                        <span v-else>Menolak...</span>
                    </button>
                </div>
                <p v-if="rejectError" class="mt-3 text-sm text-red-500">{{ rejectError }}</p>
                <p v-if="rejectSuccess" class="mt-3 text-sm text-green-500">{{ rejectSuccess }}</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import api from '@/libs/utils';
import { requiredDocumentsMap } from '@/libs/requiredDocuments';
import { ref } from 'vue';

const props = defineProps({
    deed: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['saved']);

// State untuk proses akta
const deedNumberInput = ref(null);
const processNoteInput = ref(''); // Catatan khusus untuk proses akta
const isProcessing = ref(false); // Untuk status loading proses akta
const processError = ref(null);
const processSuccess = ref(null);

// State untuk reject akta
const showRejectModal = ref(false);
const rejectNoteInput = ref(''); // Catatan khusus untuk reject akta
const isProcessingReject = ref(false); // Untuk status loading reject akta
const rejectError = ref(null);
const rejectSuccess = ref(null);

const allDocumentsApproved = (deed) => {
    if (!deed || !deed.deedType || !requiredDocumentsMap[deed.deedType]) {
        return false;
    }

    const requiredDocs = requiredDocumentsMap[deed.deedType] || [];
    const uploadedDocs = props.deed?.deedDocs || [];

    if (requiredDocs.length === 0) {
        return true;
    }

    const approvedDocTypes = uploadedDocs
        .filter(doc => doc.status === 'APPROVED')
        .map(doc => doc.docType);

    return requiredDocs.every(requiredDoc => approvedDocTypes.includes(requiredDoc));
};

// --- Fungsi untuk Reject Akta ---
const openRejectModal = () => {
    rejectNoteInput.value = '';
    rejectError.value = null;
    rejectSuccess.value = null;
    showRejectModal.value = true;
};

const cancelReject = () => {
    showRejectModal.value = false;
};

const confirmReject = async () => {
    rejectError.value = null;
    rejectSuccess.value = null;
    isProcessingReject.value = true;

    try {
        const payload = {
            status: 'REJECTED',
            note: rejectNoteInput.value || 'Akta ditolak tanpa catatan spesifik.'
        };
        const deedRest = await api.put(`/deeds/${props.deed.id}/status`, payload, { withCredentials: true });
        emit('saved', deedRest.data);
        rejectSuccess.value = "Akta berhasil ditolak.";
        showRejectModal.value = false;
    } catch (e) {
        console.error("Error rejecting deed:", e);
        rejectError.value = "Terjadi error saat menolak akta: " + (e.response?.data?.message || e.message || 'Unknown error');
    } finally {
        isProcessingReject.value = false;
    }
};

// --- Fungsi untuk Proses Akta ---
const submitProcessStatus = async () => {
    processError.value = null;
    processSuccess.value = null;
    isProcessing.value = true;

    if (!deedNumberInput.value) {
        processError.value = "Nomor akta tidak boleh kosong.";
        isProcessing.value = false;
        return;
    }

    try {
        const payload = {
            status: 'IN_PROGRESS',
            note: processNoteInput.value || 'Dokumen telah diverifikasi dan akta sedang diproses.',
            number: deedNumberInput.value
        };

        const deedRest = await api.put(`/deeds/${props.deed.id}/set-on-progress`, payload);

        emit('saved', deedRest.data);
        processSuccess.value = "Akta berhasil diproses dan status diatur IN_PROGRESS.";
        deedNumberInput.value = null;
        processNoteInput.value = '';
    } catch (e) {
        console.error("Error processing deed:", e);
        processError.value = "Terjadi error saat memproses akta: " + (e.response?.data?.message || e.message || 'Unknown error');
    } finally {
        isProcessing.value = false;
    }
};
</script>

<style scoped>
@import url('@/style.css');

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>