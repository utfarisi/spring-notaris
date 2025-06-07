<template>
    <div v-if="show && deed" class="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
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
                    <label class="block text-sm font-medium text-gray-700">Jenis Dokumen</label>
                    <select v-model="selectedDocType" class="mt-1 block w-full border p-2 rounded">
                        <option disabled value="">-- Pilih Jenis Dokumen --</option>
                        <option v-for="doc in requiredDocs" :key="doc" :value="doc">{{ doc }}</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Pilih File</label>
                    <input type="file" @change="handleFileChange" class="mt-1 block w-full border p-2 rounded" />
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button type="button" @click="onClose"
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


            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="onClose">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import api from '@/libs/utils'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'

const props = defineProps<{
    show: boolean
    deed: {
        id: number,
        deedType: string,
        deedDocs: Array<{
            docType: string,
            status: string,
            name: string,
        }>
    },
    onClose: () => void
}>()

const uploadedDocs = ref([...props.deed.deedDocs || []])

watch(() => props.deed, (newDeed) => {
    uploadedDocs.value = [...newDeed.deedDocs || []]
}, { immediate: true })

const requiredDocs = computed(() => {
    if (!props.deed || !props.deed.deedType) return []

    const allRequired = requiredDocumentsMap[props.deed.deedType] || []
    //const uploadedTypes = (props.deed as any).deedDocs?.map((doc: any) => doc.docType) || []
    const uploadedTypes = uploadedDocs.value
        .filter(doc => doc.status !== 'REJECTED')
        .map(doc => doc.docType)
    // Kembalikan dokumen yang belum diunggah
    return allRequired.filter(doc => !uploadedTypes.includes(doc))
})

const selectedFile = ref<File | null>(null)
const selectedDocType = ref<string>('')
const uploading = ref(false)

const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    selectedFile.value = target.files?.[0] || null
}

const handleSubmit = async () => {
    if (!selectedFile.value || !selectedDocType.value) return

    uploading.value = true

    const formData = new FormData()
    formData.append('file', selectedFile.value)
    formData.append('docType', selectedDocType.value)

    // Cari dokumen REJECTED yang akan di-update
    const existingRejected = uploadedDocs.value.find(doc =>
        doc.docType === selectedDocType.value && doc.status === 'REJECTED'
    )

    try {
        if (existingRejected) {
            // Update dokumen yang sudah ada (REJECTED)
            await api.put(`/deed-documents/${existingRejected.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

            // Perbarui data di frontend
            existingRejected.status = 'UPLOADED' // Atau status dari respons jika ada
            existingRejected.name = selectedFile.value.name
        } else {
            // Upload baru
            const response = await api.post(`/deeds/${props.deed.id}/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

            // Tambahkan dokumen baru ke daftar
            uploadedDocs.value.push({
                id: response.data.id,
                docType: selectedDocType.value,
                status: response.data.status || 'UPLOADED',
                name: selectedFile.value.name,
            })
        }

        alert('Dokumen berhasil diunggah.')
        props.onClose()
    } catch (error) {
        console.error('Gagal unggah dokumen:', error)
        alert('Gagal mengunggah dokumen.')
    } finally {
        uploading.value = false
    }
}
</script>
