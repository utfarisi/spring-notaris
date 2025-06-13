<template>
    <div>
        <h1 class="mb-4 text-xl font-bold">Daftar Invoice</h1>
        <div v-if="invoice?.empty">Belum ada invoice</div>

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
                </tbody>
            </table>
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
