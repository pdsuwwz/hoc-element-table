# @hoc-element/table

![npm](https://img.shields.io/npm/v/@hoc-element/table)  ![NPM](https://img.shields.io/npm/l/@hoc-element/table)

📦 二次封装了 element-ui 库中的 table，通过配置文件的方式即可生成 `table` 表格, 无需再写大量的诸如 `<el-xxx>` 的模板，实现更高的自由度，旨在减少重复的操作，让开发变得更高效。

## Environment Support

* Vue 2.5.17
* ElementUI 2.11.1

## Install

```shell
npm install @hoc-element/table
```

## Quick Start

* 使用前请安装 [element-ui](https://www.npmjs.com/package/element-ui)

```js
import Vue from 'vue'
import HocElementTable from '@hoc-element/table'

Vue.use(HocElementTable)
```

## Using

| 方法 | 说明 | 场景 |
| -------- | -------- | -------- |
| --- | 渲染单元格的 attrs.prop 对应的键值 | 适用于直接显示 prop 的值场景 |
| render | 渲染字符串 | 适用于对默认 prop 的值做一些微处理的场景 |
| renderHTML | 渲染指定的 DOM 元素 | 适用于展示 Action，一般用在最后一列（目前只支持 el-button 的渲染，详见 Example） |
| renderComponent | 渲染组件 | 适用于单元格内需要展示复杂内容的场景，详见 Example |

## Example

```html
<template>
  <hoc-el-table
    title="产品列表"
    :paginationFilter="filterFormParams"
    :source="sourceList"
    :config="config"
    :loading="loading"
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
       // 获取列表时传递的参数
      filterFormParams: {
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
            label: '名称',
            width: '200',
            prop: 'name'
          },
          render (name) {
            return `Hello-${name}`
          }
        },
        {
          attrs: {
            label: '产品信息',
            width: '350'
          },
          renderComponent (currentRowData) {
            // 返回一个数组，可渲染多个组件
            // 每个对象都需要包含「组件名」和「组件需要的数据」（原理为 v-model，即在组件内部可直接使用 value 作为 props）
            return [
              { name: 'XxxComponent', data: currentRowData }
            ]
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
              // 也可尝试使用三目运算符来动态的展示不同的按钮
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