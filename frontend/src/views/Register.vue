<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-lg p-8 bg-white rounded shadow-md">
      <h2 class="mb-4 text-xl font-bold">Register</h2>
      <form @submit.prevent="register">
        <input v-model="form.username" placeholder="Pengguna" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.password" placeholder="Sandi" type="password" class="w-full p-2 mb-2 border rounded"
          required />
        <input v-model="form.email" placeholder="Email" type="email" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.nip" placeholder="NIK" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.firstname" placeholder="Nama depan" class="w-full p-2 mb-2 border rounded" required />
        <input v-model="form.lastname" placeholder="Nama belakang" class="w-full p-2 mb-2 border rounded" />
        <input v-model="form.phone" placeholder="Telpon" class="w-full p-2 mb-2 border rounded" required />
        <textarea v-model="form.address" placeholder="Alamat" class="w-full p-2 mb-2 border rounded"
          required></textarea>
        <button type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Register</button>
        <span class="block text-center mt-4">
          kembali ke
          <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/libs/utils'; // Pastikan path ini benar dan `api` diekspor dengan benar
import { useRouter } from 'vue-router';

const router = useRouter();

// Deklarasikan form dengan tipe RegisterForm
const form = ref({
  username: '',
  password: '',
  email: '',
  nip: '',
  firstname: '',
  lastname: '',
  phone: '',
  address: ''
});

const register = async () => {
  try {
    // Akses form.value yang sudah bertipe RegisterForm
    await api.post('/auth/register', form.value);
    alert('Registration successful!');
    router.push('/login');
  } catch (err) { // err: any di sini sudah benar jika Anda belum mendefinisikan tipe error yang lebih spesifik
    alert(err.response?.data || 'Registration failed');
  }
};
</script>

<style scoped></style>