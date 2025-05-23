<template>
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">

        <h2 class="text-xl font-bold">Tambah Akta</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">

            <!-- Tipe Akta -->
            <div>
                <label class="block font-medium">Tipe Akta</label>
                <select v-model="form.deed_type" class="form-select mt-1 w-full">
                    <option disabled value="">Pilih tipe akta</option>
                    <option v-for="(label, key) in tipeAktaOptions" :key="key" :value="key">
                        {{ label }}
                    </option>
                </select>
            </div>

            <!-- Judul Akta -->
            <div>
                <label class="block font-medium">Judul</label>
                <input v-model="form.title" type="text" class="form-input mt-1 w-full"
                    placeholder="Judul akta (misal: Akta Jual Beli)" />
            </div>

            <!-- Tanggal Akta -->
            <div>
                <label class="block font-medium">Tanggal</label>
                <input v-model="form.deed_date" type="date" class="form-input mt-1 w-full" />
            </div>

            <div>
                <label class="block font-medium">Klien</label>
                <CustomSelectModal :data="clients" v-model="form.customer_id"></CustomSelectModal>
            </div>

            <!-- Deskripsi -->
            <div>
                <label class="block font-medium">Deskripsi</label>
                <textarea v-model="form.description" rows="4" class="form-textarea mt-1 w-full"
                    placeholder="Isi ringkas atau catatan akta..."></textarea>
            </div>

            <!-- Tombol Submit -->
            <div class="text-right">
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simpan</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'
import CustomSelectModal from '@/components/CustomSelectModal.vue'

const form = ref({
    deed_number: '',
    deed_type: '',
    title: '',
    deed_date: '',
    customer_id: '',
    description: ''
})

const tipeAktaOptions: Record<string, string> = {
    JUAL_BELI: 'Jual Beli',
    HIBAH: 'Hibah',
    PERJANJIAN: 'Perjanjian',
    WASIAT: 'Wasiat',
    PENDIRIAN_PT: 'Pendirian PT',
    PERUBAHAN_ANGGARAN: 'Perubahan Anggaran Dasar',
    KETERANGAN_WARIS: 'Keterangan Waris'
}

const clients = ref<{ id: number; name: string }[]>([])

const fetchClients = async () => {
    try {
        const res = await api.get('/clients/all') // Ganti endpoint sesuai backend kamu
        clients.value = res.data
        console.log(clients.value);
    } catch (err) {
        console.error('Gagal memuat klien', err)
    }
}

const handleSubmit = async () => {
    try {
        await api.post('/deeds', form.value)
        console.log(form.value);
        alert('Akta berhasil disimpan!')

        form.value = {
            deed_number: '',
            deed_type: '',
            title: '',
            deed_date: '',
            customer_id: '',
            description: ''
        }

    } catch (err: any) {
        console.error('Gagal menyimpan akta:', err)
        alert('Terjadi kesalahan saat menyimpan.')
    }
}

onMounted(fetchClients)
</script>
