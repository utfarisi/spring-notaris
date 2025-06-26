import { defineStore } from 'pinia';
import api from '@/libs/utils'; // Asumsi ini adalah instance Axios Anda
import router from '@/router'; 
import axios from 'axios';// Import router Vue Anda jika ingin redirect setelah logout

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: { 
      id: 0, 
      username: '', 
      role: '', 
      authorities: [], 
      email: '', 
      customerId: null, 
      firstname: '', 
      lastname: '', 
      address: ''
    }
  }),
  getters: {
    isAuthenticated: (state) => !!state.user && state.user.id !== 0, // Lebih akurat mengecek user valid
    isAdmin: (state) => state.user?.role === 'ADMIN',
    isUser: (state) => state.user?.role === 'USER',
  },
  actions: {
    async initialize() {
      try {
        const res = await axios.get('/auth/me'); // Pastikan endpoint ini benar untuk mendapatkan info user
        this.user = res.data;
      } catch (error) {
        console.error("Error initializing auth store:", error);
        this.user = null; // Set user ke null jika ada error (misal token expired/invalid)
      }
    },

    async logout() {
      try {
        
        await api.post('/auth/logout'); 
        
        this.user = null;

        if (router) {
          router.push('/login'); // Ganti dengan path halaman login Anda
        } else {
          console.warn("Vue Router instance not found. Cannot redirect after logout.");
        }
        alert("Anda telah berhasil keluar.");

      } catch (error) {
        console.error("Logout failed:", error.response ? error.response.data : error.message);
        this.user = null;
        alert("Gagal melakukan logout. Silakan coba lagi.");
        if (router) {
            router.push('/login');
        }
      }
    },
  },
});