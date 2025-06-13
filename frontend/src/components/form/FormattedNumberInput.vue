<template>
    <input type="text" :value="formattedValue" @input="handleInput" @blur="handleBlur" @focus="handleFocus"
        class="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        :placeholder="placeholder" />
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: [Number, String, null],
        default: null
    },
    placeholder: {
        type: String,
        default: 'Masukkan angka'
    },
    // Opsi untuk desimal (misal: 2 untuk 2 angka di belakang koma)
    decimalPlaces: {
        type: Number,
        default: 0 // Default tanpa desimal
    }
});

const emit = defineEmits(['update:modelValue']);

// Nilai internal yang menyimpan angka sebenarnya (tanpa format)
const internalValue = ref(props.modelValue);

// Boolean untuk melacak apakah input sedang fokus
const isFocused = ref(false);

// Format angka ribuan sesuai locale Indonesia (misalnya 1.000.000)
const formatNumber = (num) => {
    if (num === null || num === undefined || isNaN(num)) return '';

    // Menggunakan Intl.NumberFormat untuk formatting sesuai locale
    const formatter = new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: isFocused.value ? 0 : props.decimalPlaces, // Saat fokus, jangan tampilkan desimal jika default 0
        maximumFractionDigits: props.decimalPlaces,
        useGrouping: true // Mengaktifkan pemisah ribuan
    });
    return formatter.format(num);
};

// Computed property untuk nilai yang ditampilkan di input
const formattedValue = computed(() => {
    // Jika sedang fokus, tampilkan nilai sebenarnya (tanpa format ribuan)
    // Ini memudahkan pengguna mengedit angka
    if (isFocused.value) {
        return internalValue.value !== null ? String(internalValue.value) : '';
    }
    // Jika tidak fokus, tampilkan nilai yang sudah diformat
    return formatNumber(internalValue.value);
});

// Watcher untuk menyinkronkan modelValue eksternal dengan internalValue
watch(() => props.modelValue, (newValue) => {
    // Hanya update jika nilai internal berbeda dan tidak sedang fokus
    // Ini mencegah flickering saat mengetik
    if (newValue !== internalValue.value && !isFocused.value) {
        internalValue.value = newValue;
    }
}, { immediate: true });

// Event handler saat input berubah
const handleInput = (event) => {
    // Hapus semua karakter non-digit dan non-titik/koma
    // Ganti koma dengan titik untuk konsistensi desimal
    let rawValue = event.target.value.replace(/[^\d.,]/g, '');
    rawValue = rawValue.replace(/,/g, '.'); // Ganti koma desimal menjadi titik

    let numValue = parseFloat(rawValue);

    if (isNaN(numValue)) {
        numValue = null; // Jika input kosong atau tidak valid, set ke null
    }

    internalValue.value = numValue;
    // Langsung emit update:modelValue dengan angka sebenarnya
    emit('update:modelValue', numValue);
};

// Event handler saat input mendapatkan fokus
const handleFocus = () => {
    isFocused.value = true;
};

// Event handler saat input kehilangan fokus
const handleBlur = () => {
    isFocused.value = false;
    // Saat blur, pastikan nilai internal di-format ulang untuk tampilan
    // dan emit nilai final jika ada perubahan setelah user selesai edit
    emit('update:modelValue', internalValue.value);
};
</script>