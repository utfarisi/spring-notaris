<template>
    <div v-if="props.previewUrl" class="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
        <div
            class="bg-white p-4 rounded relative max-w-xl max-h-full overflow-hidden flex flex-col items-center justify-center">
            <img :src="props.previewUrl" alt="Dokumen Preview" class="max-w-full max-h-[80vh] object-contain m-6" />
            <button class="absolute top-2 right-2 text-gray-700" @click="handleClose">✕</button>
        </div>
    </div>
</template>

<script setup lang="ts">


const props = defineProps<{
    previewUrl: {
        type: any,
        required: true
    }
}>()

const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}

</script>