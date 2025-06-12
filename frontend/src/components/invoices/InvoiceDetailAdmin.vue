<template>
    <div>
        <div class="pt-4 mt-6 border-t">
            <p><strong>Metode:</strong> {{ invoice.paymentMethod }}</p>
            <p v-if="invoice.paymentMethod === 'TRANSFER'">
                Bukti Transfer:
                <a :href="invoice.proofUrl" target="_blank" class="text-blue-600">Lihat File</a>
            </p>

            <button class="mt-4 btn-primary" @click="tandaiLunas">Tandai Lunas</button>
        </div>

    </div>
</template>

<script setup>
import api from 'libs/utils'

const tandaiLunas = async () => {
    await api.post(`/api/invoices/${invoice.id}/mark-paid`)
    alert('Invoice ditandai lunas.')
}

</script>