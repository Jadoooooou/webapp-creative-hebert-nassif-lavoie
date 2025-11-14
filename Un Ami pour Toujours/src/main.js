import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'





createApp(App).mount('#app').use(router) 
app.use(createPinia())