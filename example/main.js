import { createApp } from 'vue'
import router from './router.js'
import ElementPlus from 'element-plus'

// import HocElTable from 'root/lib/hoc-el-table' // Switch to bundle lib
import HocElTable from '@/main.js'
import App from './App.vue'

import 'example/styles/variables.scss'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(HocElTable)
  .mount('#app')
