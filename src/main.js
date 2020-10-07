import HocElTable from './components/Table'

const install = function (Vue, opts = {}) {
  Vue.component('HocElTable', HocElTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.2.4',
  install,
  HocElTable
}
