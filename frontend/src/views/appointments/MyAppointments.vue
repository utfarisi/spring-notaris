<template>
    <div>
        <div class="flex">
            <h1 class="w-4/5 mb-4 text-2xl font-bold">Janji Saya</h1>
            <div class="text-center">
                <router-link to="/appointments/create"
                    class="inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-xl">
                    <span>Buat Janji Baru</span>
                </router-link>
            </div>
        </div>

        <div v-if="loading" class="py-4 text-center">
            <span
                class="inline-block w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
            <p class="mt-2 text-sm text-gray-500">Memuat daftar janji...</p>
        </div>

        <div v-else class="mt-5 rounded-xl">
            <div v-if="appointments.length === 0" class="p-4 text-gray-500 bg-white border border-gray-300 rounded-md ">
                Belum ada
                janji.
            </div>

            <ul v-else class="space-y-4">
                <li v-for="appt in appointments" :key="appt.id" class="p-4 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-semibold text-blue-600">{{ formatDate(appt.appointmentDate) }}</p>
                            <p class="text-gray-700">Pukul {{ appt.appointmentTime }} selama {{ appt.durationMinute }}
                                menit</p>
                            <p class="mt-1 text-sm italic text-gray-500" v-if="appt.description">"{{ appt.description
                            }}"</p>
                        </div>

                        <div class="text-right">
                            <span :class="badgeClass(appt.status)">{{ appt.status }}</span>
                            <div v-if="appt.status === 'PENDING'" class="mt-2">
                                <button @click="cancelAppointment(appt.id)"
                                    class="px-2 py-1 text-sm text-white bg-red-600 border border-red-800 rounded-sm hover:underline">
                                    Batalkan
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <!-- Paginasi -->
            <div class="flex justify-between mt-6">
                <button :disabled="page === 0" @click="page-- && loadAppointments()"
                    class="text-blue-600 hover:underline disabled:text-gray-400">
                    ← Sebelumnya
                </button>
                <button :disabled="lastPage" @click="page++ && loadAppointments()"
                    class="text-blue-600 hover:underline disabled:text-gray-400">
                    Selanjutnya →
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/libs/utils'

const appointments = ref([])
const loading = ref(true)

const page = ref(0)
const size = 10
const lastPage = ref(false)

const loadAppointments = async () => {
    loading.value = true
    try {
        const res = await api.get(`/appointments/my-appointment?page=${page.value}&size=${size}`)
        appointments.value = res.data.content
        lastPage.value = res.data.last
    } catch (e) {
        console.error('Gagal memuat janji', e)
        alert(" Gagal membuat janji")
    } finally {
        loading.value = false
    }
}

const cancelAppointment = async (id) => {
    if (!confirm('Yakin ingin membatalkan janji ini?')) return

    try {
        await api.patch(`/appointments/${id}/cancel`)
        loadAppointments()
    } catch (e) {
        alert('Gagal membatalkan janji.')
    }
}

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })
}

const badgeClass = (status) => {
    return {
        'PENDING': 'bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm',
        'CONFIRMED': 'bg-green-100 text-green-700 px-2 py-1 rounded text-sm',
        'REJECTED': 'bg-red-100 text-red-700 px-2 py-1 rounded text-sm',
    }[status] || 'bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm'
}

onMounted(loadAppointments)
</script>
