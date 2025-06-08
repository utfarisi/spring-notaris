<template>
    <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <h2 class="text-2xl font-semibold mb-4">Profil Pengguna</h2>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Username</label>
            <input v-model="form.username" disabled class="p-2 border border-gray-200 rounded w-full" />
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="form.email" disabled class="p-2 border border-gray-200 rounded w-full" />
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Nama Depan</label>
            <input v-model="form.firstname" disabled class="p-2 border border-gray-200 rounded w-full" />
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Nama Belakang</label>
            <input v-model="form.lastname" disabled class="p-2 border border-gray-200 rounded w-full" />
        </div>

        <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-700">Alamat</label>
            <textarea v-model="form.address" cols="60" rows="6" class="px-2 py-3 border border-gray-200 rounded-xl"
                disabled></textarea>
        </div>

        <hr class="my-6" />

        <h3 class="text-xl font-semibold mb-4">Ubah Password</h3>
        <div v-if="success" class="mb-4 text-green-600">Password berhasil diubah.</div>
        <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password Lama</label>
            <input v-model="password.oldPassword" type="password"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password Baru</label>
            <input v-model="password.newPassword" type="password"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Konfirmasi Password Baru</label>
            <input v-model="password.confirmPassword" type="password"
                class="mt-1 w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <button @click="changePassword" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Simpan
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import api from '@/libs/utils'

const authStore = useAuthStore()
const user = authStore.user
const form = ref({ username: user.username, email: user.email, firstname: user.firstname, lastname: user.lastname, address: user.address })

const password = ref({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

const success = ref(false)
const error = ref('')

const changePassword = async () => {
    success.value = false
    error.value = ''

    if (password.value.newPassword !== password.value.confirmPassword) {
        error.value = 'Konfirmasi password tidak cocok.'
        return
    }

    try {
        await api.post('/auth/change-password', {
            oldPassword: password.value.oldPassword,
            newPassword: password.value.newPassword
        }, { withCredentials: true })

        success.value = true
        password.value.oldPassword = ''
        password.value.newPassword = ''
        password.value.confirmPassword = ''
    } catch (err) {
        error.value = err.response?.data || 'Gagal mengganti password.'
    }
}
</script>
