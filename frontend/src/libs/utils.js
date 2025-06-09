import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'

// Gunakan variabel lingkungan yang disuntikkan oleh Vite
// Pastikan variabel ini diberi prefix VITE_ atau ENV_ (sesuai config Vite)
// Di Vite, variabel lingkungan harus diawali dengan VITE_ (default)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/'; // Default ke '/' jika tidak ada (untuk relative paths)

const api = axios.create({
  // Jika VITE_API_BASE_URL di Railway diset ke 'https://spring-notaris-production.up.railway.app',
  // maka ini akan jadi 'https://spring-notaris-production.up.railway.app/api'
  // Jika tidak diset, dan default ke '/', ini akan jadi '/api' (relative path)
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