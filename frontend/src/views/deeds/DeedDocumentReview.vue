<template>
    <div class="max-w-3xl p-6 mx-auto bg-white rounded shadow">



        <div class="flex items-center gap-3 mb-4">
            <h2 class="w-4/5 mb-4 text-2xl font-bold">Verifikasi Dokumen Akta</h2>

            <router-link :to="`/deeds/${route.params.id}`" class="px-2 py-2 text-sm text-white bg-black rounded-md ">
                Kembali
            </router-link>
        </div>

        <div class="mb-4">
            <p><strong>Nomor:</strong> {{ deed.number }}</p>
            <p><strong>Judul:</strong> {{ deed.title }}</p>
            <p><strong>Jenis:</strong> {{ deed.deedType }}</p>
            <p><strong>Tanggal:</strong> {{ deed.deedDate }}</p>
        </div>

        <table class="w-full border table-auto">
            <thead>
                <tr class="text-left bg-gray-100">
                    <th class="px-3 py-2">Nama Dokumen</th>
                    <th class="px-3 py-2">Status</th>
                    <th class="px-3 py-2">Image</th>
                    <th class="px-3 py-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="doc in documents" :key="doc.name" class="border-t">
                    <td class="px-3 py-2">{{ doc.name }}</td>
                    <td class="px-3 py-2">
                        <span :class="statusBadge(doc.status)">
                            {{ doc.status }}
                        </span>
                    </td>
                    <td class="px-3 py-2">
                        <button @click="previewDocument(doc)" class="text-blue-600 underline">Lihat</button>
                    </td>
                    <td class="flex px-3 py-2 space-x-2">
                        <a v-if="doc.fileUrl" :href="doc.fileUrl" target="_blank" class="text-blue-600 hover:underline">
                            Lihat
                        </a>
                        <button v-if="doc.status !== 'APPROVED'" @click="verify(doc.id, 'APPROVED')"
                            class="text-green-600 hover:underline">
                            ✔
                        </button>
                        <button v-if="doc.status !== 'REJECTED'" @click="verify(doc.id, 'REJECTED')"
                            class="text-red-600 hover:underline">
                            ✘
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <PreviewDocument :preview-url="previewUrl" @close="previewUrl = ''" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PreviewDocument from '@/components/PreviewDocument.vue';
import api from '@/libs/utils'

const backendBaseUrl = ref(import.meta.env.VITE_APP_BACKEND_URL || 'http://localhost:8080');

const route = useRoute()
const deedId = route.params.id

const deed = ref({})
const documents = ref([])

const previewUrl = ref('')

onMounted(async () => {
    const [deedRes, docRes] = await Promise.all([
        api.get(`/deeds/${deedId}`),
        api.get(`/deeds/${deedId}/documents`)
    ])
    deed.value = deedRes.data
    documents.value = docRes.data
})

const verify = async (docId, status) => {
    try {
        await api.put(`/deed-documents/${docId}/verify`, {
            status: status
        })
        const idx = documents.value.findIndex(doc => doc.id === docId)
        if (idx !== -1) {
            documents.value[idx].status = status
        }
    } catch (e) {
        console.error('Verifikasi gagal', e)
    }
}

const previewDocument = (doc) => {
    const fileUrl = `${backendBaseUrl.value}/${doc.name}`
    previewUrl.value = fileUrl
}

const statusBadge = (status) => {
    return {
        'APPROVED': 'text-green-600 font-semibold',
        'REJECTED': 'text-red-600 font-semibold',
        'UPLOADED': 'text-blue-600 font-semibold',
        'MISSING': 'text-gray-500 italic'
    }[status]
}
</script>
