import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store/store'

const app = createApp(App)
app.provide('store', store)
app.mount('#app')
