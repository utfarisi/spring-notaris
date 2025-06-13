<template>
    <div class="max-w-3xl p-8 mx-auto bg-white border rounded shadow">
        <h2 class="mb-4 text-2xl font-bold">Invoice #{{ invoice?.invoiceNumber }}</h2>
        <p class="text-sm text-gray-600">Tanggal: {{ formatDate(invoice?.invoiceDate) }}</p>
        <p class="text-sm text-gray-600">Jatuh Tempo: {{ formatDate(invoice?.dueDate) }}</p>

        <hr class="my-4" />
        <div class="pt-4 mt-6 border-t">
            <p><strong>Metode:</strong> {{ invoice?.paymentMethod }}</p>
            <p v-if="invoice?.paymentMethod === 'BANK_TRANSFER'">
                Bukti Transfer:
                <a :href="invoice?.evident" target="_blank" class="text-blue-600">Lihat File</a>
            </p>

            <button class="mt-4 btn-primary" @click="tandaiLunas" v-if="invoice?.paymentMethod">Tandai Lunas</button>
        </div>

    </div>
</template>

<script setup>
import api from '@/libs/utils'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const invoice = ref()
const route = useRoute();

onMounted(async () => {
    const res = await api.get(`/invoices/${route.params.id}/show`)
    invoice.value = res.data
    console.log(" res.data ", res.data)
})
const tandaiLunas = async () => {
    await api.post(`/api/invoices/${invoice.id}/mark-paid`)
    alert('Invoice ditandai lunas.')
}


const formatCurrency = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num)

const formatDate = (date) =>
    new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })


</script>

<style scoped>
@import url('@/style.css');

.input {
    @apply w-full p-2 border rounded;
}

.btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}

.btn-secondary {
    @apply px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400;
}
</style>