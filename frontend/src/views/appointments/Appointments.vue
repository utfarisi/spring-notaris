<template>
    <div>
        <h1 class="p-2 mb-4 text-2xl font-bold">Daftar Semua Janji</h1>

        <div v-if="loading" class="py-4 text-center">
            <span
                class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
            <p class="mt-2 text-sm text-gray-500">Memuat data ...</p>
        </div>

        <div class="p-2 space-y-4" v-if="!data.empty > 0">
            <div v-for="appt in data.content" :key="appt.id"
                class="p-4 bg-white border border-gray-300 rounded shadow-sm">
                <div class="flex justify-between">
                    <div>
                        <p class="text-sm text-gray-500">{{ appt.status }}</p>
                        <p class="text-lg font-semibold">{{ appt.appointmentDate }} • {{
                            appt.appointmentTime.substring(0, 5) }} ({{ appt.durationMinute }} menit)</p>
                        <p class="mt-1 text-sm text-gray-600">{{ appt.description }}</p>
                        <p class="mt-2 text-sm">👤 {{ appt.customer.firstName }} {{ appt.customer.lastName }} | 📞 {{
                            appt.customer.phone }}</p>
                    </div>

                    <div class="self-start space-x-2">
                        <button v-if="appt.status === 'PENDING'" @click="cancelAppointment(appt.id)"
                            class="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700">
                            Batalkan
                        </button>
                        <button v-if="isOperator && appt.status === 'PENDING'" @click="confirmAppointment(appt.id)"
                            class="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700">
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2 font-bold text-center bg-white " v-else>
            Belum ada janji dengan klien
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const data = ref([])
const totalElement = ref(0);
const isOperator = true
const loading = ref(false)

const fetchAppointments = async () => {
    loading.value = true
    try {
        const res = await api.get('/appointments')
        data.value = res.data
    }
    catch (e) {
        alert(" error : ", e);
    }
    finally {
        loading.value = false
    }
}

const cancelAppointment = async (id) => {
    if (!confirm('Yakin ingin membatalkan janji ini?')) return

    try {
        await api.patch(`/appointments/${id}/cancel`)
        await fetchAppointments()
    } catch (e) {
        alert('Gagal membatalkan janji.')
    }
}

const confirmAppointment = async (id) => {
    try {
        await api.patch(`/appointments/${id}/confirm`)
        await fetchAppointments()
    } catch (e) {
        alert('Gagal mengonfirmasi janji.')
    }
}

onMounted(fetchAppointments)
</script>
