<template>
    <div ref="dropdownRef" class="relative">
        <button @click="toggle" class="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition">
            <span>{{ user?.username }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="open" class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded z-50">
            <div class="px-4 py-2 border-b text-sm text-gray-700">
                <div class="text-xs text-gray-500">{{ user?.role }}</div>
            </div>
            <RouterLink to="/profile" class="block px-4 py-2 hover:bg-gray-100">Profil</RouterLink>
            <button @click="logout" class="w-full text-left px-4 py-2 hover:bg-gray-100">Keluar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const authStore = useAuthStore()
const router = useRouter()
const user = authStore.user

const toggle = () => (open.value = !open.value)

const handleClickOutside = (event: MouseEvent) => {
    if (
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target as Node)
    ) {
        open.value = false
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside)
})

const logout = async () => {
    await authStore.logout()
    router.push({ name: 'Login' })
}
</script>
