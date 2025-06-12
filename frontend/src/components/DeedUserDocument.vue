<template>
    <div class="p-2">
        <h3 class="mb-4 text-lg font-bold">Daftar Dokumen</h3>
        <div class="flex flex-wrap gap-3">
            <div v-for="doc in documents" :key="doc.id"
                class="flex-grow w-full p-2 border border-gray-400 sm:w-auto rounded-2xl">
                <div>
                    <p class="font-semibold">{{ doc.docType }}</p>
                    <p class="text-sm">
                        Status:
                        <span :class="statusClass(doc.status)">
                            {{ doc.status }}
                        </span>
                    </p>
                </div>
                <div class="flex gap-2">
                    <button @click="previewDocument(doc)" class="text-blue-600 underline">Lihat</button>
                    <button v-if="doc.status === 'REJECTED'" @click="emitReupload(doc)"
                        class="px-2 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600">
                        Unggah Ulang
                    </button>
                </div>
            </div>
        </div>

        <PreviewDocument :preview-url="previewUrl" @close="previewUrl = ''" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PreviewDocument from '@/components/PreviewDocument.vue';

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';

const props = defineProps<{
    documents: {
        id: number
        docType: string
        name: string
        status: string
        filePath: string
    }[]
}>()

const emit = defineEmits<{
    (e: 'reupload', document: any): void
}>()

const previewUrl = ref('')

const emitReupload = (doc: any) => {
    emit('reupload', doc)
}

const previewDocument = (doc: any) => {
    // Asumsikan backend Anda sudah bisa melayani file via URL tertentu
    const fileUrl = `${backendBaseUrl}/${doc.name}` // sesuaikan dengan path public file di backend
    previewUrl.value = fileUrl
    console.log(" previewUrl ", previewUrl.value)
}

const statusClass = (status: string) => {
    switch (status) {
        case 'APPROVED':
            return 'text-green-600 font-semibold'
        case 'REJECTED':
            return 'text-red-600 font-semibold'
        case 'PENDING':
            return 'text-yellow-600 font-semibold'
        default:
            return 'text-gray-600'
    }
}
</script>
