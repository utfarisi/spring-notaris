import { defineStore } from 'pinia'
import api from '@/libs/utils';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; username: string; role: string; authorities: string[] }
  }),
   getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    async initialize() {
    try {
      const res = await api.get('/auth/me', { withCredentials: true })
      this.user = res.data
    } catch {
      this.user = null
    }
  },
    logout() {
      this.user = null
    },
  },
})
