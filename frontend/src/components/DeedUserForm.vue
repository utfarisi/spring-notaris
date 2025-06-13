<template>
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Tipe Akta -->
        <div>
            <label class="block font-medium">Tipe Akta</label>
            <select v-model="form.deed_type" class="w-full mt-1 form-select">
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
            <input v-model="form.title" type="text" class="w-full mt-1 form-input"
                placeholder="Judul akta (misal: Akta Jual Beli)" />
            <span class="text-red-600" v-if="formError.title">{{ formError.title }}</span>
        </div>

        <!-- Tanggal Akta -->
        <div>
            <label class="block font-medium">Tanggal</label>
            <input v-model="form.deed_date" type="date" class="w-full mt-1 form-input" />
            <span class="text-red-600" v-if="formError.deed_date">{{ formError.deed_date }}</span>
        </div>

        <!-- Deskripsi -->
        <div>
            <label class="block font-medium">Deskripsi</label>
            <textarea v-model="form.description" rows="4" class="w-full mt-1 form-textarea"
                placeholder="Isi ringkas atau catatan akta..."></textarea>
        </div>

        <!-- Tombol Submit -->
        <div class="text-right">
            <button type="submit" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Simpan</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/libs/utils'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const user = authStore.user

const form = ref({
    deed_type: '',
    title: '',
    deed_date: '',
    customer_id: user?.customerId,
    description: ''
})

const formError = ref({
    deed_type: '',
    title: '',
    deed_date: '',
    description: ''
})

const tipeAktaOptions = {
    JUAL_BELI: 'Jual Beli',
    HAK_MILIK: 'Sertifikat Hak Milik',
    PERJANJIAN: 'Perjanjian',
}



const handleSubmit = async () => {
    try {
        await api.post('/deeds/byuser', form.value)
        console.log(form.value);
        alert('Akta berhasil disimpan!')

        form.value = {
            deed_type: '',
            title: '',
            deed_date: '',
            customer_id: user?.customerId,
            description: ''
        }

    } catch (err) {
        if (err && err.status === 400) {
            formError.value = err.response?.data
        }
        alert('Terjadi kesalahan saat menyimpan.' + err)
    }
}
</script>
