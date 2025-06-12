<template>
    <div class="relative inline-block text-left">
        <div>
            <button type="button" @click="toggleDropdown"
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu" aria-haspopup="true" :aria-expanded="isOpen">
                Aksi
                <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <Transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div v-if="isOpen" ref="dropdownMenu"
                class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div class="py-1" role="none">
                    <component :is="action.type === 'link' ? 'a' : 'button'" v-for="action in actions"
                        :key="action.label" @click="handleActionClick(action)"
                        :href="action.type === 'link' ? action.href : null"
                        :target="action.type === 'link' && action.external ? '_blank' : null" :class="[
                            'block px-4 py-2 text-sm text-gray-700 w-full text-left',
                            'hover:bg-gray-100 hover:text-gray-900',
                            action.danger ? 'text-red-600 hover:bg-red-50 hover:text-red-800' : '',
                        ]" role="menuitem">
                        {{ action.label }}
                    </component>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    actions: {
        type: Array,
        required: true,
        validator: (value) => value.every(action =>
            typeof action.label === 'string' &&
            (action.type === 'button' || action.type === 'link') &&
            (action.type === 'link' ? typeof action.href === 'string' : true)
        )
    },

    itemIdentifier: {
        type: [String, Number, Object],
        default: null
    }
});

const emit = defineEmits(['action-clicked']);

const isOpen = ref(false);
const dropdownMenu = ref(null);


const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};


const handleClickOutside = (event) => {
    if (dropdownMenu.value && !dropdownMenu.value.contains(event.target) &&
        !event.target.closest('#options-menu')) {
        isOpen.value = false;
    }
};


const handleActionClick = (action) => {

    if (action.type === 'button' || (action.type === 'link' && !action.external)) {
        emit('action-clicked', {
            actionValue: action.value,
            itemIdentifier: props.itemIdentifier
        });
    }
    closeDropdown();
};


const closeDropdown = () => {
    isOpen.value = false;
};


onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>