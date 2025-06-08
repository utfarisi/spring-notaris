<template>
    <div class="w-full">
        <template v-if="allDocumentsApproved(deed)">
            <div class="flex flex-col gap-3 mb-4">
                <div class="flex flex-col">
                    <label for="deedNumber" class="text-sm text-gray-600 mb-1">Nomor Akta:</label>
                    <input type="text" id="deedNumber" v-model="deedNumberInput" placeholder="Masukkan Nomor Akta"
                        class="border p-2 rounded w-full" :disabled="isProcessing" />
                </div>
                <div class="flex flex-col">
                    <label for="processNote" class="text-sm text-gray-600 mb-1">Catatan Proses (opsional):</label>
                    <textarea id="processNote" v-model="processNoteInput" placeholder="Catatan untuk proses (opsional)"
                        class="border p-2 rounded w-full" rows="2" :disabled="isProcessing"></textarea>
                </div>
            </div>
        </template>

        <div class="flex items-center gap-2 mb-3">
            <button @click="openRejectModal" class="bg-red-600 text-white px-4 py-2 rounded shrink-0">
                Reject Akta
            </button>

            <template v-if="allDocumentsApproved(deed)">
                <button @click="submitProcessStatus" class="bg-green-600 text-white px-4 py-2 rounded shrink-0"
                    :disabled="!deedNumberInput || isProcessing">
                    <span v-if="!isProcessing">Proses Akta</span>
                    <span v-else>Memproses...</span>
                </button>
            </template>
            <p v-else class="text-sm text-yellow-700 ml-2">
                Verifikasi semua dokumen untuk memproses akta.
            </p>
        </div>

        <p v-if="processError" class="text-red-500 text-sm mt-1">{{ processError }}</p>
        <p v-if="processSuccess" class="text-green-500 text-sm mt-1">{{ processSuccess }}</p>

        <div v-if="showRejectModal"
            class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h3 class="text-xl font-bold mb-4 text-gray-800">Tolak Akta</h3>
                <div class="mb-4">
                    <label for="rejectNote" class="block text-gray-700 text-sm font-bold mb-2">Catatan Penolakan
                        (opsional):</label>
                    <textarea id="rejectNote" v-model="rejectNoteInput"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="3" placeholder="Cth: Dokumen KTP tidak jelas, mohon diunggah ulang."
                        :disabled="isProcessingReject"></textarea>
                </div>
                <div class="flex justify-end space-x-3">
                    <button @click="cancelReject"
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                        :disabled="isProcessingReject">
                        Batal
                    </button>
                    <button @click="confirmReject" :disabled="isProcessingReject"
                        class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50">
                        <span v-if="!isProcessingReject">Tolak</span>
                        <span v-else>Menolak...</span>
                    </button>
                </div>
                <p v-if="rejectError" class="text-red-500 text-sm mt-3">{{ rejectError }}</p>
                <p v-if="rejectSuccess" class="text-green-500 text-sm mt-3">{{ rejectSuccess }}</p>
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
            note: processNoteInput.value || 'Dokumen telah diverifikasi dan akta sedang diproses.',
            number: deedNumberInput.value
        };

        const deedRest = await api.put(`/deeds/${props.deed.id}/set-on-progress`, payload, { withCredentials: true });

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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>