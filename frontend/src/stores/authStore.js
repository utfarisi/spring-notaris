import { defineStore } from 'pinia'
import api from '@/libs/utils'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: { id: 0, username: '',  role: '', authorities: [], email: '', customerId:null,firstname:'', lastname:'', address:''}
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
