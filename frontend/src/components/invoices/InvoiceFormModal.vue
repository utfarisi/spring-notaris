<template>
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="relative w-full max-w-2xl bg-white rounded-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 class="mb-4 text-lg font-semibold">Buat Invoice</h2>

            <form @submit.prevent="submitInvoice">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Tanggal Invoice</label>
                    <input type="date" v-model="invoiceDate" class="input" />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700">Jatuh Tempo</label>
                    <input type="date" v-model="dueDate" class="input" />
                </div>

                <div class="mb-4">
                    <label class="block font-medium">Jumlah Transaksi</label>
                    <input type="number" v-model.number="transactionAmount" class="input" />
                </div>

                <div class="mb-4">
                    <label class="block font-medium">Biaya Jasa (%)</label>
                    <input type="number" v-model.number="serviceFeePercentage" class="input" step="0.1" />
                </div>

                <div class="mb-4">
                    <label class="block font-medium">Biaya Lain-lain</label>
                    <div v-for="(item, index) in additionalCosts" :key="index" class="flex gap-2 mb-2">
                        <input type="text" v-model="item.name" placeholder="Nama Biaya" class="w-1/2 input" />
                        <input type="number" v-model.number="item.amount" placeholder="Jumlah" class="w-1/2 input" />
                        <button type="button" @click="removeItem(index)" class="text-red-600">Hapus</button>
                    </div>
                    <button type="button" class="text-sm text-blue-600" @click="addItem">+ Tambah Biaya</button>
                </div>

                <div class="mb-4">
                    <label class="block font-medium">Deskripsi</label>
                    <textarea v-model="description" rows="2" class="input"></textarea>
                </div>

                <div class="mb-0 text-right">
                    <div>Subtotal: <strong>{{ subtotal.toLocaleString() }}</strong></div>
                    <div>Total: <strong>{{ totalAmount.toLocaleString() }}</strong></div>
                </div>

                <div class="sticky bottom-0 flex justify-end gap-2 pt-4 pb-2 mt-4 bg-white border-t">
                    <button type="button" @click="onClose" class="btn-secondary">Batal</button>
                    <button type="submit" class="btn-primary">Simpan Invoice</button>
                </div>
            </form>

            <button @click="onClose" class="absolute text-gray-600 top-2 right-2 hover:text-black">✕</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { format } from 'date-fns'
import api from '@/libs/utils'

const props = defineProps({
    show: Boolean,
    deedId: Number,
    onClose: Function
})

const emit = defineEmits(['saved'])

const today = format(new Date(), 'yyyy-MM-dd')
const nextWeek = format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')

const invoiceDate = ref(today)
const dueDate = ref(nextWeek)
const transactionAmount = ref(0)
const serviceFeePercentage = ref(2.5)
const additionalCosts = ref([{ name: '', amount: 0 }])
const description = ref('')

const feeAmount = computed(() => (transactionAmount.value * serviceFeePercentage.value) / 100)
const subtotal = computed(() =>
    feeAmount.value + additionalCosts.value.reduce((acc, item) => acc + (item.amount || 0), 0)
)
const taxAmount = computed(() => 10 * subtotal.value / 100)
const totalAmount = computed(() => subtotal.value + taxAmount.value)

const addItem = () => {
    additionalCosts.value.push({ name: '', amount: 0 })
}

const removeItem = (index) => {
    additionalCosts.value.splice(index, 1)
}

const submitInvoice = async () => {
    const filteredExtras = additionalCosts.value.filter(i => i.name && i.amount > 0)

    const payload = {
        deedId: props.deedId,
        invoiceDate: invoiceDate.value,
        dueDate: dueDate.value,
        transactionAmount: transactionAmount.value,
        feePercentage: serviceFeePercentage.value,
        feeAmount: feeAmount.value,
        additionalCosts: filteredExtras,
        subtotal: subtotal.value,
        taxAmount: taxAmount.value,
        totalAmount: totalAmount.value,
        description: description.value
    }

    try {
        console.log(" payload sebelum pengiriman ke endpoint ", payload)
        const res = await api.post('/invoices', payload)
        payload = {
            deedId: props.deedId,
            invoiceDate: null,
            dueDate: null,
            transactionAmount: transactionAmount.value,
            feePercentage: serviceFeePercentage.value,
            feeAmount: feeAmount.value,
            additionalCosts: filteredExtras,
            subtotal: subtotal.value,
            taxAmount: taxAmount.value,
            totalAmount: totalAmount.value,
            description: description.value
        }
        resetForm()
        emit('saved', res.data);
        props.onClose()
    } catch (err) {
        console.error(err)
        alert('Gagal menyimpan invoice.')
    }

    const resetForm = () => {
        invoiceDate.value = null
        dueDate.value = null
        transactionAmount.value = 0
        serviceFeePercentage.value = 0
        feeAmount.value = 0
        additionalCosts.value = []
        subtotal.value = 0
        taxAmount.value = 0
        totalAmount.value = 0
        description.value = ''
    }
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
    @apply px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400;
}
</style>
