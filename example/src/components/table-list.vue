<template>
  <div class="box-container">
    <div class="content">
      <hoc-el-table
        ref="singleTable"
        title="表格Demo"
        :source="sourceList.data"
        :pagination="sourceList.pagination"
        :config="config"
        :loading="loading"
        :border="border"
        :height="tableHeight"
        highlight-current-row
        :table-events="{
          'row-click': handleRowClick
        }"
        :action-list="[
          { text: '固定表头', action: () => setFixedRow() },
          { text: '固定最右则列', action: () => setFixedRight() },
          { text: '居中表头label', action: () => setLabelCenter() },
          { text: '添加边框', action: () => setBorder() },
          { text: '高亮选中第0行', action: () => setCurrentRow(0) },
          { text: '高亮选中第1行', action: () => setCurrentRow(1) },
          { text: '取消选中行', action: () => setCurrentRow() }
        ]"
        @getList="getList"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import TableChildrenA from './table-children-a'
import TableChildrenB from './table-children-b'

import { clipboard } from 'example/directive/clipboard'

export default {
  components: {
    TableChildrenA,
    TableChildrenB
  },
  directives: {
    clipboard
  },
  data () {
    return {
      loading: false,
      fixedRight: 'right',
      align: 'center',
      tableHeight: null,
      border: true,
      sourceList: {}
    }
  },
  computed: {
    mockData () {
      return {
        data: [
          { id: 0, name: '王小虎1', isForbid: false },
          { id: 1, name: '王小虎2', isForbid: false },
          { id: 2, name: '王小虎3', isForbid: false },
          { id: 3, name: '王小虎4', isForbid: false }
        ],
        pagination: {
          total: 3,
          pageSize: 10,
          currentPage: 1
        }
      }
    },
    config () {
      const self = this
      const align = self.align
      return [
        {
          attrs: {
            label: '编号',
            align,
            prop: 'id'
          }
        },
        {
          attrs: {
            label: '名称',
            prop: 'name',
            align,
            width: 200
          }
        },
        {
          attrs: {
            label: '状态',
            prop: 'isForbid',
            align,
            width: 200
          },
          // 渲染字符串，默认不想展示 prop 的值，而是想对它做一些处理的时候，可以用这个方法
          render (isForbid) {
            return isForbid ? '✖️禁用中' : '✔️非禁用'
          }
        },
        {
          attrs: {
            label: '详情A',
            align,
            width: 400
          },
          // 渲染组件，返回值为一个数组， data 作为组件的 v-model，适用于需要展示复杂的数据的场景
          renderComponent (row) {
            return [
              { name: 'TableChildrenA', data: row },
              { name: 'el-input', data: row.name },
              { name: 'el-rate', data: row.id }
            ]
          }
        },
        {
          attrs: {
            label: '详情B',
            align,
            width: 400
          },
          renderComponent (row) {
            return [
              { name: 'TableChildrenB', data: row }
            ]
          }
        },
        {
          attrs: {
            label: '操作',
            width: '260',
            align,
            // 设置当前列恢复点击事件冒泡
            // isBubble: false,
            fixed: self.fixedRight
          },
          // 渲染 el-button，一般用在最后一列。目前只支持 el-button 和 click 事件，后续会根据需求支持任意的 el-xxx 和事件委托
          renderHTML (row) {
            return [
              {
                attrs: {
                  label: '查看',
                  type: 'text',
                  size: 'medium'
                },
                el: 'button',
                click () {
                  this.$message(JSON.stringify(row))
                }
              },
              {
                attrs: {
                  label: '编辑',
                  type: 'text',
                  size: 'medium'
                },
                el: 'button',
                click () {
                  this.$message(`编号${row.id} router -> 已跳转到编辑页面！`)
                }
              },
              {
                attrs: {
                  label: '发布',
                  type: 'text',
                  size: 'medium'
                },
                el: 'button',
                click () {
                  this.setPublish(row)
                }
              },
              !row.isForbid ? {
                attrs: {
                  label: '禁用',
                  type: 'text',
                  disabled: false,
                  size: 'medium'
                },
                el: 'button',
                click () {
                  this.setForbid(row)
                }
              } : {
                attrs: {
                  label: '解除禁用',
                  type: 'text',
                  disabled: false,
                  size: 'medium',
                  style: {
                    color: '#e6a23c'
                  }
                },
                el: 'button',
                click () {
                  this.setForbid(row)
                }
              },
              {
                attrs: {
                  label: '指令测试-复制链接',
                  type: 'primary',
                  size: 'medium',
                  // 为简便起见，这里引入了 clipboard 库，请注意
                  directives: [
                    {
                      name: 'clipboard',
                      value: JSON.stringify(row),
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
  },
  async created () {
    await this.getList()
  },
  methods: {
    sleep (time = 1000) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    async getList () {
      this.loading = true

      await this.sleep()

      this.sourceList = this.mockData
      this.loading = false
    },
    setFixedRight () {
      if (!this.fixedRight) {
        this.fixedRight = 'right'
      } else {
        this.fixedRight = false
      }
    },
    setFixedRow () {
      if (!this.tableHeight) {
        this.tableHeight = '350'
      } else {
        this.tableHeight = ''
      }
    },
    setLabelCenter () {
      if (!this.align) {
        this.align = 'center'
      } else {
        this.align = ''
      }
    },
    setBorder () {
      this.border = !this.border
    },
    handleRowClick (row, column, cell) {
      this.$message({
        dangerouslyUseHTMLString: true, // Be careful :)
        message: `row-click 事件，单击了<span style="color: red;"> 第${row.$index}行 </span>请看控制台 log`
      })
      console.log('回调参数分别为: row, column, cell')
      console.log(row, column, cell)
    },
    setCurrentRow (rowNumber) {
      const singleTable = this.$refs.singleTable
      const hocElTable = singleTable.$refs.hocElTable
      const row = rowNumber !== undefined ? this.sourceList.data[rowNumber] : ''
      hocElTable.setCurrentRow(row)
    },
    setPublish (row) {
      this.$confirm(`此操作会将${row.name}发布到线上, 是否继续?`, `编号${row.id}提示`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '发布成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        })
      })
    },
    async setForbid (row) {
      this.loading = true
      await this.sleep()
      this.loading = false
      row.isForbid = !row.isForbid
    },
    copyLink (row) {
      this.$message({
        type: 'success',
        message: '指令测试-复制成功，可以粘贴啦！'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box-container {
  .content {
    position: relative;
    padding: 20px 20px 0;
    margin: 0 auto;
  }
}
</style>
