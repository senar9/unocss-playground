import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import '~/assets/css/theme.css'
import '@unocss/reset/tailwind.css'
import '~/assets/css/main.css'
import 'uno.css'

window.URL = window.URL || window.webkitURL
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router).mount('#app')
