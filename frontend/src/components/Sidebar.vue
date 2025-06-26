<template>
  <aside class="z-50 hidden h-screen transition-all duration-300 ease-in-out bg-white border border-gray-300 lg:block "
    :class="{
      'w-16': !isSidebarExpanded,
      'w-64': isSidebarExpanded,
      'block': isSidebarExpanded
    }">


    <button v-if="!isSideBarExpandedOnLargeScreen" @click="toggleSidebar"
      class="absolute z-50 p-2 bg-gray-200 rounded-full top-4 left-4 hover:bg-gray-300 md:hidden">
      <component :is="icons['MenuIcon']" class="w-6 h-6" />
    </button>

    <div class="px-2 py-3 border border-gray-200" :class="{
      'hidden': !isSidebarExpanded
    }">
      <h5 class="font-bold text-gray-500">Selamat Datang</h5>
      <span class="font-bold text-black capitalize">{{ user?.username }}</span>
      <h6 class="text-xs">Sebagai [{{ user.role }}]</h6>
    </div>

    <nav class="flex flex-col gap-1 px-2 mt-4" v-show="isSidebarExpanded">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path"
        class="flex items-center gap-3 p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-semibold': isActive(item.path) }">
        <component :is="icons[item.icon]" class="w-5 h-5" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </nav>
    <nav class="flex flex-col items-center px-2 mt-4" v-show="!isSidebarExpanded">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path" class="p-2 rounded hover:bg-gray-100"
        :class="{ 'bg-gray-100 font-semibold': isActive(item.path) }">
        <component :is="icons[item.icon]" class="w-8 h-8" />
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import * as icons from 'lucide-vue-next'
import { useAuthStore } from '../stores/authStore'


const props = defineProps({
  isSidebarExpanded: {
    type: Boolean,
    required: true
  }
})

const authStore = useAuthStore()
const user = authStore.user
const isSideBarExpandedOnLargeScreen = ref(true)

const updateSidebarState = () => {
  // Anda bisa sesuaikan breakpoint 'md' atau 'lg' sesuai Tailwind Anda
  // md: 768px, lg: 1024px
  if (window.innerWidth >= 768) { // Jika lebar layar >= breakpoint medium (md)
    isSidebarExpanded.value = true; // Sidebar selalu terbuka
    isSideBarExpandedOnLargeScreen.value = true;
  } else { // Jika lebar layar < breakpoint medium (mobile/tablet)
    isSidebarExpanded.value = false; // Sidebar default tertutup
    isSideBarExpandedOnLargeScreen.value = false;
  }
}

var menuItems = reactive([]);

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
//const isActive = (path) => route.path.startsWith(path)
const isActive = (itemPath) => {
  if (itemPath === '/') {
    // Untuk Dashboard (path '/'), hanya aktif jika path saat ini persis '/'
    return route.path === '/';
  } else {
    // Untuk rute lain, gunakan startsWith
    return route.path.startsWith(itemPath);
  }
}

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
}

onMounted(() => {
  window.removeEventListener('resize', updateSidebarState)
})
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