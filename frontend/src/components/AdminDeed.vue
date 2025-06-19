<template>
    <div>
        <div class="flex">
            <h1 class="w-4/5 mb-4 text-2xl font-bold">Daftar Akta</h1>
            <div class="text-center">
                <router-link to="/deeds/create"
                    class="inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-xl">Tambah
                    Akta</router-link>
            </div>
        </div>

        <!-- Table -->
        <div class="px-6 py-8 bg-white rounded-lg shadow-md ">
            <table class="w-full mt-5 table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border border-gray-300">No</th>
                        <th class="px-4 py-2 border border-gray-300">Nomor Akta</th>
                        <th class="px-4 py-2 border border-gray-300">Jenis Akta</th>
                        <th class="px-4 py-2 border border-gray-300">Tanggal</th>
                        <th class="px-4 py-2 border border-gray-300">Status Terakhir</th>
                        <th class="px-4 py-2 border border-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading">
                        <td colspan="6">
                            <div class="py-4 text-center">
                                <span
                                    class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
                                <p class="mt-2 text-sm text-gray-500">Memuat semua janji...</p>
                            </div>
                        </td>
                    </tr>
                    <tr v-for="(akta, index) in aktas" :key="akta.id">
                        <td class="px-4 py-2 text-center border border-gray-300">{{ page * size + index + 1 }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ akta.number }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ akta.deedType }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ formatDate(akta.deedDate) }}</td>
                        <td class="px-4 py-2 border border-gray-300">{{ akta.deedStatus }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">
                            <RouterLink :to="`/deeds/${akta.id}`" class="text-blue-500 hover:underline">Detail
                            </RouterLink>
                            <button v-if="akta?.deedStatus === 'COMPLETED' && !akta?.invoice"
                                @click="openInvoiceForm(akta)" class="px-4 py-2 duration-200 text-greeen-900">
                                Buat Invoice
                            </button>
                        </td>
                    </tr>
                    <tr v-if="aktas?.length === 0">
                        <td colspan="5" class="py-4 text-center text-gray-500">Belum ada data akta</td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="flex items-center justify-between mt-4">
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
        <InvoiceFormModal :show="showModal" :deedId="deedSelected?.id" :onClose="() => (showModal = false)"
            @saved="fetchDeeds" />
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'
import { formatDate } from '../libs/dateUtils'
import InvoiceFormModal from '@/components/invoices/InvoiceFormModal.vue';

const aktas = ref()
const page = ref(0)
const size = 10
const showModal = ref(false);
const totalPages = ref(1)
const deedSelected = ref()
const loading = ref(true)

const fetchDeeds = async () => {
    loading.value = true
    try {
        const res = await api.get('/deeds', {
            params: { page: page.value, size },
        })
        aktas.value = res.data.content
        totalPages.value = res.data.totalPages
    }
    catch (e) {

    }
    finally {
        loading.value = false
    }
}


const openInvoiceForm = (akta) => {
    deedSelected.value = akta
    showModal.value = true
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
