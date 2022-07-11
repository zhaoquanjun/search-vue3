import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/styles/index'

const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElIconModules)) {
  app.component(key, component)
}
app.mount('#app')