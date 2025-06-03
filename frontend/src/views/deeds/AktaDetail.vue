<template>
    <div>

        <div class="flex gap-3 items-center mb-4">
            <h2 class="text-2xl font-semibold w-10/12">Detail Akta</h2>

            <router-link v-if="deed?.deedStatus === 'DRAFT' && authStore.isUser"
                :to="{ name: 'EditAktaForm', params: route.params.id }"
                class="bg-blue-400 px-4 py-2 rounded-md text-white text-sm">
                Edit
            </router-link>

            <router-link v-if="authStore.isAdmin" :to="`/operator/deeds/${route.params.id}/review-documents`"
                class="bg-green-500 px-4 py-2 rounded-md text-white text-sm">
                Verifikasi Dokumen
            </router-link>
        </div>


        <div class="gap-8 flex bg-white px-6 py-4 rounded-lg">
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
                        <p class="px-2 py-1 bg-green-800 rounded-md max-w-min text-white font-bold text-xs">
                            {{ deed.deedStatus }}
                        </p>
                    </div>
                </div>

                <div class="px-4 py-2 border border-1 border-gray-200 mr-3" v-if="authStore.isAdmin">
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
                        class="w-full border p-1 mb-2 rounded"></textarea>

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
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/libs/utils'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const route = useRoute()
const deed = ref<any>(null)
const selectedStatus = ref('')
const note = ref('')
const statusSteps = ['DRAFT', 'IN_PROGRESS', 'WAITING_SIGNATURE', 'COMPLETED', 'REJECTED']

const documents = ref<any[]>([])

const allDocumentsApproved = computed(() => {
    documents.value.length > 0 && documents.value.every(doc => doc.status === 'APPROVED')
})

const fetchDetail = async () => {
    const [detailRes, docRes] = await Promise.all([
        api.get(`/deeds/${route.params.id}/status-history`),
        api.get(`/deeds/${route.params.id}/documents`)
    ])

    deed.value = detailRes.data
    documents.value = docRes.data
    selectedStatus.value = deed.value.current_status
}

const selectStatus = (status: string) => {
    selectedStatus.value = status
}

const backButton = () => {

}

const submitStatus = async () => {
    if (!selectedStatus.value) return alert('Pilih status terlebih dahulu')

    // if (!allDocumentsApproved.value) {
    //     return alert('Semua dokumen harus disetujui sebelum mengubah status.')
    // }

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
