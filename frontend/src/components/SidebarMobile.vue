<template>
  <aside class="fixed z-10 w-64 h-screen bg-white">

    <div class="px-2 py-3 border border-gray-200">
      <h5 class="font-bold text-gray-500">Selamat Datang</h5>
      <span class="font-bold text-black capitalize">{{ user?.username }}</span>
      <h6 class="text-xs">(PERAN : {{ user.role }})</h6>
    </div>

    <nav class="flex flex-col gap-1 px-2 mt-4">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path" @click="closeMenu"
        class="flex items-center gap-3 p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-semibold': isActive(item.path) }">
        <component :is="icons[item.icon]" class="w-5 h-5" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import * as icons from 'lucide-vue-next'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const user = authStore.user

const emit = defineEmits(['close-menu']);

var menuItems = reactive([]);

const closeMenu = () => {
  emit('close-menu');
};


if (authStore.isAdmin) {
  menuItems = [
    { icon: 'Home', label: 'Dashboard', path: '/' },
    { icon: 'User', label: 'Daftar Klien', path: '/clients' },
    { icon: 'Book', label: 'Daftar Akta', path: '/deeds' },
    { icon: 'Calendar', label: 'Jadwal jadwal', path: '/appointments' },
    { icon: 'Calendar', label: 'Daftar Invoice', path: '/invoices' },
  ]
}
else {
  menuItems = [
    { icon: 'Home', label: 'Dashboard', path: '/' },
    { icon: 'Book', label: 'Akta', path: '/deeds' },
    { icon: 'Calendar', label: 'Jadwal Saya', path: '/appointments/my-appointments' },
    { icon: 'Calendar', label: 'Invoice Saya', path: '/my-invoices' },
  ]
}


const route = useRoute()
const isActive = (path) => route.path.startsWith(path)



</script>

<style scope>
.sidebar-expanded-margin {
  margin-left: 16rem;
  /* Lebar sidebar 64 (256px) */
}

.sidebar-collapsed-margin {
  margin-left: 4rem;
  /* Lebar sidebar 16 (64px) */
}
</style>