<template>
    <div v-if="props.show && props.deed"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div class="relative w-full max-w-lg p-6 bg-white rounded shadow-lg">
            <h3 class="mb-4 text-xl font-bold">Unggah Dokumen</h3>

            <div class="mb-4">
                <p class="mb-1 font-medium text-gray-700">Dokumen Wajib:</p>
                <ul class="pl-5 text-sm text-gray-600 list-disc">
                    <li v-for="docType in allPossibleRequiredDocs" :key="docType"
                        :class="{ 'text-green-600 line-through': isDocUploadedAndAccepted(docType) }">
                        {{ docType }}
                    </li>
                </ul>
            </div>

            <form @submit.prevent="handleSubmit" v-if="remainingRequiredDocs.length > 0">
                <div class="mb-4">
                    <label for="docTypeSelect" class="block text-sm font-medium text-gray-700">Jenis Dokumen</label>
                    <select id="docTypeSelect" v-model="selectedDocType" class="block w-full p-2 mt-1 border rounded">
                        <option disabled value="">-- Pilih Jenis Dokumen --</option>
                        <option v-for="doc in remainingRequiredDocs" :key="doc" :value="doc">{{ doc }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="fileInput" class="block text-sm font-medium text-gray-700">Pilih File</label>
                    <input type="file" id="fileInput" @change="handleFileChange"
                        class="block w-full p-2 mt-1 border rounded" />
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" @click="props.onClose"
                        class="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                        Batal
                    </button>
                    <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                        :disabled="!selectedFile || !selectedDocType || uploading">
                        <span v-if="uploading">Mengunggah...</span>
                        <span v-else>Unggah</span>
                    </button>
                </div>
            </form>

            <p v-else class="mt-4 text-sm text-green-700">
                Semua dokumen wajib telah diunggah.
            </p>

            <button class="absolute text-gray-500 top-2 right-2 hover:text-gray-700" @click="props.onClose">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import api from '@/libs/utils';
import { requiredDocumentsMap } from '@/libs/requiredDocuments'; // Pastikan path ini benar

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    deed: {
        type: Object,
        required: true,
        default: () => ({ id: null, deedType: '', deedDocs: [] })
    },
    onClose: {
        type: Function,
        required: true
    }
});

const emit = defineEmits(['document-uploaded', 'close']);

// uploadedDocs akan berisi daftar lengkap dokumen yang terkait dengan akta
const uploadedDocs = ref([]);

const selectedFile = ref(null);
const selectedDocType = ref('');
const uploading = ref(false);

// Watcher untuk menginisialisasi uploadedDocs ketika prop.deed berubah
watch(() => props.deed, (newDeed) => {
    if (newDeed && newDeed.deedDocs) {
        uploadedDocs.value = [...newDeed.deedDocs];
    } else {
        uploadedDocs.value = [];
    }
}, { immediate: true });

// Computed property untuk mendapatkan semua jenis dokumen yang mungkin wajib untuk akta ini
const allPossibleRequiredDocs = computed(() => {
    return requiredDocumentsMap[props.deed.deedType] || [];
});

// Fungsi pembantu untuk mengecek apakah dokumen sudah diunggah dan tidak REJECTED
const isDocUploadedAndAccepted = (docType) => {
    return uploadedDocs.value.some(doc =>
        doc.docType === docType && doc.status !== 'REJECTED'
    );
};

// Computed property untuk dokumen yang MASIH WAJIB diunggah (belum ada atau REJECTED)
const remainingRequiredDocs = computed(() => {
    return allPossibleRequiredDocs.value.filter(docType => {
        // Cek apakah ada dokumen dengan docType ini yang statusnya bukan REJECTED
        const isUploaded = uploadedDocs.value.some(doc =>
            doc.docType === docType && doc.status !== 'REJECTED'
        );
        return !isUploaded;
    });
});


const handleFileChange = (e) => {
    selectedFile.value = e.target.files ? e.target.files[0] : null;
};

const handleSubmit = async () => {
    if (!selectedFile.value || !selectedDocType.value) {
        alert('Harap pilih jenis dokumen dan file.');
        return;
    }

    uploading.value = true;

    const formData = new FormData();
    formData.append('file', selectedFile.value);
    formData.append('docType', selectedDocType.value);
    formData.append('deedId', props.deed.id);

    try {
        const existingDoc = uploadedDocs.value.find(doc =>
            doc.docType === selectedDocType.value
        );

        let response;
        if (existingDoc && existingDoc.status === 'REJECTED') {
            // Jika ada dokumen yang DITOLAK dengan jenis yang sama, unggah ulang
            console.log(`Mengunggah ulang dokumen ID: ${existingDoc.id} dengan jenis ${selectedDocType.value}`);
            response = await api.put(`/deed-documents/${existingDoc.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            // Update status dan nama file di uploadedDocs
            const index = uploadedDocs.value.findIndex(doc => doc.id === existingDoc.id);
            if (index !== -1) {
                uploadedDocs.value[index] = {
                    ...uploadedDocs.value[index],
                    status: response.data.status || 'UPLOADED', // Ambil status dari respons atau default 'UPLOADED'
                    name: selectedFile.value.name,
                    // Perbarui juga filePath jika endpoint mengembalikannya
                    filePath: response.data.filePath || uploadedDocs.value[index].filePath
                };
            }
        } else if (existingDoc && existingDoc.status !== 'REJECTED') {
            // Jika dokumen sudah ada dan bukan REJECTED (misal: UPLOADED, APPROVED), berikan peringatan
            alert(`Dokumen "${selectedDocType.value}" sudah diunggah dan statusnya: ${existingDoc.status}.`);
            // Reset form dan keluar, jangan lakukan upload
            selectedFile.value = null;
            selectedDocType.value = '';
            const fileInput = document.getElementById('fileInput');
            if (fileInput) fileInput.value = '';
            uploading.value = false;
            return;
        } else {
            // Unggah dokumen baru
            console.log(`Mengunggah dokumen baru untuk akta ID: ${props.deed.id}`);
            response = await api.post(`/deeds/${props.deed.id}/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            // Tambahkan dokumen baru ke uploadedDocs
            uploadedDocs.value.push({
                id: response.data.id,
                docType: selectedDocType.value,
                status: response.data.status || 'UPLOADED',
                name: selectedFile.value.name,
                filePath: response.data.filePath // Penting: pastikan backend mengembalikan filePath
            });
        }

        alert('Dokumen berhasil diunggah.');
        emit('document-uploaded', props.deed.id); // Emit event untuk refresh data di parent jika diperlukan

        // Reset form
        selectedFile.value = null;
        selectedDocType.value = '';
        const fileInput = document.getElementById('fileInput');
        if (fileInput) fileInput.value = '';

        // Tutup modal HANYA jika semua dokumen wajib sudah terunggah
        if (remainingRequiredDocs.value.length === 0) {
            emit('close')
        } else {
            // Jika masih ada dokumen wajib, reset pilihan selectbox agar pengguna bisa pilih lagi
            selectedDocType.value = '';
        }

    } catch (error) {
        console.error('Gagal unggah dokumen:', error);
        alert('Gagal mengunggah dokumen. Silakan coba lagi.');
    } finally {
        uploading.value = false;
    }
};
</script>

<style scoped></style>