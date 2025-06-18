<template>
    <div class="max-w-3xl p-6 mx-auto space-y-4 bg-white shadow rounded-xl">
        <div class="mb-4">
            <p class="mb-1 font-medium text-gray-700">Dokumen Wajib:</p>
            <ul class="pl-5 text-sm text-gray-600 list-disc">
                <li v-for="doc in requiredDocs" :key="doc">{{ doc }}</li>
            </ul>
        </div>

        <form @submit.prevent="handleSubmit" v-if="requiredDocs.length > 0">
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Jenis Dokumen</label>
                <select v-model="selectedDocType" class="block w-full p-2 mt-1 border rounded">
                    <option disabled value="">-- Pilih Jenis Dokumen --</option>
                    <option v-for="doc in requiredDocs" :key="doc" :value="doc">{{ doc }}</option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Pilih File</label>
                <input type="file" @change="handleFileChange" class="block w-full p-2 mt-1 border rounded" />
            </div>

            <div class="flex justify-end gap-2 mt-6">
                <button type="button" @click="onClose"
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
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import api from '@/libs/utils'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'
import { useRoute } from 'vue-router'

const route = useRoute()

const deed = ref();
const uploadedDocs = ref([...deed.deedDocs || []])

watch(() => deed, (newDeed) => {
    uploadedDocs.value = [...newDeed.deedDocs || []]
}, { immediate: true })

const requiredDocs = computed(() => {
    if (!deed || !deed.deedType) return []

    const allRequired = requiredDocumentsMap[deed.deedType] || []
    //const uploadedTypes = (props.deed as any).deedDocs?.map((doc: any) => doc.docType) || []
    const uploadedTypes = uploadedDocs.value
        .filter(doc => doc.status !== 'REJECTED')
        .map(doc => doc.docType)
    // Kembalikan dokumen yang belum diunggah
    return allRequired.filter(doc => !uploadedTypes.includes(doc))
})

const selectedFile = ref < File | null > (null)
const selectedDocType = ref < string > ('')
const uploading = ref(false)
const documents = ref([])

const handleFileChange = (e) => {
    const target = e.target
    selectedFile.value = target.files?.[0] || null
}

const fetchDetail = async () => {
    const detailRes = await api.get(`/deeds/${route.params.id}/status-history`)
    deed.value = detailRes.data
    documents.value = detailRes.data?.deedDocs
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
onMounted(fetchDetail)
</script>
