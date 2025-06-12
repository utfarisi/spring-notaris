<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div class="relative w-full max-w-md p-6 bg-white rounded">
            <h2 class="mb-4 text-xl font-bold">Pembayaran Invoice</h2>

            <div class="mb-2">
                <p><strong>No Invoice:</strong> {{ invoice.invoiceNumber }}</p>
                <p><strong>Total:</strong> Rp {{ formatCurrency(invoice.totalAmount) }}</p>
            </div>

            <div class="mt-4">
                <label class="block mb-1 font-medium">Metode Pembayaran</label>
                <select v-model="paymentMethod" class="input">
                    <option disabled value="">-- Pilih --</option>
                    <option value="CASH">Cash</option>
                    <option value="TRANSFER">Transfer Bank</option>
                </select>
            </div>

            <!-- BANK TRANSFER DETAILS -->
            <div v-if="paymentMethod === 'TRANSFER'" class="mt-4">
                <label class="block mb-1 font-medium">Pilih Bank Tujuan</label>
                <div class="space-y-2">
                    <div v-for="bank in banks" :key="bank.code"
                        class="flex items-center gap-3 p-2 border rounded cursor-pointer hover:bg-gray-100"
                        :class="{ 'border-blue-500': selectedBank === bank.code }" @click="selectedBank = bank.code">
                        <img :src="bank.logo" class="object-contain w-10 h-10" />
                        <div>
                            <div class="font-semibold">{{ bank.name }}</div>
                            <div class="text-sm">No Rek: {{ bank.accountNumber }}</div>
                            <div class="text-sm text-gray-500">a.n. {{ bank.accountHolder }}</div>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <label class="block mb-1 font-medium">Upload Bukti Transfer</label>
                    <input type="file" @change="handleFileUpload" class="input" />
                </div>
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
        name: 'Bank Central Asia (BCA)',
        accountNumber: '1234567890',
        accountHolder: 'PT Notaris Digital',
        logo: '/images/bank-bca.png',
    },
    {
        code: 'MANDIRI',
        name: 'Bank Mandiri',
        accountNumber: '9876543210',
        accountHolder: 'PT Notaris Digital',
        logo: '/images/bank-mandiri.png',
    },
    {
        code: 'BSI',
        name: 'Bank Syariah Indonesia (BSI)',
        accountNumber: '555667788',
        accountHolder: 'PT Notaris Digital',
        logo: '/images/bank-bsi.png',
    },
]

const onClose = () => emit('close')

const handleFileUpload = (e) => {
    file.value = e.target.files[0]
}

const submitPayment = async () => {
    if (paymentMethod.value === 'TRANSFER' && (!file.value || !selectedBank.value)) {
        alert('Silakan pilih bank dan upload bukti transfer.')
        return
    }

    const formData = new FormData()
    formData.append('paymentMethod', paymentMethod.value)
    formData.append('bankCode', selectedBank.value)
    if (file.value) formData.append('proof', file.value)

    try {
        await api.put(`/invoices/${props.invoice.id}/pay`, formData)
        alert('Pembayaran berhasil dikirim.')
        emit('paid')
        onClose()
    } catch (e) {
        console.error(e)
        alert('Gagal melakukan pembayaran.')
    }
}

const formatCurrency = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
}
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
    @apply px-4 py-2 bg
}
</style>