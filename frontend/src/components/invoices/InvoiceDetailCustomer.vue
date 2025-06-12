<template>
    <div>

        <div class="pt-4 mt-4 border-t">
            <label class="font-semibold">Pilih Metode Pembayaran:</label>
            <select v-model="paymentMethod" class="w-full p-2 mt-1 border rounded">
                <option value="CASH">Bayar Tunai di Kantor</option>
                <option value="TRANSFER">Transfer Bank</option>
            </select>

            <div v-if="paymentMethod === 'TRANSFER'" class="mt-4">
                <p><strong>Transfer ke:</strong> BCA 123456789 a/n PT Notaris Hebat</p>
                <p><strong>Jumlah:</strong> Rp{{ invoice.totalAmount.toLocaleString() }}</p>

                <label class="block mt-2">Upload Bukti Transfer:</label>
                <input type="file" @change="handleUpload" />
            </div>

            <button class="mt-4 btn-primary" @click="submitPayment">Kirim Pembayaran</button>
        </div>

    </div>
</template>
<script setup>
const paymentMethod = ref('CASH')
const buktiTransfer = ref(null)

const handleUpload = (e) => {
    buktiTransfer.value = e.target.files[0]
}

const submitPayment = async () => {
    const formData = new FormData()
    formData.append('invoiceId', props.invoice.id)
    formData.append('method', paymentMethod.value)
    if (paymentMethod.value === 'TRANSFER') {
        formData.append('proof', buktiTransfer.value)
    }

    await axios.post('/api/payments/manual', formData)
    alert('Pembayaran Anda sedang diproses.')
}

</script>