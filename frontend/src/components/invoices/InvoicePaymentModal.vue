<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div class="relative w-full max-w-md p-6 bg-white rounded">
            <h2 class="mb-4 text-xl font-bold">Pembayaran Invoice</h2>
            <p>No: {{ invoice.invoiceNumber }}</p>
            <p>Total: {{ formatCurrency(invoice.totalAmount) }}</p>

            <div class="mt-4">
                <label class="block mb-1 font-medium">Metode Pembayaran:</label>
                <select v-model="paymentMethod" class="input">
                    <option disabled value="">-- Pilih --</option>
                    <option value="CASH">Cash</option>
                    <option value="BANK_TRANSFER">Transfer Bank</option>
                </select>
            </div>

            <div v-if="paymentMethod === 'BANK_TRANSFER'" class="mt-4">
                <label class="block mb-1 font-medium">Pilih Bank Tujuan:</label>
                <div class="space-y-2">
                    <div v-for="bank in banks" :key="bank.code"
                        class="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-100"
                        :class="{ 'ring-2 ring-blue-500': selectedBank === bank.code }"
                        @click="selectedBank = bank.code">
                        <img :src="bank.logo" alt="logo bank" class="w-10 h-10 mr-4" />
                        <div>
                            <p class="font-semibold">{{ bank.name }}</p>
                            <p class="text-sm text-gray-600">No Rek: {{ bank.accountNumber }}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <label class="block mb-1 font-medium">Upload Bukti Transfer:</label>
                    <input type="file" @change="handleFileUpload" class="input" />
                </div>
            </div>

            <div v-if="paymentMethod === 'CASH'" class="mt-4">
                <PaymentCash :invoice="invoice" />
            </div>

            <div class="flex justify-end gap-2 mt-6">
                <button @click="onClose" class="btn-secondary">Batal</button>
                <button @click="submitPayment" class="btn-primary">Bayar</button>
            </div>

            <button @click="onClose" class="absolute text-gray-500 top-2 right-2 hover:text-black">✕</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/libs/utils'
import PaymentCash from '@/components/invoices/PaymentCash.vue' // Pastikan path benar

const props = defineProps({
    invoice: Object,
})
const emit = defineEmits(['close', 'paid'])

const backendBaseUrl = ref(import.meta.env.VITE_APP_BACKEND_URL || 'http://localhost:8080');

const paymentMethod = ref('') // Akan diisi 'CASH' atau 'BANK_TRANSFER'
const selectedBank = ref('') // Hanya untuk BANK_TRANSFER
const file = ref(null) // Hanya untuk BANK_TRANSFER

const banks = [
    { code: 'BCA', name: 'Bank BCA', accountNumber: '1234567890', logo: backendBaseUrl.value + '/images/bca-logo.png' },
    { code: 'MANDIRI', name: 'Bank Mandiri', accountNumber: '9876543210', logo: backendBaseUrl.value + '/images/bank-mandiri-logo.png' },
    { code: 'BSI', name: 'Bank Syariah Indonesia (BSI)', accountNumber: '5566778899', logo: backendBaseUrl.value + '/images/bsi-logo.png' },
];

const onClose = () => emit('close')

const handleFileUpload = (event) => {
    file.value = event.target.files[0]
}

const submitPayment = async () => {
    // Validasi umum untuk metode pembayaran
    if (!paymentMethod.value) {
        alert('Harap pilih metode pembayaran.')
        return
    }

    const form = new FormData()
    form.append('paymentMethod', paymentMethod.value)

    if (paymentMethod.value === 'BANK_TRANSFER') {
        if (!selectedBank.value || !file.value) {
            alert('Harap pilih bank dan upload bukti transfer.')
            return
        }
        form.append('bankCode', selectedBank.value)
        form.append('proof', file.value)
    } else if (paymentMethod.value === 'CASH') {

    }

    try {
        console.log("Payload yang dikirim (FormData):", Object.fromEntries(form.entries())); // Logging FormData
        await api.post(`/invoices/${props.invoice.id}/pay`, form, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        alert('Pembayaran berhasil dikirim.')
        emit('paid') // Memberi tahu parent bahwa pembayaran berhasil
        onClose() // Menutup modal
    } catch (e) {
        console.error("Error saat mengirim pembayaran:", e.response ? e.response.data : e.message); // Log error lebih detail
        alert('Gagal melakukan pembayaran. Silakan coba lagi.')
    }
}

const formatCurrency = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
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