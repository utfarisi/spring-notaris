<template>
    <form @submit.prevent="submitStatus" class="space-y-4 bg-white">
        <select v-model="form.status" class="w-full border input ">
            <option disabled value="">Pilih Status</option>
            <option v-for="(label, key) in statusOptions" :key="key" :value="key">{{ label }}</option>
        </select>
        <textarea v-model="form.note" placeholder="Catatan..." class="w-full p-2 border rounded-md textarea" />
        <button type="submit" class="p-2 text-white bg-blue-800 rounded-md btn btn-primary">Simpan Status</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/libs/utils'

const props = defineProps(
    { deedId: number }
)

const form = ref({
    status: '',
    note: ''
})

const statusOptions = {
    DRAFT: 'Draft',
    IN_PROGRESS: 'Lagi Diproses',
    WAITING_SIGNATURE: 'Menunggu Tanda Tangan',
    COMPLETED: 'Selesai',
    REJECTED: 'Ditolak'
}

const submitStatus = async () => {
    try {
        await api.put(`/deeds/${props.deedId}/status`, form.value)
        alert('Status berhasil diperbarui')
        form.value.status = ''
        form.value.note = ''
    } catch (err) {
        console.log(err);
        alert('Gagal memperbarui status')
    }
}
</script>
