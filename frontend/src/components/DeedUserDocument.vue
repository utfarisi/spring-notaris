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

<script setup>
import { ref } from 'vue'
import PreviewDocument from '@/components/PreviewDocument.vue';

const backendBaseUrl = ref(import.meta.env.VITE_APP_BACKEND_URL || 'http://localhost:8080');

const props = defineProps({
    documents: {
        id: {
            required: true
        },
        docType: {
            required: true
        },
        name: {
            required: true
        },
        status: {
            required: true
        },
        filePath: {
            required: true
        }
    }
})

const emit = defineEmits(['reupload']);

const previewUrl = ref('')

const emitReupload = (doc) => {
    emit('reupload', doc)
}

const previewDocument = (doc) => {

    const fileUrl = `${backendBaseUrl.value}/${doc.name}`
    previewUrl.value = fileUrl
    console.log(" previewUrl ", previewUrl.value)
}

const statusClass = (status) => {
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
