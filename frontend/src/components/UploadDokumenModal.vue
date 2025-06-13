<template>
    <div v-if="props.show && props.deed"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div class="relative w-full max-w-lg p-6 bg-white rounded shadow-lg">
            <h3 class="mb-4 text-xl font-bold">Unggah Dokumen</h3>

            <div class="mb-4">
                <p class="mb-1 font-medium text-gray-700">Dokumen Wajib:</p>
                <ul class="pl-5 text-sm text-gray-600 list-disc">
                    <li v-for="doc in requiredDocs" :key="doc">{{ doc }}</li>
                </ul>
            </div>

            <form @submit.prevent="handleSubmit" v-if="requiredDocs.length > 0">
                <div class="mb-4">
                    <label for="docTypeSelect" class="block text-sm font-medium text-gray-700">Jenis Dokumen</label>
                    <select id="docTypeSelect" v-model="selectedDocType" class="block w-full p-2 mt-1 border rounded">
                        <option disabled value="">-- Pilih Jenis Dokumen --</option>
                        <option v-for="doc in requiredDocs" :key="doc" :value="doc">{{ doc }}</option>
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
import { requiredDocumentsMap } from '@/libs/requiredDocuments';

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

const emit = defineEmits(['document-uploaded']);

const uploadedDocs = ref([]);

const selectedFile = ref(null);
const selectedDocType = ref('');
const uploading = ref(false);

watch(() => props.deed, (newDeed) => {
    if (newDeed && newDeed.deedDocs) {
        uploadedDocs.value = [...newDeed.deedDocs];
    } else {
        uploadedDocs.value = [];
    }
}, { immediate: true });

const requiredDocs = computed(() => {
    if (!props.deed || !props.deed.deedType) {
        return [];
    }


    const allRequired = requiredDocumentsMap[props.deed.deedType] || [];

    const uploadedTypes = new Set(
        uploadedDocs.value
            .filter(doc => doc.status !== 'REJECTED')
            .map(doc => doc.docType)
    );

    return allRequired.filter(docType => !uploadedTypes.has(docType));
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

        const existingRejectedDoc = uploadedDocs.value.find(doc =>
            doc.docType === selectedDocType.value && doc.status === 'REJECTED'
        );

        let response;
        if (existingRejectedDoc) {

            console.log(`Mengunggah ulang dokumen ID: ${existingRejectedDoc.id}`);
            response = await api.put(`/deed-documents/${existingRejectedDoc.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });

            existingRejectedDoc.status = 'UPLOADED';
            existingRejectedDoc.name = selectedFile.value.name;
        } else {

            console.log(`Mengunggah dokumen baru untuk akta ID: ${props.deed.id}`);
            response = await api.post(`/deeds/${props.deed.id}/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });

            uploadedDocs.value.push({
                id: response.data.id,
                docType: selectedDocType.value,
                status: response.data.status || 'UPLOADED',
                name: selectedFile.value.name,
            });
        }

        alert('Dokumen berhasil diunggah.');
        emit('document-uploaded', props.deed.id);


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