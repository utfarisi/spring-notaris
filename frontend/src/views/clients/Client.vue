<template>
    <div>

        <div class="flex justify-between w-10/12 mb-4">
            <h1 class="w-4/5 mb-4 text-2xl font-bold">Daftar Pelanggan</h1>
        </div>


        <div class="p-6 overflow-x-auto bg-white rounded-md shadow-md ">
            <table class="w-full mt-5 border border-gray-300 table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border border-gray-300">No</th>
                        <th class="px-4 py-2 border border-gray-300">Nama</th>
                        <th class="px-4 py-2 border border-gray-300">NIP</th>
                        <th class="px-4 py-2 border border-gray-300">Email</th>
                        <th class="px-4 py-2 border border-gray-300">Telpon</th>
                        <th class="px-4 py-2 border border-gray-300">Alamat</th>
                        <th class="px-4 py-2 border border-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading">
                        <td colspan="7">
                            <div v-if="loading" class="py-4 text-center">
                                <span
                                    class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
                                <p class="mt-2 text-sm text-gray-500">Memuat semua janji...</p>
                            </div>
                        </td>
                    </tr>
                    <tr v-for="(c, index) in clients" :key="c.id">
                        <td class="px-4 py-2 text-center border border-gray-300">{{ page * size + index + 1 }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ c.fullname }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ c.nip }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ c.email }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ c.phone }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ c.address }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">
                            <RouterLink :to="`/clients/${c.id}/show`" class="text-blue-500 hover:underline">Detail
                            </RouterLink>
                        </td>
                    </tr>
                    <tr v-if="clients.length === 0">
                        <td colspan="5" class="py-4 text-center text-gray-500">Belum ada data akta</td>
                    </tr>
                </tbody>
            </table>

            <ul>
                <li>
                    <div>test</div>
                </li>
            </ul>

            <!-- Pagination -->
            <div class="flex items-center justify-between mt-4" v-if="!data?.empty">
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

<script setup>
import { ref, reactive, onMounted } from 'vue'
import api from '@/libs/utils'

const clients = ref([])
const page = ref(0)
const size = 10
const totalPages = ref(1)
const data = ref();
const loading = ref(false)

onMounted(async () => {
    loading.value = true
    try {
        const res = await api.get('/clients', {
            params: { page: page.value, size },
        })
        data.value = res.data;
        clients.value = res.data.content;
        totalPages.value = res.data.totalPages;
    }
    catch (e) { }
    finally {
        loading.value = false
    }
})

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
</script>