<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div class="relative w-full max-w-md p-6 bg-white rounded">
            <h2 class="mb-4 text-xl font-bold">Pembayaran Invoice</h2>
            <p>No: {{ invoice.invoiceNumber }}</p>
            <p>Total: Rp {{ formatCurrency(invoice.totalAmount) }}</p>

            <!-- Metode Pembayaran -->
            <div class="mt-4">
                <label class="block mb-1 font-medium">Metode Pembayaran:</label>
                <select v-model="paymentMethod" class="input">
                    <option disabled value="">-- Pilih --</option>
                    <option value="CASH">Cash</option>
                    <option value="TRANSFER">Transfer Bank</option>
                </select>
            </div>

            <!-- Jika transfer -->
            <div v-if="paymentMethod === 'TRANSFER'" class="mt-4">
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

            <!-- Action Buttons -->
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
import axios from 'axios'

const props = defineProps({
    invoice: Object,
})
const emit = defineEmits(['close', 'paid'])

const paymentMethod = ref('')
const selectedBank = ref('')
const file = ref(null)

const banks = [
    {
        code: 'BCA',
        name: 'Bank BCA',
        accountNumber: '1234567890',
        logo: '/img/bca.png',
    },
    {
        code: 'MANDIRI',
        name: 'Bank Mandiri',
        accountNumber: '9876543210',
        logo: '/img/mandiri.png',
    },
    {
        code: 'BSI',
        name: 'Bank Syariah Indonesia (BSI)',
        accountNumber: '5566778899',
        logo: '/img/bsi.png',
    },
]

const onClose = () => emit('close')

const handleFileUpload = (event) => {
    file.value = event.target.files[0]
}

const submitPayment = async () => {
    if (paymentMethod.value === 'TRANSFER' && (!selectedBank.value || !file.value)) {
        alert('Harap pilih bank dan upload bukti transfer.')
        return
    }

    const formData = new FormData()
    formData.append('paymentMethod', paymentMethod.value)
    formData.append('bankCode', selectedBank.value)
    if (file.value) formData.append('proof', file.value)

    try {
        await axios.post(`/api/invoices/${props.invoice.id}/pay`, formData)
        alert('Pembayaran berhasil dikirim.')
        emit('paid')
        onClose()
    } catch (e) {
        console.error(e)
        alert('Gagal melakukan pembayaran.')
    }
}

const formatCurrency = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
</script>

<style scoped>
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
