# hoc-element-table

# HocElement

![npm](https://img.shields.io/npm/v/hoc-element)  ![NPM](https://img.shields.io/npm/l/hoc-element)

📦 基于 element-ui 库二次封装的一些高阶组件，该组件库主要解决 cms 等管理平台中繁琐的重复代码任务、通过一系列的配置化的思想将列表页的 table 表格及 form 表单中的 rules 校验等场景抽离了出来，旨在减少重复的操作，让开发变得更高效。


## Flexibility

* 通过配置化的方式生成 `table` 表格, 实现更高的自由度，无需再写大量的诸如 `<el-xxx>` 的模板
* 对于表单的 `validate rules`, 可直接绑定全局的对应规则函数，无需每次复制粘贴
* 针对图片 `upload`，只需两个参数 `API` 和 `v-model`，无需写一大堆参数
* 比较友好的 `affix`, 支持自定义高度悬停

## Environment Support

* Vue 2.5.17
* ElementUI 2.11.1

## Install

```shell
npm install hoc-element
```

## Quick Start

* 使用前请安装 [element-ui](https://www.npmjs.com/package/element-ui)

```js
import Vue from 'vue'
import HocElement from 'hoc-element'

Vue.use(HocElement)
```


## Using

* 示例 `HocElTable`

```html
<template>
  <hoc-el-table
    title="产品列表"
    :paginationFilter="filterFormParams"
    :source="sourceList"
    :config="config"
    @getList="getList"
  >
  </hoc-el-table>
</template>
<script>
import XxxComponent from '@/components/XxxComponent'
export default {
  components: {
    XxxComponent,
  }
  computed: {
    ...mapGetters({
      sourceList: 'Xxxmodule/sourceList',
    })
  },
  methods: {
    copyLink () {},
    setForbidden () {},
    setUnForbidden () {},
    async getList (query = this.filterFormParams) {
      const res = await this.$store.dispatch(ProductLib.getAction('GetProductsList'), query)
      return res
    },
  }
  data () {
    return {
      loading: false,
      filterFormParams: { // 获取列表时传递的参数
        type: '',
        // ...
      },
      config: [
        {
          attrs: {
            label: '编号',
            prop: 'id',
            width: '90'
          }
        },
        {
          attrs: {
            label: '产品信息',
            width: '350'
          },
          renderComponent (data) {
            return [ // 必须为数组
              { name: 'XxxComponent', data } // 返回「组件名」和「组件需要的数据」(使用 v-model 来绑定 data)
            ]
          }
        },
        {
          attrs: {
            label: '最后更新人',
            width: '100',
            prop: 'lastModifierBy'
          }
        },
        {
          attrs: {
            label: '更新时间',
            prop: 'updatedAt'
          }
        },
        {
          attrs: {
            label: '操作',
            width: '260'
          },
          renderHTML (row) {
            return [
              {
                attrs: {
                  label: '编辑',
                  type: 'text',
                  size: 'medium'
                },
                el: 'button',
                click (row) {
                  this.$router.push(`/product_lib/products/${row.id}/edit/`)
                }
              },
              !row.isForbid ? {
                attrs: {
                  label: '禁用',
                  type: 'text',
                  size: 'medium'
                },
                el: 'button',
                click () {
                  this.setForbidden(row.id)
                }
              } : {
                attrs: {
                  label: '解除禁用',
                  type: 'text',
                  size: 'medium',
                  style: {
                    color: '#e6a23c'
                  }
                },
                el: 'button',
                click () {
                  this.setUnForbidden(row.id)
                }
              },
              {
                attrs: {
                  label: '复制链接',
                  type: 'text',
                  size: 'medium',
                  // 这里的指令来自 clipboard，只做为演示用，如有需要请自行安装
                  directives: [
                    {
                      name: 'clipboard',
                      value: `https://www.google.com`,
                      arg: 'copy'
                    }
                  ]
                },
                el: 'button',
                click () {
                  this.copyLink(row)
                }
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

```