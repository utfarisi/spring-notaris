<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">Daftar Invoice</h1>

        <div v-if="invoices.empty" class="p-4 text-gray-500 bg-white border border-gray-300 rounded-md ">Tidak ada
            invoice.</div>

        <div v-for="invoice in invoices.content" :key="invoice.id"
            class="flex flex-col justify-between gap-2 p-4 bg-white border rounded shadow sm:flex-row sm:items-center">
            <div class="mb-2">
                <div style="display: flex; align-items: baseline;">
                    <strong style="width: 100px;">No. Invoice</strong>
                    <span>: {{ invoice.invoiceNumber }}</span>
                </div>
                <div style="display: flex; align-items: baseline;">
                    <strong style="width: 100px;">Tanggal</strong>
                    <span>: {{ invoice.invoiceDate }}</span>
                </div>
                <div style="display: flex; align-items: baseline;">
                    <strong style="width: 100px;">Total</strong>
                    <span>: {{ formatCurrency(invoice.totalAmount) }}</span>
                </div>
                <div style="display: flex; align-items: baseline;">
                    <strong style="width: 100px;">Status</strong>
                    <span class="px-2 py-1 ml-1 font-semibold text-white bg-green-700 rounded-sm"> {{
                        invoice.paymentStatus || 'Belum Dibayar'
                    }}</span>
                </div>
            </div>

            <button @click="selectedInvoice = invoice" class="btn-primary">Bayar</button>
        </div>

        <InvoicePaymentModal v-if="selectedInvoice" :invoice="selectedInvoice" @close="selectedInvoice = null"
            @paid="fetchInvoices" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InvoicePaymentModal from '@/components/invoices/InvoicePaymentModal.vue'
import api from '@/libs/utils'

const invoices = ref([])
const selectedInvoice = ref(null)

const fetchInvoices = async () => {
    const response = await api.get('/invoices/my-invoice') // hanya untuk user login
    invoices.value = response.data
}

onMounted(fetchInvoices)

const formatCurrency = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
}
</script>

<style scoped>
@import url('@/style.css');

.btn-primary {
    @apply px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
</style>
