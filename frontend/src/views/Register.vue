<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-lg p-8 bg-white rounded shadow-md">
      <h2 class="mb-4 text-xl font-bold">Form Pendaftaran</h2>
      <form @submit.prevent="register">
        <input v-model="form.username" placeholder="Pengguna" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.password" placeholder="Sandi" type="password" class="w-full p-2 mb-2 border rounded"
          required />
        <input v-model="form.confirmPassword" placeholder="Konfirmasi Sandi" type="password"
          class="w-full p-2 mb-2 border rounded" required />

        <input v-model="form.email" placeholder="Email" type="email" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.nip" placeholder="NIK" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.firstname" placeholder="Nama depan" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.lastname" placeholder="Nama belakang" class="w-full p-2 mb-2 border rounded" />
        <input v-model="form.phone" placeholder="Telpon" class="w-full p-2 mb-2 border rounded" required />
        <textarea v-model="form.address" placeholder="Alamat" class="w-full p-2 mb-2 border rounded"
          required></textarea>
        <button type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Daftarkan</button>
        <span class="block mt-4 text-center">
          kembali ke
          <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/libs/utils';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  nip: '',
  firstname: '',
  lastname: '',
  phone: '',
  address: ''
});

const register = async () => {

  if (form.value.password !== form.value.confirmPassword) {
    alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
    return;
  }

  try {

    const payload = { ...form.value };
    //delete payload.confirmPassword;

    await api.post('/auth/register', payload);
    alert('Registrasi berhasil!');
    router.push('/login');
  } catch (err) {

    alert(err.response?.data?.message || err.response?.data || 'Registrasi gagal.');
  }
};
</script>

<style scoped></style>