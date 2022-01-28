import HocElTable from '@/components/Table'

const install = function (app) {
  app.component('HocElTable', HocElTable)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.1',
  install,
  HocElTable
}
