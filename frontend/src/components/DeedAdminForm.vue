<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">

        <div>
            <label class="block font-medium">Nomor Akta</label>
            <input v-model="form.deed_number" type="text" class="form-input mt-1 w-full" placeholder="Nomor Akta" />
            <span class="text-red-600" v-if="formError.deed_number">{{ formError.deed_number }}</span>
        </div>

        <!-- Tipe Akta -->
        <div>
            <label class="block font-medium">Tipe Akta</label>
            <select v-model="form.deed_type" class="form-select mt-1 w-full">
                <option disabled value="">Pilih tipe akta</option>
                <option v-for="(label, key) in tipeAktaOptions" :key="key" :value="key">
                    {{ label }}
                </option>
            </select>
            <span class="text-red-600" v-if="formError.deed_type">{{ formError.deed_type }}</span>
        </div>

        <!-- Judul Akta -->
        <div>
            <label class="block font-medium">Judul</label>
            <input v-model="form.title" type="text" class="form-input mt-1 w-full"
                placeholder="Judul akta (misal: Akta Jual Beli)" />
            <span class="text-red-600" v-if="formError.title">{{ formError.title }}</span>
        </div>

        <!-- Tanggal Akta -->
        <div>
            <label class="block font-medium">Tanggal</label>
            <input v-model="form.deed_date" type="date" class="form-input mt-1 w-full" />
            <span class="text-red-600" v-if="formError.deed_date">{{ formError.deed_date }}</span>
        </div>

        <div>
            <label class="block font-medium">Klien</label>
            <CustomSelectModal :data="clients" v-model="form.customer_id"></CustomSelectModal>
            <span class="text-red-600" v-if="formError.customer_id">{{ formError.customer_id }}</span>
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

const formError = ref({
    deed_number: '',
    deed_type: '',
    title: '',
    deed_date: '',
    customer_id: '',
    description: ''
})

const tipeAktaOptions: Record<string, string> = {
    JUAL_BELI: 'Jual Beli',
    HAK_MILIK: 'Sertifikat Hak Milik',
    PERJANJIAN: 'Perjanjian',
}

const clients = ref<{ id: number; name: string }[]>([])

const fetchClients = async () => {
    try {
        const res = await api.get('/clients/all') // Ganti endpoint sesuai backend kamu
        clients.value = res.data
    } catch (err) {
        console.error('Gagal memuat klien', err)
    }
}

const handleSubmit = async () => {
    try {
        await api.post('/deeds', form.value)
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
        if (err && err.status === 400) {
            formError.value = err.response?.data
        }
        alert('Terjadi kesalahan saat menyimpan.')
    }
}

onMounted(fetchClients)
</script>
