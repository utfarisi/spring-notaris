<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">Daftar Invoice</h1>

        <div v-if="invoices.empty" class="text-gray-500">Tidak ada invoice.</div>

        <div v-for="invoice in invoices.content" :key="invoice.id" class="p-4 mb-4 border rounded shadow-sm">
            <div class="mb-2">
                <strong>No. Invoice:</strong> {{ invoice.invoiceNumber }} <br />
                <strong>Tanggal:</strong> {{ invoice.invoiceDate }} <br />
                <strong>Total:</strong> Rp {{ formatCurrency(invoice.totalAmount) }} <br />
                <strong>Status:</strong> <span class="font-semibold">{{ invoice.paymentStatus || 'Belum Dibayar'
                    }}</span>
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
