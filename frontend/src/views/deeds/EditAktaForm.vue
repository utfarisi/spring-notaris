<template>
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">

        <h2 class="text-xl font-bold">Perbaharui Akta</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">

            <div>
                <label class="block font-medium">Nomor</label>
                <input v-model="form.deed_number" type="text" class="form-input mt-1 w-full" placeholder="Nomor" />
                <span if="error.deed_number" class="text-red-600">{{ error.deed_number }}</span>
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
                <span if="error.deed_type" class="text-red-600">{{ error.deed_type }}</span>
            </div>

            <!-- Judul Akta -->
            <div>
                <label class="block font-medium">Judul</label>
                <input v-model="form.title" type="text" class="form-input mt-1 w-full"
                    placeholder="Judul akta (misal: Akta Jual Beli)" />
                <span if="error.title" class="text-red-600">{{ error.title }}</span>
            </div>

            <!-- Tanggal Akta -->
            <div>
                <label class="block font-medium">Tanggal</label>
                <input v-model="form.deed_date" type="date" class="form-input mt-1 w-full" />
                <span if="error.deed_date" class="text-red-600">{{ error.deed_date }}</span>
            </div>

            <div>
                <label class="block font-medium">Klien</label>
                <CustomSelectModal :data="clients" v-model="form.customer_id"></CustomSelectModal>
                <span if="error.customer_id" class="text-red-600">{{ error.customer_id }}</span>
            </div>

            <!-- Deskripsi -->
            <div>
                <label class="block font-medium">Deskripsi</label>
                <textarea v-model="form.description" rows="4" class="form-textarea mt-1 w-full"
                    placeholder="Isi ringkas atau catatan akta..."></textarea>
            </div>

            <!-- Tombol Submit -->
            <div class="text-right">
                <router-link :to="{ name: 'DeedDetail', params: route.params.id }"
                    class="px-4 py-2 rounded m-2 bg-black text-white">Kembali</router-link>
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simpan</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '@/libs/utils'
import { useRoute, useRouter } from 'vue-router'
import CustomSelectModal from '@/components/CustomSelectModal.vue'

const route = useRoute()
const router = useRouter();

const form = ref({
    id: 0,
    deed_number: '',
    deed_type: '',
    title: '',
    description: '',
    deed_date: '',
    customer_id: ''
})

const error = ref({
    deed_number: '',
    deed_type: '',
    title: '',
    description: '',
    deed_date: '',
    customer_id: ''
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

onMounted(async () => {

    try {
        const res = await api.get('/clients/all') // Ganti endpoint sesuai backend kamu
        clients.value = res.data
        console.log(clients.value);
    } catch (err) {
        console.error('Gagal memuat klien', err)
    }

    const res = await api.get(`/deeds/${route.params.id}`)
    const data = res.data;

    form.value = {
        id: data.id,
        deed_number: data.number ?? '',
        customer_id: data.customerId,
        deed_type: data.deedType,
        title: data.title,
        description: data.description,
        deed_date: data.deedDate
    }

})

const handleSubmit = async () => {
    try {
        await api.put(`/deeds/${route.params.id}`, form.value)

        router.push({ name: "akta" })
    } catch (err: any) {
        console.error('Gagal memperbaharui akta:', err)
        if (err.status == 400) {
            error.value = err.response?.data;
            console.log("fields ", error.value);
        }
    }
}
</script>