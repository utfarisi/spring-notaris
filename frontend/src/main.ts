import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

const app = createApp(App)

app.use(createPinia())

const authStore = useAuthStore()
await authStore.initialize()

app.use(router)

app.mount('#app')
