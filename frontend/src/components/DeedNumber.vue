<template>
    <div>
        <input v-model="number" placeholder="Nomor Akta" class="w-full border p-1 mb-2 rounded"></input>

        <button @click="submitStatus" class="bg-green-600 text-white px-4 py-2 rounded">
            Simpan
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import api from '@/libs/utils'

const props = defineProps({
    deed: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['saved'])

const number = ref()
const newDeed = ref()

watch(() => props?.deed,
    (newVal) => {
        if (newVal) {
            newDeed.value = newVal || null
        }

    },
    { immediate: true }
)

const submitStatus = async () => {
    try {
        const deedRest = await api.put(`/deeds/${props.deed.id}/number`, {
            number: number.value
        })
        emit('saved', deedRest.data)
    }
    catch (error) {
        console.log('Gagal menyimpan nomor akta : ', error);
    }
}
</script>