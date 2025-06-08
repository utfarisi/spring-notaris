import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import { useAuthStore } from '../stores/authStore'

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import DocumentUpload from '../views/DocumentUpload.vue'
import Client from '@/views/clients/Client.vue'
import Jadwal from '@/views/Jadwal.vue'
import Pengguna from '@/views/Pengguna.vue'
import Pengaturan from '@/views/Pengaturan.vue'
import Profile from '@/views/Profile.vue'
import Deeds from '@/views/deeds/Deeds.vue'



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
      {path:'clients',name:'klien',component:Client, meta:{roles:['ADMIN']}},
      {path:'clients/:id',name:'clientEdit',component:()=>import('@/views/clients/ClientEdit.vue')},
      {path:'clients/:id/show',name:'clientDetail',meta:{roles:['ADMIN']},component:()=>import('@/views/clients/ClientDetail.vue')},
      {path:'operator/deeds/:id/review-documents',meta:{roles:['ADMIN']}, component:()=>import('@/views/deeds/DeedDocumentReview.vue')},
      {path:'users/deeds/:id/upload-documents',meta:{roles:['USER']}, component:()=>import('@/views/deeds/DeedDocumentUpload.vue')},
      {path:'deeds',name:'akta',component:Deeds},
      {path:'deeds/create',name:'DeedCreate',component:()=>import('@/views/deeds/DeedForm.vue')},
      {path:'deeds/:id/edit',name:'EditAktaForm',component:()=>import('@/views/deeds/EditDeedForm.vue')},
      {path:'deeds/:id',name:'DeedDetail',component:()=>import('@/views/deeds/DeedDetail.vue')},
      {path:'appointments',name:'appointments',meta:{roles:['ADMIN']},component:()=>import('@/views/appointments/Appointments.vue')},
      {path:'appointments/create',name:'appointmentCreate',meta:{roles:['USER']},component:()=>import('@/views/appointments/AppointmentCreate.vue')},
      {path:'appointments/my-appointments',name:'my-appointments',meta:{roles:['USER']},component:()=>import('@/views/appointments/MyAppointments.vue')},
      {path:'schedule',name:'jadwal',component:Jadwal},
      {path:'users',name:'pengguna',component:Pengguna},
      {path:'settings',name:'pengaturan',component:Pengaturan},
      {path:'profile',name:'profile',component:Profile}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ⬇️ Tambahkan ini sebelum export
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.user) {
    await authStore.initialize()
  }

  const isAuthenticated = authStore.isAuthenticated
  const userRole = authStore.user?.role

  if (to.meta.authRequired && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    return next({ name: 'Home' })
  }

  next()
})

export default router
