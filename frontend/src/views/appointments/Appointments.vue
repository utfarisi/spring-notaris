<template>
    <div>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4">Daftar Semua Janji</h1>
        </div>

        <div class="space-y-4" v-if="totalElement > 0">
            <div v-for="appt in appointments" :key="appt.id" class="p-4 border rounded shadow-sm bg-white">
                <div class="flex justify-between">
                    <div>
                        <p class="text-sm text-gray-500">{{ appt.status }}</p>
                        <p class="text-lg font-semibold">{{ appt.appointmentDate }} • {{
                            appt.appointmentTime.substring(0, 5) }} ({{ appt.durationMinute }} menit)</p>
                        <p class="text-sm text-gray-600 mt-1">{{ appt.description }}</p>
                        <p class="text-sm mt-2">👤 {{ appt.customer.firstName }} {{ appt.customer.lastName }} | 📞 {{
                            appt.customer.phone }}</p>
                    </div>

                    <div class="space-x-2 self-start">
                        <button v-if="appt.status === 'PENDING'" @click="cancelAppointment(appt.id)"
                            class="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                            Batalkan
                        </button>
                        <button v-if="isOperator && appt.status === 'PENDING'" @click="confirmAppointment(appt.id)"
                            class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white p-2 font-bold text-center " v-else>
            Belum ada janji dengan klien
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const appointments = ref([])
const totalElement = ref(0);
const isOperator = true // atau ambil dari userStore, tergantung autentikasi kamu

const fetchAppointments = async () => {
    const res = await api.get('/appointments')
    appointments.value = res.data.content
    totalElement.value = res.data.totalElements
    console.log(" res ", res);
    console.log(res?.totalElements);
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
