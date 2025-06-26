<template>
  <div class="flex flex-col min-h-screen text-gray-900 bg-gray-100">

    <header class="items-center justify-between hidden px-6 py-4 bg-white shadow md:flex">
      <div class="flex text-xl font-bold cursor-pointer " @click="toggleSidebar">
        <span v-show="isSidebarExpanded">📜 Notaris App</span>
        <component :is="icons['MenuIcon']" class="w-8 h-8" v-show="!isSidebarExpanded" />
      </div>
      <UserDropdown />
    </header>


    <header class="flex items-center justify-between px-6 py-4 bg-white shadow md:hidden">
      <div class="flex text-xl font-bold cursor-pointer " @click="toggleTopMenu()">
        <component :is="icons['MenuIcon']" class="w-8 h-8" />
        <span class="ml-1 text-lg">Notaris App Mobile</span>
      </div>
      <UserDropdown />
    </header>

    <div class="flex flex-1">
      <Sidebar :isSidebarExpanded="isSidebarExpanded" class="hidden md:block" />
      <SidebarMobile class="" v-show="isMenuOpened" @close-menu="isMenuOpened = false" />

      <main class="flex-1 px-2 py-6 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue'
import SidebarMobile from '@/components/SidebarMobile.vue'
import UserDropdown from '@/components/UserDropdown.vue'
import * as icons from 'lucide-vue-next'



import { ref } from 'vue'

const check = ref(true)
const isSidebarExpanded = ref(true)
const isMenuOpened = ref(false)

const toggleTopMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
}

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
}
</script>
