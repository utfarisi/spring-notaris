<template>
    <div class="max-w-3xl p-8 mx-auto bg-white border rounded shadow">
        <h2 class="mb-4 text-2xl font-bold">Invoice #{{ invoice?.invoiceNumber }}</h2>
        <p class="text-sm text-gray-600">Tanggal: {{ formatDate(invoice?.invoiceDate) }}</p>
        <p class="text-sm text-gray-600">Jatuh Tempo: {{ formatDate(invoice?.dueDate) }}</p>

        <hr class="my-4" />

        <p><strong>Klien:</strong> </p>

        <h3 class="mt-4 mb-2 text-lg font-semibold">Rincian Biaya</h3>
        <ul class="mb-4">
            <li class="flex justify-between" v-if="invoice?.transactionAmount">
                <span>Transaksi</span>
                <span>Rp {{ formatCurrency(invoice?.transactionAmount) }}</span>
            </li>
            <li class="flex justify-between">
                <span>Biaya Notaris ({{ invoice?.serviceFeePercentage }}%)</span>
                <span>Rp {{ formatCurrency(invoice?.feeAmount) }}</span>
            </li>
            <li v-for="item in invoice?.items" :key="item.name" class="flex justify-between">
                <span>{{ item.name }}</span>
                <span>Rp {{ formatCurrency(item.amount) }}</span>
            </li>
        </ul>

        <hr class="my-4" />
        <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>Rp {{ formatCurrency(invoice?.subtotal) }}</span>
        </div>

        <div class="mt-6 text-center">
            <button @click="print" class="btn-primary">Cetak</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/libs/utils'
import { useRoute } from 'vue-router'

const route = useRoute()
const invoice = ref()

onMounted(async () => {
    const id = route.params.id
    const res = await api.get(`/invoices/${route.params.id}/show`)
    console.log(" data ", res.data)
    invoice.value = res.data
})

const formatCurrency = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

const formatDate = (date) =>
    new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })

const print = () => {
    window.print()
}
</script>
