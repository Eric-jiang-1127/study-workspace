import { createApp } from 'vue'
import { createRouter } from './router'
import App from './App.vue'
import './styles/global.css'
import './styles/markdown.css'

const app = createApp(App)
const router = createRouter()

app.use(router)
app.mount('#app')
