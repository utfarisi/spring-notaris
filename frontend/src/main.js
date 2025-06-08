import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css'; 
import { useAuthStore } from '@/stores/authStore'; 

const app = createApp(App);
app.use(createPinia());

(async () => {
  const authStore = useAuthStore();
  await authStore.initialize();
  app.use(router); 
  app.mount('#app');
})();