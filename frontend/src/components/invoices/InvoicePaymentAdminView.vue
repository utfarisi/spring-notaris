<template>
    <div class="p-6">
        <h1 class="mb-4 text-xl font-bold">Detail Pembayaran Invoice</h1>

        <div v-if="loading" class="py-4 text-center">
            <span
                class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
            <p class="mt-2 text-sm text-gray-500">Memuat daftar janji...</p>
        </div>

        <div class="px-6 py-4 bg-white rounded-lg" v-else>

            <div class="mb-4">
                <div class="flex flex-col">
                    <div class="flex items-start gap-x-2">
                        <p class="w-2/5 font-semibold text-left">Nomor Invoice</p>
                        <p>:</p>
                        <p class="flex-1">{{ invoice?.invoiceNumber }}</p>
                    </div>
                    <div class="flex items-start gap-x-2">
                        <p class="w-2/5 font-semibold text-left">Tanggal</p>
                        <p>:</p>
                        <p class="flex-1">{{ formatDate(invoice?.invoiceDate) }}</p>
                    </div>
                    <div class="flex items-start gap-x-2">
                        <p class="w-2/5 font-semibold text-left">Klien</p>
                        <p>:</p>
                        <p class="flex-1">{{ invoice?.customer?.fullname }}</p>
                    </div>
                    <div class="flex items-start gap-x-2">
                        <p class="w-2/5 font-semibold text-left">Total</p>
                        <p>:</p>
                        <p class="flex-1">{{ formatCurrency(invoice?.totalAmount) }}</p>
                    </div>
                </div>
            </div>


            <div class="p-4 mb-6 bg-gray-100 rounded">
                <p><strong>Metode Pembayaran:</strong>
                    <span class="uppercase">{{ invoice?.paymentMethod || 'Belum dipilih' }}</span>
                </p>

                <template v-if="invoice?.paymentMethod === 'BANK_TRANSFER'">
                    <p><strong>Bank:</strong> {{ invoice.bankCode }}</p>
                    <div class="mt-2">
                        <p class="mb-1 font-medium">Bukti Transfer:</p>
                        <a :href="invoice?.evident" target="_blank">
                            <img :src="backendBaseUrl + '/' + invoice.evident" alt="Bukti Transfer"
                                class="w-64 border rounded" />
                        </a>
                    </div>
                </template>

                <template v-if="invoice?.paymentMethod === 'CASH'">
                    <div class="mt-2 text-sm text-gray-700">
                        <p>Pembayaran akan dilakukan langsung di kantor.</p>
                    </div>
                </template>
            </div>


            <div class="flex items-center justify-between mt-6">
                <div>
                    <p><strong>Status:</strong>
                        <span :class="{
                            'text-green-600 font-bold': invoice.status === 'PAID',
                            'text-red-600 font-bold': invoice.status !== 'PAID'
                        }">
                            {{ invoice.status === 'PAID' ? 'Lunas' : 'Belum Dibayar' }}
                        </span>
                    </p>
                </div>

                <div v-if="invoice.status !== 'PAID' && invoice.paymentMethod">
                    <button @click="markAsPaid" class="btn-primary">Tandai sebagai Lunas</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'
import { useRoute } from 'vue-router'
import { formatDate } from '@/libs/dateUtils'


const backendBaseUrl = ref(import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080');

const route = useRoute()
const invoice = ref({})
const loading = ref(true)

const fetchInvoice = async () => {
    loading.value = true
    try {
        const { data } = await api.get(`/invoices/${route.params.id}/show`)
        invoice.value = data
    }
    catch (e) {

    }
    finally {
        loading.value = false
    }
}

const markAsPaid = async () => {
    if (!confirm('Tandai invoice ini sebagai lunas?')) return
    try {
        await api.post(`invoices/${invoice.value.id}/mark-paid`)
        alert('Status pembayaran diperbarui.')
        fetchInvoice()
    } catch (e) {
        alert('Gagal memperbarui status.')
    }
}

onMounted(() => {
    fetchInvoice()
})

const formatCurrency = val =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
</script>

<style scoped>
@import url('@/style.css');

.btn-primary {
    @apply px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700;
}
</style>
