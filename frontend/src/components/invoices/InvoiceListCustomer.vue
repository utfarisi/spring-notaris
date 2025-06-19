<template>
    <div class="p-6">
        <h1 class="mb-4 text-2xl font-bold">Daftar Invoice</h1>

        <div v-if="loading" class="py-4 text-center">
            <span
                class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
            <p class="mt-2 text-sm text-gray-500">Memuat daftar pelanggan...</p>
        </div>

        <div v-if="invoices.empty" class="p-4 text-gray-500 bg-white border border-gray-300 rounded-md ">Tidak ada
            invoice.</div>

        <div v-for="invoice in invoices.content" :key="invoice.id"
            class="flex flex-col justify-between gap-2 p-4 mb-4 bg-white border rounded shadow sm:flex-row sm:items-center">
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
                    <span>: {{ formatCurrency(invoice?.totalAmount) }}</span>
                </div>
                <div style="display: flex; align-items: baseline;">
                    <strong style="width: 100px;">Status</strong>
                    <span :class="getStatusClasses(invoice.status || 'UNPAID')">
                        {{ translatePaymentStatus(invoice.status || 'UNPAID') }}
                    </span>
                </div>
            </div>

            <button v-if="invoice.status !== 'PAID'" @click="selectedInvoice = invoice" class="btn-primary">Pilih
                Metode Bayar</button>
            <span v-else class="text-sm text-gray-500">Sudah Dibayar</span>
        </div>

        <InvoicePaymentModal v-if="selectedInvoice" :invoice="selectedInvoice" @close="selectedInvoice = null"
            @paid="handlePaymentSuccess" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InvoicePaymentModal from '@/components/invoices/InvoicePaymentModal.vue'
import api from '@/libs/utils'

const invoices = ref({ content: [], empty: true });
const loading = ref(true)

const selectedInvoice = ref(null)

const fetchInvoices = async () => {
    try {
        loading.value = true
        const response = await api.get('/invoices/my-invoice');
        invoices.value = response.data;

        invoices.value.empty = !response.data.content || response.data.content.length === 0;
    } catch (error) {
        console.error("Error fetching invoices:", error);
    }
    finally {
        loading.value = false
    }
}

const handlePaymentSuccess = () => {
    const paidInvoiceId = selectedInvoice.value.id;
    const index = invoices.value.content.findIndex(inv => inv.id === paidInvoiceId);

    if (index !== -1) {
        invoices.value.content[index].paymentStatus = 'ISSUED';
    }

    selectedInvoice.value = null;

}

onMounted(fetchInvoices)

const formatCurrency = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
}


const paymentStatusTranslations = {
    'ISSUED': 'Masih Draft',
    'UNPAID': 'Belum Dibayar',
    'PAID': 'Sudah Dibayar',
    'CANCELLED': 'Dibatalkan',

};

const translatePaymentStatus = (status) => {
    return paymentStatusTranslations[status] || status;
};


const getStatusClasses = (status) => {
    switch (status) {
        case 'PAID':
            return 'px-2 py-1 ml-1 font-semibold text-white bg-green-700 rounded-sm';
        case 'ISSUED':
            return 'px-2 py-1 ml-1 font-semibold text-white bg-yellow-600 rounded-sm';
        case 'UNPAID':
            return 'px-2 py-1 ml-1 font-semibold text-white bg-red-600 rounded-sm';
        default:
            return 'px-2 py-1 ml-1 font-semibold text-white bg-gray-500 rounded-sm'; // Default untuk status tidak dikenal
    }
};
</script>

<style scoped>
@import url('@/style.css');

.btn-primary {
    @apply px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
</style>