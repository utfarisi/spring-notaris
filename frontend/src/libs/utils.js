import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://spring-notaris-production.up.railway.app'; // Default ke '/' jika tidak ada (untuk relative paths)

const api = axios.create({
  
  baseURL: API_BASE_URL + '/api',
  withCredentials: true
})

let isHandling401 = false

api.interceptors.response.use(
  response => response,
  async error => {
    const message = error?.response?.data?.error;
    const currentPath = window.location.pathname;

    if (error.response?.status === 401 && !isHandling401) {
      isHandling401 = true
      const auth = useAuthStore()

      if (message === 'Token expired') {
        alert('Sesi Anda telah habis. Silakan login ulang.');
      } else {
        alert('Anda tidak diizinkan. Silakan login.');
      }

      auth.logout()

      // Hindari redirect kalau sudah di login
      if (!currentPath.startsWith('/login')) {
        await router.push({ name: 'Login' })
      }

      setTimeout(() => {
        isHandling401 = false
      }, 1000) // reset flag agar bisa tangani 401 selanjutnya
    }

    return Promise.reject(error);
  }
)

export default api