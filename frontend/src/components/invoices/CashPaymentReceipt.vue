<template>
    <div ref="printArea" class="max-w-xl p-8 mx-auto text-black bg-white shadow">
        <div class="mb-6 text-center">
            <h1 class="text-2xl font-bold">TANDA TERIMA PEMBAYARAN TUNAI</h1>
            <p class="text-gray-700">Harap dibawa saat melakukan pembayaran di kantor</p>
        </div>

        <div class="mb-4">
            <p><strong>Nomor Invoice:</strong> {{ invoice.invoiceNumber }}</p>
            <p><strong>Tanggal Invoice:</strong> {{ formatDate(invoice.invoiceDate) }}</p>
            <p><strong>Jatuh Tempo:</strong> {{ formatDate(invoice.dueDate) }}</p>
        </div>

        <div class="mb-4">
            <p><strong>Nama Klien:</strong> {{ invoice.customer.fullname }}</p>
            <p><strong>Transaksi:</strong> {{ invoice.description }}</p>
        </div>

        <div class="pt-4 mb-4 border-t">
            <p><strong>Total yang harus dibayar:</strong> Rp {{ formatCurrency(invoice.totalAmount) }}</p>
        </div>

        <div class="p-4 text-sm text-gray-700 bg-gray-100 rounded">
            <p><strong>Silakan lakukan pembayaran tunai ke alamat berikut:</strong></p>
            <p>Kantor Notaris ABC</p>
            <p>Jl. Mawar No. 123, BSD City, Tangerang Selatan</p>
            <p>Jam Operasional: Senin - Jumat, 09.00 - 17.00 WIB</p>
            <p>Telp: 021-12345678</p>
        </div>

        <div class="mt-8 text-center">
            <button @click="print" class="btn-primary no-print">Cetak Tanda Terima</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { format } from 'date-fns'

const props = defineProps({
    invoice: {
        type: Object,
        required: true
    }
})

const printArea = ref(null)

const print = () => {
    const content = printArea.value.innerHTML
    const win = window.open('', '', 'width=800,height=600')
    win.document.write(`
    <html>
      <head>
        <title>Cetak Tanda Terima</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          .text-center { text-align: center; }
          .border-t { border-top: 1px solid #ccc; margin-top: 20px; padding-top: 10px; }
          @media print {
            .no-print {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>${content}</body>
    </html>
  `)
    win.document.close()
    win.focus()
    win.print()
    win.close()
}

const formatDate = (date) => format(new Date(date), 'dd MMMM yyyy', { locale: undefined })
const formatCurrency = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)

</script>

<style scoped>
@import url('@/style.css');

.btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
</style>
