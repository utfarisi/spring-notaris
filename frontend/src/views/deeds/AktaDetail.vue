<template>
    <div class="ml-65 max-w-8xl mx-auto p-6 bg-white rounded shadow">

        <div class="flex gap-5">
            <h2 class="text-2xl font-semibold mb-4 w-1/3">Detail Akta</h2>
            <router-link :to="{ name: 'EditAktaForm', params: route.params.id }"
                class="bg-blue-400 p-2 rounded-md text-white">Edit</router-link>
        </div>

        <div class="gap-8 flex">
            <div class="w-2/3 border-e-2 border-gray-300  ">
                <div v-if="deed" class="mb-6">
                    <div class="grid grid-cols-[auto_auto_1fr] gap-y-3 gap-x-2">
                        <p class="font-semibold text-left">Nomor Akta</p>
                        <p>:</p>
                        <p>{{ deed.number }}</p>

                        <p class="font-semibold text-left">Judul</p>
                        <p>:</p>
                        <p>{{ deed.title }}</p>

                        <p class="font-semibold text-left">Jenis</p>
                        <p>:</p>
                        <p>{{ deed.deedType }}</p>

                        <p class="font-semibold text-left">Deskripsi</p>
                        <p>:</p>
                        <p>{{ deed.description }}</p>

                        <p class="font-semibold text-left">Tanggal</p>
                        <p>:</p>
                        <p>{{ deed.deedDate }}</p>

                        <p class="font-semibold text-left">Status Saat Ini</p>
                        <p>:</p>
                        <p>{{ deed.deedStatus }}</p>
                    </div>
                </div>

                <div class="pr-6">
                    <h3 class="text-lg font-semibold mb-2">Perbarui Status</h3>

                    <div class="flex flex-wrap items-center gap-3 mb-4">
                        <button v-for="step in statusSteps" :key="step" @click="selectStatus(step)" :class="[
                            'px-4 py-2 rounded',
                            selectedStatus === step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                        ]">
                            {{ step }}
                        </button>
                    </div>

                    <textarea v-model="note" placeholder="Catatan perubahan status"
                        class="w-full border p-2 mb-2 rounded"></textarea>

                    <button @click="submitStatus" class="bg-green-600 text-white px-4 py-2 rounded">
                        Simpan Perubahan Status
                    </button>
                </div>
            </div>


            <div class="pl-3 w-1/3">
                <h3 class="text-xl font-medium mb-2">Riwayat Status</h3>

                <ol class="relative border-s border-gray-200 dark:border-gray-700">

                    <li v-for="(status, index) in deed?.statusHistories" :key="index" class="ms-6 pb-4">
                        <span
                            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ status.status }}</h3>
                        <time class="block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300">{{
                            new Date(status.updatedAt).toLocaleString() }}</time>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ status.note }}</p>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/libs/utils'

const route = useRoute()
const deed = ref<any>(null)
const selectedStatus = ref('')
const note = ref('')
const statusSteps = ['DRAFT', 'IN_PROGRESS', 'WAITING_SIGNATURE', 'COMPLETED', 'REJECTED']

const fetchDetail = async () => {
    const res = await api.get(`/deeds/${route.params.id}/status-history`)
    deed.value = res.data
    selectedStatus.value = deed.value.current_status
}

const selectStatus = (status: string) => {
    selectedStatus.value = status
}


const submitStatus = async () => {
    if (!selectedStatus.value) return alert('Pilih status terlebih dahulu')

    await api.put(`/deeds/${route.params.id}/status`, {
        status: selectedStatus.value,
        note: note.value
    }, { withCredentials: true })

    alert('Status berhasil diperbarui')
    fetchDetail()
    note.value = ''
}

onMounted(fetchDetail)
</script>
