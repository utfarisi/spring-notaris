<template>
  <div class="flex items-center justify-center min-h-screen py-10 bg-gradient-to-br from-gray-100 to-gray-300">
    <div class="w-full max-w-md overflow-hidden bg-white shadow-lg rounded-xl">
      <div class="flex justify-center p-8 border-b border-gray-100">
        <img src="/logo-notaris.jpeg" alt="Logo Perusahaan" class="object-contain h-16" />
      </div>

      <div class="p-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  background-color: gray;
}
</style>