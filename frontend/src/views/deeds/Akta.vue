<template>
    <div class="ml-45 flex flex-col items-center h-full">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4 w-10/12">
            <h2 class="text-xl font-semibold">Daftar Akta</h2>
            <RouterLink to="/deeds/create"
                class="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                + Tambah Akta
            </RouterLink>
        </div>

        <!-- Table -->
        <div class="w-10/12 bg-white p-6 rounded shadow-md overflow-x-auto">
            <table class="w-full table-auto border border-gray-300">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2 border">No</th>
                        <th class="px-4 py-2 border">Nomor Akta</th>
                        <th class="px-4 py-2 border">Jenis Akta</th>
                        <th class="px-4 py-2 border">Tanggal</th>
                        <th class="px-4 py-2 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(akta, index) in aktas" :key="akta.id">
                        <td class="px-4 py-2 border text-center">{{ page * size + index + 1 }}</td>
                        <td class="px-4 py-2 border">{{ akta.number }}</td>
                        <td class="px-4 py-2 border">{{ akta.deed_type }}</td>
                        <td class="px-4 py-2 border">{{ akta.deed_date }}</td>
                        <td class="px-4 py-2 border text-center">
                            <RouterLink :to="`/deeds/${akta.id}`" class="text-blue-500 hover:underline">Detail
                            </RouterLink>
                        </td>
                    </tr>
                    <tr v-if="aktas.length === 0">
                        <td colspan="5" class="text-center py-4 text-gray-500">Belum ada data akta</td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="flex justify-between items-center mt-4">
                <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" @click="prevPage"
                    :disabled="page === 0">
                    &lt; Prev
                </button>
                <span>Halaman {{ page + 1 }} dari {{ totalPages }}</span>
                <button class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" @click="nextPage"
                    :disabled="page + 1 >= totalPages">
                    Next &gt;
                </button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const aktas = ref<any[]>([])
const page = ref(0)
const size = 10
const totalPages = ref(1)

const fetchDeeds = async () => {
    const res = await api.get('/deeds', {
        params: { page: page.value, size },
        withCredentials: true,
    })
    aktas.value = res.data.content
    totalPages.value = res.data.totalPages
}

const prevPage = () => {
    if (page.value > 0) {
        page.value--
        fetchDeeds()
    }
}

const nextPage = () => {
    if (page.value + 1 < totalPages.value) {
        page.value++
        fetchDeeds()
    }
}

onMounted(fetchDeeds)
</script>
