<template>
  <div class="max-w-md p-4 mx-auto">
    <h2 class="mb-4 text-xl font-bold">Register</h2>
    <form @submit.prevent="register">
      <input v-model="form.username" placeholder="Username" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.password" placeholder="Password" type="password" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.email" placeholder="Email" type="email" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.nip" placeholder="NIP" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.firstname" placeholder="First Name" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.lastname" placeholder="Last Name" class="w-full p-2 mb-2 border rounded" required />
      <input v-model="form.phone" placeholder="Phone" class="w-full p-2 mb-2 border rounded" required />
      <textarea v-model="form.address" placeholder="Address" class="w-full p-2 mb-2 border rounded" required></textarea>
      <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '@/libs/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  username: '',
  password: '',
  email:'',
  nip: '',
  firstname: '',
  lastname: '',
  phone: '',
  address: ''
})

const register = async () => {
  try {
    await api.post('/auth/register', form.value)
    alert('Registration successful!')
    router.push('/login')
  } catch (err: any) {
    alert(err.response?.data || 'Registration failed')
  }
}
</script>

<style scoped>
.input {
  @apply w-full  border rounded mb-2;
}
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
</style>
