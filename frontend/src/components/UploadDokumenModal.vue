<template>
    <div v-if="props.show && props.deed"
        class="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="bg-white rounded shadow-lg w-full max-w-lg p-6 relative">
            <h3 class="text-xl font-bold mb-4">Unggah Dokumen</h3>

            <div class="mb-4">
                <p class="font-medium text-gray-700 mb-1">Dokumen Wajib:</p>
                <ul class="list-disc pl-5 text-sm text-gray-600">
                    <li v-for="doc in requiredDocs" :key="doc">{{ doc }}</li>
                </ul>
            </div>

            <form @submit.prevent="handleSubmit" v-if="requiredDocs.length > 0">
                <div class="mb-4">
                    <label for="docTypeSelect" class="block text-sm font-medium text-gray-700">Jenis Dokumen</label>
                    <select id="docTypeSelect" v-model="selectedDocType" class="mt-1 block w-full border p-2 rounded">
                        <option disabled value="">-- Pilih Jenis Dokumen --</option>
                        <option v-for="doc in requiredDocs" :key="doc" :value="doc">{{ doc }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label for="fileInput" class="block text-sm font-medium text-gray-700">Pilih File</label>
                    <input type="file" id="fileInput" @change="handleFileChange"
                        class="mt-1 block w-full border p-2 rounded" />
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" @click="props.onClose"
                        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded">
                        Batal
                    </button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                        :disabled="!selectedFile || !selectedDocType || uploading">
                        <span v-if="uploading">Mengunggah...</span>
                        <span v-else>Unggah</span>
                    </button>
                </div>
            </form>

            <p v-else class="text-sm text-green-700 mt-4">
                Semua dokumen wajib telah diunggah.
            </p>

            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="props.onClose">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue';
import api from '@/libs/utils'; // Asumsi Anda punya file ini untuk Axios instance
import { requiredDocumentsMap } from '@/libs/requiredDocuments'; // Asumsi Anda punya file ini

// --- Definisi Props ---
// Menggunakan defineProps untuk mendeklarasikan props yang diterima komponen ini.
// Ini adalah cara yang benar di Vue 3 script setup.
const props = defineProps({
    show: {
        type: Boolean,
        default: false // Nilai default jika 'show' tidak diberikan
    },
    deed: {
        type: Object,
        required: true, // Properti 'deed' wajib ada
        // Fungsi default untuk objek, agar tidak berbagi referensi yang sama antar instance
        default: () => ({ id: null, deedType: '', deedDocs: [] })
    },
    onClose: {
        type: Function,
        required: true // Fungsi 'onClose' wajib ada
    }
});

// --- Definisi Emits ---
// Mendefinisikan event yang bisa dipancarkan oleh komponen ini ke parent.
const emit = defineEmits(['document-uploaded']);

// --- State Lokal ---
// `uploadedDocs` akan menyimpan daftar dokumen yang sudah terkait dengan akta.
// Ini diinisialisasi dengan data dari props.deed.deedDocs.
const uploadedDocs = ref([]);

// State untuk input form
const selectedFile = ref(null);
const selectedDocType = ref('');
const uploading = ref(false); // Status loading untuk tombol unggah

// --- Watcher ---
// Watcher ini penting untuk memastikan `uploadedDocs` selalu sinkron
// dengan `props.deed.deedDocs` setiap kali `props.deed` berubah.
// `immediate: true` akan menjalankan watcher saat komponen pertama kali di-mount.
watch(() => props.deed, (newDeed) => {
    if (newDeed && newDeed.deedDocs) {
        uploadedDocs.value = [...newDeed.deedDocs];
    } else {
        uploadedDocs.value = [];
    }
}, { immediate: true });

// --- Computed Property ---
// Menghitung daftar dokumen yang masih "dibutuhkan" untuk diunggah.
// Dokumen dibutuhkan jika:
// 1. Termasuk dalam `requiredDocumentsMap` untuk `deedType` ini.
// 2. BELUM ada di `uploadedDocs` ATAU statusnya 'REJECTED' (artinya perlu diunggah ulang).
const requiredDocs = computed(() => {
    if (!props.deed || !props.deed.deedType) {
        return [];
    }

    // Ambil semua dokumen wajib untuk jenis akta ini
    const allRequired = requiredDocumentsMap[props.deed.deedType] || [];

    // Buat set dari jenis dokumen yang sudah diunggah dan statusnya BUKAN 'REJECTED'
    const uploadedTypes = new Set(
        uploadedDocs.value
            .filter(doc => doc.status !== 'REJECTED') // Abaikan yang REJECTED
            .map(doc => doc.docType)
    );

    // Filter `allRequired` untuk hanya menyertakan yang belum diunggah
    // atau yang statusnya 'REJECTED' (karena mereka tidak ada di `uploadedTypes`)
    return allRequired.filter(docType => !uploadedTypes.has(docType));
});

// --- Metode ---
// Menangani perubahan pada input file
const handleFileChange = (e) => {
    selectedFile.value = e.target.files ? e.target.files[0] : null;
};

// Menangani submit form unggah dokumen
const handleSubmit = async () => {
    if (!selectedFile.value || !selectedDocType.value) {
        alert('Harap pilih jenis dokumen dan file.');
        return;
    }

    uploading.value = true;

    const formData = new FormData();
    formData.append('file', selectedFile.value);
    formData.append('docType', selectedDocType.value); // Jenis dokumen yang dipilih
    formData.append('deedId', props.deed.id); // Kirim ID akta juga

    try {
        // Cek apakah ada dokumen dengan `docType` yang sama dan status 'REJECTED'
        const existingRejectedDoc = uploadedDocs.value.find(doc =>
            doc.docType === selectedDocType.value && doc.status === 'REJECTED'
        );

        let response;
        if (existingRejectedDoc) {
            // Jika ditemukan dokumen REJECTED, lakukan PUT (update)
            console.log(`Mengunggah ulang dokumen ID: ${existingRejectedDoc.id}`);
            response = await api.put(`/deed-documents/${existingRejectedDoc.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            // Perbarui status di state lokal setelah update
            existingRejectedDoc.status = 'UPLOADED';
            existingRejectedDoc.name = selectedFile.value.name;
        } else {
            // Jika tidak ada atau dokumen baru, lakukan POST (buat baru)
            console.log(`Mengunggah dokumen baru untuk akta ID: ${props.deed.id}`);
            response = await api.post(`/deeds/${props.deed.id}/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            // Tambahkan dokumen baru ke state lokal `uploadedDocs`
            uploadedDocs.value.push({
                id: response.data.id, // Ambil ID dari respons API
                docType: selectedDocType.value,
                status: response.data.status || 'UPLOADED', // Ambil status dari respons atau default
                name: selectedFile.value.name,
            });
        }

        alert('Dokumen berhasil diunggah.');
        // Pancarkan event ke parent untuk memberitahu bahwa dokumen telah diunggah.
        // Parent bisa menggunakan ini untuk me-refresh data akta utama.
        emit('document-uploaded', props.deed.id);

        // Reset form
        selectedFile.value = null;
        selectedDocType.value = '';
        const fileInput = document.getElementById('fileInput');
        if (fileInput) fileInput.value = '';

        props.onClose();
    } catch (error) {
        console.error('Gagal unggah dokumen:', error);
        alert('Gagal mengunggah dokumen. Silakan coba lagi.');
    } finally {
        uploading.value = false;
    }
};
</script>

<style scoped></style>