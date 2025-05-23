<template>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow rounded">
        <h2 class="text-xl font-bold mb-4">Janji Saya</h2>

        <div v-if="loading" class="text-center py-4">
            <span
                class="animate-spin h-6 w-6 border-4 border-blue-400 border-t-transparent rounded-full inline-block"></span>
            <p class="text-sm text-gray-500 mt-2">Memuat daftar janji...</p>
        </div>

        <div v-else-if="appointments.length === 0" class="text-gray-500">Belum ada janji.</div>

        <ul v-else class="space-y-4">
            <li v-for="appt in appointments" :key="appt.id" class="border rounded p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="font-semibold text-blue-600">{{ formatDate(appt.appointmentDate) }}</p>
                        <p class="text-gray-700">Pukul {{ appt.appointmentTime }} selama {{ appt.durationMinute }} menit
                        </p>
                        <p class="text-sm text-gray-500 mt-1 italic" v-if="appt.description">"{{ appt.description }}"
                        </p>
                    </div>
                    <span :class="badgeClass(appt.status)">{{ appt.status }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '@/libs/utils'

const appointments = ref([])
const loading = ref(true)

onMounted(async () => {
    try {
        const res = await api.get('/appointments/my-appointment')
        appointments.value = res.data.content
    } catch (e) {
        console.error('Gagal memuat janji', e)
    } finally {
        loading.value = false
    }
})

const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
}

const badgeClass = (status: string) => {
    return {
        'PENDING': 'bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm',
        'APPROVED': 'bg-green-100 text-green-700 px-2 py-1 rounded text-sm',
        'REJECTED': 'bg-red-100 text-red-700 px-2 py-1 rounded text-sm',
    }[status] || 'bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm'
}
</script>
