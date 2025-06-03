<template>
  <aside class="bg-white border-r h-screen  transition-all duration-300 ease-in-out"
    :class="{ 'w-16': !isSidebarExpanded, 'w-64': isSidebarExpanded }">
    <div class="py-4 font-bold text-xl border-b cursor-pointer flex " @click="toggleSidebar">
      <span v-show="isSidebarExpanded">📜 NotarisApp</span>
      <component :is="icons['MenuIcon']" class="w-8 h-8" v-show="!isSidebarExpanded" />
    </div>
    <nav class="mt-4 flex flex-col gap-1 px-2" v-show="isSidebarExpanded">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path"
        class="flex items-center gap-3 p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-semibold': isActive(item.path) }">
        <component :is="icons[item.icon]" class="w-5 h-5" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>
    <nav class="mt-4 flex flex-col items-center px-2" v-show="!isSidebarExpanded">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path" class="p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-semibold': isActive(item.path) }">
        <component :is="icons[item.icon]" class="w-8 h-8" />
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import * as icons from 'lucide-vue-next'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const isSidebarExpanded = ref(true)
var menuItems = reactive([]);

if (authStore.isAdmin) {
  menuItems = [
    { icon: 'Home', label: 'Dashboard', path: '/' },
    { icon: 'User', label: 'Klien', path: '/clients' },
    { icon: 'Book', label: 'Akta', path: '/deeds' },
    { icon: 'Calendar', label: 'Jadwal', path: '/appointments' },
    { icon: 'Users', label: 'Pengguna', path: '/users' },
    { icon: 'Settings', label: 'Pengaturan', path: '/settings' },
  ]
}
else {
  menuItems = [
    { icon: 'Home', label: 'Dashboard', path: '/' },
    { icon: 'Book', label: 'Akta', path: '/deeds' },
    { icon: 'Calendar', label: 'Jadwal Saya', path: '/appointments/my-appointments' },
  ]
}


const route = useRoute()
const isActive = (path: string) => route.path.startsWith(path)

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
}
</script>