<template>
    <div class="max-w-3xl mx-auto p-6 bg-white rounded shadow">



        <div class="flex gap-3 items-center mb-4">
            <h2 class="text-2xl font-bold mb-4 w-4/5">Verifikasi Dokumen Akta</h2>

            <router-link :to="`/deeds/${route.params.id}`" class="bg-black px-2 py-2 rounded-md text-white text-sm ">
                Kembali
            </router-link>
        </div>

        <div class="mb-4">
            <p><strong>Nomor:</strong> {{ deed.number }}</p>
            <p><strong>Judul:</strong> {{ deed.title }}</p>
            <p><strong>Jenis:</strong> {{ deed.deedType }}</p>
            <p><strong>Tanggal:</strong> {{ deed.deedDate }}</p>
        </div>

        <table class="w-full table-auto border">
            <thead>
                <tr class="bg-gray-100 text-left">
                    <th class="px-3 py-2">Nama Dokumen</th>
                    <th class="px-3 py-2">Status</th>
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
                    <td class="px-3 py-2 flex space-x-2">
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/libs/utils'

const route = useRoute()
const deedId = route.params.id

const deed = ref<any>({})
const documents = ref<any[]>([])

onMounted(async () => {
    const [deedRes, docRes] = await Promise.all([
        api.get(`/deeds/${deedId}`),
        api.get(`/deeds/${deedId}/documents`)
    ])
    deed.value = deedRes.data
    documents.value = docRes.data
})

const verify = async (docId: BigInteger, status: string) => {
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

const statusBadge = (status: string) => {
    return {
        'APPROVED': 'text-green-600 font-semibold',
        'REJECTED': 'text-red-600 font-semibold',
        'UPLOADED': 'text-blue-600 font-semibold',
        'MISSING': 'text-gray-500 italic'
    }[status]
}
</script>
