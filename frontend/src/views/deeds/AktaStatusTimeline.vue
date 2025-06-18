<template>
    <div class="space-y-4 ml-65">
        <div class="w-10/12 p-6 overflow-x-auto bg-white rounded shadow-md">
            <div v-if="statusList.length === 0" class="italic text-gray-500">Belum ada riwayat status</div>

            <ol class="relative border-gray-200 border-s dark:border-gray-700">
                <li v-for="status in statusList" :key="status.id" class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ status.history_status }}
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                        formatDate(status.history_date) }}</time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ status.history_note }}</p>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/libs/utils'

const props = defineProps({ deedId: number })

const statusList = ref([])


const fetchStatusHistory = async () => {
    const res = await api.get(`/deeds/${props.deedId}/status-history`)
    statusList.value = res.data
}

const formatDate = (dateStr) => new Date(dateStr).toLocaleString()

onMounted(fetchStatusHistory)
</script>
