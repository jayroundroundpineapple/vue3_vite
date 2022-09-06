import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './style.css'
import App from './App.vue'
import store from './store'

const app=createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)

import 'virtual:windi.css'
app.mount('#app')
