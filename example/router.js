import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('example/components/Layout')
const importModule = (filePath) => {
  return () => import(`example/${filePath}`)
}

const routes = [{
  path: '/',
  component: Layout,
  children: [
    {
      path: 'table-example',
      component: importModule('views/ExampleTable')
    }
  ]
}]

Vue.use(VueRouter)
export default new VueRouter({
  routes,
  mode: 'history'
})
