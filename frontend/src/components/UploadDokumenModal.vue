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

            <form @submit.prevent="handleSubmit">
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


            <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" @click="onClose">
                ✕
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import api from '@/libs/utils'
import { requiredDocumentsMap } from '@/libs/requiredDocuments'

const props = defineProps<{
    show: boolean
    deed: {
        id: number,
        deedType: String,
    },
    onClose: () => void
}>()

const requiredDocs = computed(() => {
    return props.deed && props.deed.deedType
        ? requiredDocumentsMap[props.deed.deedType] || []
        : []
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

    try {
        await api.post(`/deeds/${props.deed.id}/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
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
