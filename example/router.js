import { createRouter, createWebHistory } from 'vue-router'

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

export default createRouter({
  routes,
  history: createWebHistory()
})
