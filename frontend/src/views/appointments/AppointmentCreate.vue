<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Buat Janji dengan Notaris</h2>

        <div class="space-y-3 bg-white rounded-md shadow p-6">

            <div class="p-2 mt-5 ">
                <label class="block font-medium">Durasi Janji (menit)</label>
                <select v-model="form.durationMinute" class="border border-gray-300 rounded-lg  form-select w-full p-2">
                    <option :value="30">30 menit</option>
                    <option :value="60">1 jam</option>
                    <option :value="90">1.5 jam</option>
                </select>
            </div>

            <div class=" p-2">
                <label class="block font-medium">Tanggal Janji</label>
                <input v-model="form.appointmentDate" type="date"
                    class="border border-gray-300 rounded-lg  form-select w-full p-2 form-input w-full" />
            </div>

            <div class=" p-2">
                <label class="block font-medium">Waktu Janji</label>
                <select v-model="form.appointmentTime"
                    class="border border-gray-300 rounded-lg  form-select w-full p-2 form-input w-full">
                    <option disabled value="">Pilih waktu</option>
                    <option v-for="time in availableTimes" :key="time" :value="time">
                        {{ time }}
                    </option>
                </select>
            </div>

            <!-- Pilihan Waktu Janji -->
            <div class=" p-2">
                <label class="block font-medium mb-1">Pilih Waktu Janji</label>

                <div v-if="loadingTimes" class="border border-gray-300 text-center py-4">
                    <span
                        class="animate-spin rounded-full h-6 w-6 border-4 border-blue-400 border-t-transparent inline-block"></span>
                    <p class="text-sm text-gray-500 mt-2">Memuat waktu tersedia...</p>
                </div>

                <div v-else-if="availableTimes.length === 0" class="text-sm text-red-500">
                    Semua waktu janji pada tanggal ini sudah terisi.
                </div>

                <div v-else class="grid grid-cols-3 gap-2">
                    <button v-for="time in availableTimes" :key="time" type="button"
                        @click="form.appointmentTime = time" :class="[
                            'px-4 py-2 rounded border',
                            form.appointmentTime === time ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-100'
                        ]">
                        {{ time }}
                    </button>
                </div>
            </div>


            <div class=" p-2">
                <label class="block font-medium">Keterangan</label>
                <textarea v-model="form.description" class="form-textarea w-full border border-gray-300" rows="3" />
            </div>

            <div class="text-right mt-6">
                <button type="button" @click="submitAppointment"
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    :disabled="!form.appointmentDate || !form.appointmentTime">
                    Simpan Janji
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import api from '@/libs/utils'
import { useAuthStore } from '@/stores/authStore'


const availableTimes = ref([])
const loadingTimes = ref(false)
const authStore = useAuthStore();
const user = authStore.user

console.log(" user id ", user?.id);

const form = ref({
    userId: user?.id,
    appointmentDate: '',
    appointmentTime: '',
    durationMinute: 30,
    description: ''
})

watch(
    [() => form.value.appointmentDate, () => form.value.durationMinute],
    async ([newDate, newDuration]) => {
        form.value.appointmentTime = ''
        if (!newDate || !newDuration) return

        loadingTimes.value = true
        try {
            const res = await api.get('/appointments/available-times', {
                params: {
                    date: newDate,
                    duration: newDuration
                }
            })

            availableTimes.value = res.data.map((timeStr) => timeStr.substring(0, 5))
        } catch (e) {
            console.error('Gagal mengambil waktu janji', e)
            availableTimes.value = []
        } finally {
            loadingTimes.value = false
        }
    }
)


const submitAppointment = async () => {

    if (!form.value.appointmentDate || !form.value.appointmentTime) {
        alert('Harap pilih tanggal dan waktu janji.')
        return
    }

    try {
        console.log(" id ", user?.id);
        await api.post('/appointments', form.value)

        alert('Janji berhasil disimpan!')
        // Redirect ke halaman konfirmasi, detail, atau kosongkan form
        form.value = { userId: user.id, appointmentDate: '', appointmentTime: '', description: '', durationMinute: 30 }
        availableTimes.value = []
    } catch (err) {
        if (err.response?.status === 409) {
            alert('Waktu yang dipilih sudah terisi. Silakan pilih waktu lain.')
        } else {
            alert('Gagal menyimpan janji. Coba lagi nanti.')
            console.error(err)
        }
    }
}
</script>
