<template>
    <div class="p-6">
        <h2 class="mb-4 text-xl font-bold">Invoice Saya</h2>
        <div v-if="invoice?.empty">Belum ada invoice</div>

        <table class="w-full border">
            <thead class="bg-gray-100">
                <tr>
                    <th class="p-2 text-left">Nomor</th>
                    <th class="p-2 text-left">Tanggal</th>
                    <th class="p-2 text-left">Total</th>
                    <th class="p-2 text-left">Status</th>
                    <th class="p-2 text-left">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="inv in invoice?.content" :key="inv.id" class="border-t">
                    <td class="p-2">{{ inv.invoiceNumber }}</td>
                    <td class="p-2">{{ formatDate(inv.invoiceDate) }}</td>
                    <td class="p-2">Rp{{ inv.totalAmount.toLocaleString() }}</td>
                    <td class="p-2">{{ inv.status }}</td>
                    <td class="p-2">
                        <button class="text-blue-600" @click="viewDetail(inv)">Lihat</button>
                    </td>
                </tr>
            </tbody>
        </table>


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
