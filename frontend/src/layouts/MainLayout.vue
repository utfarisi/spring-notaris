<template>
  <div class="flex min-h-screen bg-gray-100 text-gray-900">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="bg-white shadow px-6 py-4 flex items-center justify-between">
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
