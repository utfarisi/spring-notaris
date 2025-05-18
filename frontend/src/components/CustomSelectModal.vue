<template>
    <div class="relative w-full">
        <div ref="customSelect"
            class="flex justify-between items-center border border-gray-300 rounded-md shadow-sm py-2 px-3 cursor-pointer bg-white"
            @click="openModal">
            <span ref="selectedText">{{ selectedLabel }}</span>
            <input type="hidden" :value="selectedValue" :name="name">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>

        <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
            aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div
                    class="relative z-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                    <div
                        class="relative z-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                        <h3 class="ml-3 mb-5 text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Pilih Klien
                        </h3>
                        <div class="mt-2 overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            No</th>
                                        <th
                                            class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            NIK</th>
                                        <th
                                            class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama</th>
                                        <th
                                            class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email</th>
                                        <th
                                            class="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Alamat</th>
                                        <th class="px-2 py-1 relative">
                                            <span class="sr-only">Aksi</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="(item, index) in data" :key="item[props.valueKey]">
                                        <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">{{ index + 1 }}
                                        </td>
                                        <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">{{ item.nip }}
                                        </td>
                                        <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-900">{{
                                            item[props.labelKey] }}</td>
                                        <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">{{ item.email }}
                                        </td>
                                        <td class="px-2 py-2 text-sm text-gray-500">{{ item.address }}</td>
                                        <td class="px-2 py-2 whitespace-nowrap text-right text-sm font-medium">
                                            <input type="radio" :name="'selectedData_' + name"
                                                :value="item[props.valueKey]" @change="selectRow(item)">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                            :disabled="!selectedItem" @click="confirmSelection">
                            OK
                        </button>
                        <button type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            @click="closeModal">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        default: null,
    },
    labelKey: {
        type: String,
        default: 'fullname',
    },
    valueKey: {
        type: String,
        default: 'id',
    },
    name: {
        type: String,
        default: 'custom_select',
    },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedItem = ref(null);
const selectedLabel = ref('Pilih Data');
const selectedValue = ref(props.modelValue);
const customSelect = ref(null);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};

const selectRow = (item) => {
    selectedItem.value = item;
};

const confirmSelection = () => {
    if (selectedItem.value) {
        selectedLabel.value = selectedItem.value[props.labelKey];
        selectedValue.value = selectedItem.value[props.valueKey];
        emit('update:modelValue', selectedValue.value);
        closeModal();
    }
};

watch(() => props.modelValue, (newValue) => {
    selectedValue.value = newValue;
    const selectedData = props.data.find(item => item[props.valueKey] == newValue);
    selectedLabel.value = selectedData ? selectedData[props.labelKey] : 'Pilih Data';
});
</script>