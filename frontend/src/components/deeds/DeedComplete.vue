<template>
    <div>
        <p class="mb-4 text-base font-normal text-gray-700">Akta ini sudah selesai.</p>

    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    deed: {
        type: Object,
        required: true,
    },
});


const emit = defineEmits(['open-invoice-form']);
</script>

<style scoped></style>