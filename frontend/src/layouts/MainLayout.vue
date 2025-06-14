<template>
  <div class="flex min-h-screen text-gray-900 bg-gray-100">

    <Sidebar />

    <div class="flex flex-col flex-1">
      <!-- Topbar -->
      <header class="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 class="text-xl font-semibold"></h1>
        <UserDropdown />
      </header>

      <!-- Router View -->
      <main class="flex-1 p-6 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import UserDropdown from '@/components/UserDropdown.vue'
</script>
