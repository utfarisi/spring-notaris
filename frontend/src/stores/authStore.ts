import { defineStore } from 'pinia'
import api from '@/libs/utils';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; username: string;  role: string; authorities: string[]; email: string; customerId:number | null;firstname:string; lastname:string; address:string}
  }),
   getters: {
    isAuthenticated: (state) => !!state.user,
    isAdmin:(state)=>state.user?.role==='ADMIN',
    isUser:(state)=>state.user?.role==='USER',
  },
  actions: {
    async initialize() {
      try {
        const res = await api.get('/auth/me')
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
