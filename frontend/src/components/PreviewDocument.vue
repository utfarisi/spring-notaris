<template>
    <div v-if="props.previewUrl" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div class="relative flex flex-col items-center justify-center bg-white rounded shadow-lg
                max-w-[90vw] max-h-[90vh] overflow-auto
                pt-10 pb-4 px-4"> <button
                class="absolute text-3xl font-bold text-gray-700 hover:text-gray-900 top-2 right-2"
                @click="handleClose">
                &times;
            </button>

            <img :src="props.previewUrl" alt="Dokumen Preview" class="max-w-full max-h-[80vh] object-contain" />
        </div>
    </div>
</template>

<script setup>


const props = defineProps({
    previewUrl: {
        required: true
    }
})

const emit = defineEmits(['close'])

const handleClose = () => {
    emit('close')
}

</script>