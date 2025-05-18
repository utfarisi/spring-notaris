import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import { useAuthStore } from '../stores/authStore'

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import DocumentUpload from '../views/DocumentUpload.vue'
import Akta from '@/views/deeds/Akta.vue'
import Client from '@/views/Client.vue'
import Jadwal from '@/views/Jadwal.vue'
import Pengguna from '@/views/Pengguna.vue'
import Pengaturan from '@/views/Pengaturan.vue'
import Profile from '@/views/Profile.vue'
import { Component } from 'lucide-vue-next'



const routes = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      { path: '', name: 'Login', component: Login },
    ]
  },
  {
    path: '/register',
    component: AuthLayout,
    children: [
      { path: '', name: 'Register', component: Register }, 
    ]
  },
  {
    path: '/',
    component: MainLayout,
    meta: { authRequired: true},
    children: [
      { path: '', name: 'Home', component: Home },
      {path:'documents',name:'DocumentUpload',component:DocumentUpload},
      {path:'clients',name:'klien',component:Client},
      {path:'deeds',name:'akta',component:Akta},
      {path:'deeds/create',name:'DeedCreate',component:()=>import('@/views/deeds/AktaForm.vue')},
      {path:'deeds/:id',name:'DeedEdit',component:()=>import('@/views/deeds/AktaDetail.vue')},
      {path:'schedule',name:'jadwal',component:Jadwal},
      {path:'users',name:'pengguna',component:Pengguna},
      {path:'settings',name:'pengaturan',component:Pengaturan},
      {path:'profile',name:'profile',component:Profile}
      // Tambahkan route lain dengan meta juga jika perlu
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ⬇️ Tambahkan ini sebelum export
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated
  const userRole = authStore.user?.role

  // Cek apakah butuh login
  if (to.meta.authRequired && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  // Cek apakah peran pengguna sesuai
  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    return next({ name: 'Home' }) // Atau ke halaman lain seperti Unauthorized
  }

  next()
})

export default router
