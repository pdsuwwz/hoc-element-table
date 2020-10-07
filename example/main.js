import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router.js'
import HocElTable from '@/main.js'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(HocElTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
