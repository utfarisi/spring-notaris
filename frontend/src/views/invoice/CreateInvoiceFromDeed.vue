<template>
    <div class="max-w-2xl p-6 mx-auto bg-white rounded shadow">
        <h2 class="mb-4 text-xl font-semibold">Buat Invoice</h2>

        <!-- Nominal Transaksi -->
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Nilai Transaksi (Rp)</label>
            <input type="number" v-model.number="transactionAmount" class="w-full p-2 border rounded" />
        </div>

        <!-- Persentase Fee -->
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Persentase Fee (%)</label>
            <input type="number" v-model.number="feePercentage" class="w-full p-2 border rounded" step="0.5" />
        </div>

        <!-- Biaya Tambahan -->
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Biaya Tambahan</label>
            <div v-for="(item, index) in additionalCosts" :key="index" class="flex gap-2 mb-2">
                <input v-model="item.name" placeholder="Nama Biaya (misal: Cetak Sertifikat)"
                    class="flex-1 p-2 border rounded" />
                <input type="number" v-model.number="item.amount" placeholder="Jumlah"
                    class="w-32 p-2 border rounded" />
                <button @click="removeAdditionalCost(index)" class="text-red-600">✕</button>
            </div>
            <button @click="addAdditionalCost" class="mt-1 text-sm text-blue-600">+ Tambah Biaya</button>
        </div>

        <!-- Deskripsi -->
        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Deskripsi (opsional)</label>
            <textarea v-model="description" class="w-full p-2 border rounded" rows="3"></textarea>
        </div>

        <!-- Ringkasan -->
        <div class="pt-4 space-y-1 text-sm text-gray-700 border-t">
            <div>Fee Notaris: Rp {{ formatCurrency(feeAmount) }}</div>
            <div>Subtotal: Rp {{ formatCurrency(subtotal) }}</div>
            <div>Total: Rp {{ formatCurrency(totalAmount) }}</div>
        </div>

        <!-- Submit -->
        <div class="mt-6 text-right">
            <button @click="submitInvoice" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                Simpan Invoice
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
// const props = defineProps < {
//     deedId
// } >

const route = useRoute()
const transactionAmount = ref(0)
const feePercentage = ref(2.5)
const additionalCosts = ref([])
const description = ref('')

const feeAmount = computed(() => (transactionAmount.value * feePercentage.value) / 100)
const subtotal = computed(() => feeAmount.value + additionalCosts.value.reduce((sum, cost) => sum + cost.amount, 0))
const totalAmount = computed(() => subtotal.value)

const formatCurrency = (amount) =>
    amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })

const addAdditionalCost = () => {
    additionalCosts.value.push({ name: '', amount: 0 })
}

const removeAdditionalCost = (index) => {
    additionalCosts.value.splice(index, 1)
}

const submitInvoice = async () => {
    const payload = {
        deedId: route.params.id,
        transactionAmount: transactionAmount.value,
        feePercentage: feePercentage.value,
        feeAmount: feeAmount.value,
        additionalCosts: additionalCosts.value,
        subtotal: subtotal.value,
        totalAmount: totalAmount.value,
        description: description.value,
    }

    try {
        // ganti dengan API sesuai implementasi backend kamu
        await fetch('/api/invoices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        alert('Invoice berhasil dibuat.')
    } catch (err) {
        console.error('Gagal membuat invoice:', err)
        alert('Terjadi kesalahan saat menyimpan invoice.')
    }
}
</script>
