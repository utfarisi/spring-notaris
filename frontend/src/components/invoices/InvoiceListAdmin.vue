<template>
    <div>
        <h1 class="mb-4 text-xl font-bold">Daftar Invoice</h1>

        <div class="p-6 overflow-x-auto bg-white rounded-md shadow-md ">
            <table class="w-full mt-5 border border-gray-300 table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2 border border-gray-300">Nomor</th>
                        <th class="px-4 py-2 border border-gray-300">Tanggal</th>
                        <th class="px-4 py-2 border border-gray-300">Total</th>
                        <th class="px-4 py-2 border border-gray-300">Status</th>
                        <th class="px-4 py-2 border border-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="inv in invoice?.content" :key="inv.id" class="border-t">
                        <td class="px-4 py-2 text-center border border-gray-300">{{ inv.invoiceNumber }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">{{ formatDate(inv.invoiceDate) }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">Rp{{ inv.totalAmount.toLocaleString()
                        }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">{{ inv.status }}</td>
                        <td class="px-4 py-2 text-center border border-gray-300">
                            <router-link class="text-blue-600" :to="`/invoices/${inv.id}`">Lihat</router-link>
                        </td>
                    </tr>
                    <tr v-if="invoice?.empty">
                        <td colspan="5" class="py-4 text-center text-gray-500">Belum ada data invoice</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex items-center justify-between mt-4" v-if="!invoice?.empty">
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
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const invoice = ref()

const selectedInvoice = ref(null)

onMounted(async () => {
    const res = await api.get('/invoices');
    invoice.value = res.data
})

const viewDetail = (invoice) => {
    selectedInvoice.value = invoice
}

const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('id-ID')
</script>
