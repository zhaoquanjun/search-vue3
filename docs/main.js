import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import QJsearch from 'qjsearch'
import 'qjsearch/lib/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(QJsearch)

for (const [key, component] of Object.entries(ElIconModules)) {
  app.component(key, component)
}
app.mount('#app')