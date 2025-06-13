<template>
    <div class="p-6 space-y-6">
        <!-- Cards -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card title="Janji Hari Ini" icon="calendar" :value="todayAppointments" />
            <Card title="Akta Diproses" icon="file-text" :value="inProcessDeeds" />
            <Card title="Janji Disetujui" icon="check-circle" :value="approvedAppointments" />
            <Card title="Janji Ditolak" icon="x-circle" :value="rejectedAppointments" />
        </div>

        <!-- Table Janji Hari Ini -->
        <div class="p-4 bg-white rounded shadow">
            <h2 class="mb-4 text-lg font-semibold">Janji Hari Ini</h2>
            <table class="w-full text-left border">
                <thead class="text-sm text-gray-600 bg-gray-100">
                    <tr>
                        <th class="p-2 border">Jam</th>
                        <th class="p-2 border">Klien</th>
                        <th class="p-2 border">Status</th>
                        <th class="p-2 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="appt in todayList" :key="appt.id" class="text-sm">
                        <td class="p-2 border">{{ appt.appointmentTime }}</td>
                        <td class="p-2 border">{{ appt.customer.firstName }}</td>
                        <td class="p-2 border">{{ appt.status }}</td>
                        <td class="p-2 space-x-2 border">
                            <button
                                class="px-2 py-1 text-white bg-green-600 hover:underline rounded-xl">Konfirmasi</button>
                            <button class="px-2 py-1 text-white bg-red-600 hover:underline rounded-xl">Tolak</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Akta Terbaru -->
        <div class="p-4 bg-white rounded shadow">
            <h2 class="mb-4 text-lg font-semibold">Akta Terbaru</h2>
            <ul class="space-y-2 text-sm">
                <li v-for="akta in latestDeeds" :key="akta.id" class="pb-2 border-b">
                    <span class="font-semibold">{{ akta.code }}</span> - {{ akta.customer.firstName }} ({{ akta.status
                    }})
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/CardStat.vue' // komponen kecil buat kartu ringkasan
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const todayAppointments = ref(4)
const inProcessDeeds = ref(7)
const approvedAppointments = ref(24)
const rejectedAppointments = ref(3)

const todayList = ref() // ganti dengan tipe data aslimu
const latestDeeds = ref()



onMounted(async () => {
    const [todayAppointmentRes, statusRes, deedProcessingRes] = await Promise.all([
        api.get("/admin/dashboard/appointments/today"),
        api.get('/admin/dashboard/appointments/status'),
        api.get('/admin/dashboard/deeds/processing')
    ])

    todayList.value = todayAppointmentRes.data
    todayAppointments.value = todayList.value.length
    console.log(" status ", statusRes.data);
    approvedAppointments.value = statusRes.data.confirmed
    rejectedAppointments.value = statusRes.data.rejected
    inProcessDeeds.value = deedProcessingRes.data

})
</script>
