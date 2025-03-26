import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './components/index'
import { directives } from './utils/common'
import Ectemplate from '@mv3/components/Ectemplate'
import Eptemplate from '@mv3/components/Eptemplate'
import Icon from '@mv3/components/Icon'
import '@mv3/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App)
directives(app)
app.use(store)
app.use(router)
app.use(global)
const plugins = [Ectemplate, Eptemplate, Icon]
plugins.forEach(plugin => app.use(plugin))
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
