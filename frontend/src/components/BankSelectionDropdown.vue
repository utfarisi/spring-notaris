<template>
    <div class="relative w-full max-w-sm">
        <button type="button" @click="toggleDropdown"
            class="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            :aria-expanded="isOpen" aria-haspopup="listbox">
            <span v-if="selectedBank" class="flex items-center">
                <img :src="selectedBank.logo" :alt="selectedBank.name" class="object-contain w-5 h-5 mr-2" />
                <span>{{ selectedBank.name }} - {{ selectedBank.accountNumber }}</span>
            </span>
            <span v-else class="text-gray-500">Pilih Bank Pembayaran</span>
            <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <Transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <ul v-if="isOpen" ref="dropdownMenu"
                class="absolute z-10 w-full mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabindex="-1" role="listbox">
                <li v-for="bank in banks" :key="bank.value" @click="selectBank(bank)"
                    class="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:bg-blue-600 hover:text-white"
                    :class="{ 'bg-blue-50 text-blue-900': selectedBank && bank.value === selectedBank.value }"
                    role="option">
                    <div class="flex items-center">
                        <img :src="bank.logo" :alt="bank.name" class="object-contain w-5 h-5 mr-2" />
                        <span
                            :class="['font-normal block truncate', { 'font-semibold': selectedBank && bank.value === selectedBank.value }]">
                            {{ bank.name }} - {{ bank.accountNumber }}
                        </span>
                    </div>
                    <span v-if="selectedBank && bank.value === selectedBank.value"
                        class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.147 1.03l-7.75 10.5a.75.75 0 01-1.172.035l-4.5-4.5a.75.75 0 011.06-1.06l3.97 3.97L15.55 4.305a.75.75 0 011.154.018z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
    // Menerima nilai yang dipilih dari v-model
    modelValue: {
        type: [String, Number, null], // Sesuaikan tipe jika value bank Anda bukan string/number
        default: null
    }
});

const emit = defineEmits(['update:modelValue', 'selectBank']);

const isOpen = ref(false);
const selectedBank = ref(null);
const dropdownMenu = ref(null);

// Data bank statis (Anda bisa memindahkannya ke store Vuex/Pinia atau mengambil dari API)
const banks = ref([
    {
        value: 'bca',
        name: 'BCA',
        accountNumber: '123-456-7890',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png' // Contoh URL logo
    },
    {
        value: 'mandiri',
        name: 'Bank Mandiri',
        accountNumber: '987-654-3210',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bank_Mandiri_logo.svg/1200px-Bank_Mandiri_logo.svg.png' // Contoh URL logo
    },
    {
        value: 'bsi',
        name: 'Bank Syariah Indonesia (BSI)',
        accountNumber: '567-890-1234',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_Bank_Syariah_Indonesia.svg/1200px-Logo_Bank_Syariah_Indonesia.svg.png' // Contoh URL logo
    }
]);

// Sinkronkan `selectedBank` dengan `modelValue` saat pertama kali komponen di-mount atau saat `modelValue` berubah dari luar
watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        selectedBank.value = banks.value.find(bank => bank.value === newValue) || null;
    } else {
        selectedBank.value = null;
    }
}, { immediate: true });

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectBank = (bank) => {
    selectedBank.value = bank;
    emit('update:modelValue', bank.value); // Emit nilai 'value' untuk v-model
    emit('selectBank', bank); // Emit objek bank lengkap untuk event kustom
    isOpen.value = false;
};

// Tutup dropdown saat klik di luar area komponen
const handleClickOutside = (event) => {
    if (dropdownMenu.value && !dropdownMenu.value.contains(event.target) &&
        !event.target.closest('button[aria-expanded]')) { // Cek juga tombolnya
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>