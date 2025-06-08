<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <div class="max-w-2xl p-6 mx-auto bg-white rounded shadow">
      <div class="p-4">
        <h2 class="mb-2 text-xl">Upload Dokumen</h2>
        <input type="file" @change="onFileChange" />
        <button @click="uploadFile" class="px-4 py-2 mt-2 text-white bg-blue-500 rounded">Upload</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import api from '@/libs/utils'

const file = ref < File | null > (null)
const authStore = useAuthStore()

function onFileChange(event) {
  const target = event.target
  file.value = target.files?.[0] || null
}

async function uploadFile() {
  if (!file.value) return

  const maxSize = 5 * 1024 * 1024 // 5 MB

  if (file.value.size > maxSize) {
    alert("Ukuran file melebihi batas maksimum 5 MB.")
    return
  }

  const formData = new FormData()
  formData.append('file', file.value)

  try {
    const res = await api.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }, { withCredentials: true })

    alert('Upload berhasil')
  } catch (err) {
    console.error(err)
    alert('Upload gagal')
  }
}
</script>
