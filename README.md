# @hoc-element/table

![npm](https://img.shields.io/npm/v/@hoc-element/table)  ![NPM](https://img.shields.io/npm/l/@hoc-element/table)

📦 二次封装了 element-plus 库中的 table，通过配置文件的方式即可生成 `table` 表格, 无需再写大量的诸如 `<el-xxx>` 的模板，实现更高的自由度，旨在减少重复的操作，让开发变得更高效。

**[Live demo](https://pdsuwwz.github.io/hoc-element-table)** 

## Environment Support

* Vue 3.2.x

## Install

```shell
npm install @hoc-element/table

# or

pnpm add @hoc-element/table
```

## Quick Start

* 使用前请安装 [element-plus](https://www.npmjs.com/package/element-plus)

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import HocElTable from '@/main.js'
import App from './App.vue'

createApp(App)
  .use(ElementPlus)
  .use(HocElTable)
  .mount('#app')

```

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/pdsuwwz/hoc-element-table/releases)

## Feature

- [x] 基于 Webpack 5 构建
- [x] 全面支持 Vue 3
- [x] 支持 `JSON` 序列化表格快速配置
- [x] 已内置 `Pagination` 分页
- [x] 支持自定义 `prop` 列名
- [x] 支持单元格内容自定义渲染 【见 [单元格渲染配置说明](#单元格渲染配置说明)】
- [x] 支持自定义单元格 `style` 样式
- [x] 支持绑定自定义指令 `directives`
- [x] 支持绑定 `element-plus` 原生 `Table` 的 `Events` 和 `Methods`
- [x] 支持 `Header` 和 `Pagination` 的显隐控制

## 单元格渲染配置说明

| 方法 | 说明 | 场景 |
| -------- | -------- | -------- |
| --- | 渲染单元格的 attrs.prop 对应的键值 | 适用于直接显示 prop 的值场景 |
| render | 渲染字符串 | 适用于对默认 prop 的值做一些微处理的场景 |
| renderHTML | 渲染指定的 DOM 元素 | 适用于展示 Action，一般用在最后一列（目前只支持 el-button 的渲染，详见 Example） |
| renderComponent | 渲染组件 | 适用于单元格内需要展示复杂内容的场景，详见 Example |

## Example

这是比较全的例子，几乎囊括了 API 的所有用法，源码戳这： [Code](https://github.com/pdsuwwz/hoc-element-table/tree/main/example/src/components/table-list.vue)
