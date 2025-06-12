<template>
    <div class="invoice-container" v-if="invoiceData">
        <div class="invoice-header">
            <img src="/path/to/your/logo.png" alt="Kantor Notaris Logo" class="notary-logo" />
            <h1>KANTOR NOTARIS [NAMA NOTARIS ANDA]</h1>
            <p>Alamat Kantor Anda, Telp: [Nomor Telepon Anda], Email: [Email Anda]</p>
            <hr />
            <h2>INVOICE</h2>
        </div>

        <div class="invoice-details">
            <div class="invoice-info">
                <p><strong>Nomor Invoice:</strong> {{ invoiceData.invoiceNumber }}</p>
                <p><strong>Tanggal Invoice:</strong> {{ formatDate(invoiceData.invoiceDate) }}</p>
                <p><strong>Tanggal Jatuh Tempo:</strong> {{ formatDate(invoiceData.dueDate) }}</p>
            </div>
            <div class="client-info">
                <p><strong>Kepada Yth.:</strong> {{ invoiceData.client.name }}</p>
                <p><strong>Alamat:</strong> {{ invoiceData.client.address }}</p>
                <p><strong>Telepon:</strong> {{ invoiceData.client.phone }}</p>
                <p><strong>Email:</strong> {{ invoiceData.client.email }}</p>
            </div>
        </div>

        <h3>Detail Akta & Layanan</h3>
        <table class="invoice-items">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Deskripsi Layanan</th>
                    <th>Nomor Akta</th>
                    <th>Tanggal Akta</th>
                    <th>Jumlah (Rp)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in invoiceData.items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.description }} <span v-if="item.additionalInfo">({{ item.additionalInfo }})</span></td>
                    <td>{{ item.actNumber }}</td>
                    <td>{{ item.actDate ? formatDate(item.actDate) : '-' }}</td>
                    <td>{{ formatRupiah(item.amount) }}</td>
                </tr>
            </tbody>
        </table>

        <div class="invoice-summary">
            <p><strong>Subtotal:</strong> {{ formatRupiah(invoiceData.subtotal) }}</p>
            <p><strong>Pajak:</strong> {{ formatRupiah(invoiceData.taxAmount) }}</p>
            <p><strong>Diskon:</strong> {{ formatRupiah(invoiceData.discountAmount) }}</p>
            <p class="total"><strong>TOTAL JUMLAH YANG HARUS DIBAYAR: {{ formatRupiah(invoiceData.totalAmount)
                    }}</strong></p>
        </div>

        <div class="payment-details">
            <h3>Detail Pembayaran</h3>
            <p><strong>Metode Pembayaran:</strong> {{ invoiceData.paymentMethod }}</p>
            <p><strong>Nama Bank:</strong> {{ invoiceData.bankName }}</p>
            <p><strong>Nomor Rekening:</strong> {{ invoiceData.accountNumber }}</p>
            <p><strong>Atas Nama:</strong> {{ invoiceData.accountHolderName }}</p>
            <p class="notes">{{ invoiceData.notes }}</p>
        </div>

        <div class="invoice-footer">
            <p>Terima kasih atas kepercayaan Anda.</p>
        </div>

        <div class="action-buttons">
            <button @click="downloadPdf">Unduh PDF Invoice</button>
            <button @click="$emit('close')">Tutup</button>
        </div>
    </div>
    <div v-else>
        Memuat data invoice...
    </div>
</template>

<script>
import api from '@/libs/utils';

export default {
    props: {
        aktaId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            invoiceData: null,
            error: null
        };
    },
    mounted() {
        this.fetchInvoiceData();
    },
    methods: {
        async fetchInvoiceData() {
            try {
                const response = await api.get(`/api/invoices/${this.aktaId}`);
                this.invoiceData = response.data;
            } catch (error) {
                this.error = 'Gagal memuat data invoice. Silakan coba lagi.';
                console.error('Error fetching invoice data:', error);
            }
        },
        async downloadPdf() {
            try {
                const response = await axios.get(`/api/invoices/pdf/${this.aktaId}`, {
                    responseType: 'blob' // Penting: respons adalah binary data (PDF)
                });

                // Membuat URL objek dari blob dan mengunduhnya
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `Invoice_Akta_${this.aktaId}.pdf`); // Nama file yang akan diunduh
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url); // Membersihkan URL objek
            } catch (error) {
                console.error('Error downloading PDF:', error);
                alert('Gagal mengunduh PDF invoice.');
            }
        },
        formatDate(dateString) {
            if (!dateString) return '-';
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        },
        formatRupiah(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        }
    }
};
</script>

<style scoped>
/* CSS dasar untuk pratinjau invoice */
.invoice-container {
    font-family: Arial, sans-serif;
    padding: 30px;
    max-width: 800px;
    margin: 20px auto;
    border: 1px solid #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.invoice-header,
.invoice-footer {
    text-align: center;
    margin-bottom: 20px;
}

.notary-logo {
    max-width: 150px;
    margin-bottom: 10px;
}

h1,
h2,
h3 {
    color: #333;
}

hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
}

.invoice-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.invoice-info,
.client-info {
    width: 48%;
}

.invoice-items {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
}

.invoice-items th,
.invoice-items td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.invoice-items th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.invoice-summary {
    text-align: right;
    margin-bottom: 30px;
}

.invoice-summary p {
    margin: 5px 0;
}

.invoice-summary .total {
    font-size: 1.2em;
    color: #000;
    font-weight: bold;
}

.payment-details p {
    margin: 5px 0;
}

.notes {
    font-style: italic;
    margin-top: 15px;
    border-top: 1px dashed #eee;
    padding-top: 10px;
}

.action-buttons {
    text-align: center;
    margin-top: 30px;
}

.action-buttons button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

.action-buttons button:first-child {
    background-color: #4CAF50;
    color: white;
}

.action-buttons button:last-child {
    background-color: #f44336;
    color: white;
}
</style>