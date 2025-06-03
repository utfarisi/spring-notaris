<!-- components/CardStat.vue -->
<template>
    <div class="bg-white shadow rounded p-4 flex items-center space-x-4">
        <div class="p-2 rounded-full bg-blue-100 text-blue-600">
            <component :is="iconComponent" class="w-6 h-6" />
        </div>
        <div>
            <p class="text-sm text-gray-500">{{ title }}</p>
            <p class="text-xl font-bold">{{ value }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { Calendar, FileText, CheckCircle, XCircle } from 'lucide-vue-next'

const props = defineProps<{
    title: string
    value: number
    icon: 'calendar' | 'file-text' | 'check-circle' | 'x-circle'
}>()

const iconComponent = computed(() => {
    return {
        calendar: Calendar,
        'file-text': FileText,
        'check-circle': CheckCircle,
        'x-circle': XCircle,
    }[props.icon]
})
</script>
