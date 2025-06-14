<template>
    <div class="p-4 space-y-2 text-sm border border-yellow-300 rounded bg-yellow-50">
        <h3 class="text-base font-semibold text-yellow-800">Pembayaran Tunai</h3>
        <p>Silakan lakukan pembayaran tunai ke kantor berikut:</p>
        <ul class="space-y-1 text-gray-700">
            <li><strong>Nama Kantor:</strong> Notaris ABC</li>
            <li><strong>Alamat:</strong> Jl. Mawar No. 123, BSD City, Tangsel</li>
            <li><strong>Jam:</strong> Senin - Jumat, 09.00 - 17.00 WIB</li>
            <li><strong>Telp:</strong> (021) 12345678</li>
        </ul>

        <div class="mt-4 max-h-[200px] overflow-y-auto border-t pt-3">
            <CashPaymentReceipt :invoice="invoice" />
        </div>
    </div>
</template>

<script setup>
import CashPaymentReceipt from '@/components/invoices/CashPaymentReceipt.vue'

const props = defineProps({
    invoice: {
        type: Object,
        required: true
    }
})

// HAPUS emit('paid') dan fungsi konfirmasiBayar
// const emit = defineEmits(['paid'])
// const konfirmasiBayar = async () => { ... }
</script>

<style scoped>
@import url('@/style.css');

.btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
</style>