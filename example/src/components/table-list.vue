<template>
  <div class="box-container">
    <div class="banner">
      <div class="repo">
        <p>📦 @hoc-element/table</p><a
          href="https://github.com/pdsuwwz/hoc-element-table"
          target="_blank"
        ><svg
          height="32"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
          class="octicon octicon-mark-github v-align-middle"
        ><path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        /></svg></a>
      </div>
    </div>
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
        @get-list="getList"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import { ElMessage, ElMessageBox } from 'element-plus'

import TableChildrenA from './table-children-a'
import TableChildrenB from './table-children-b'

// 自行封装的 “复制” 指令
import { clipboard } from 'example/directive/clipboard'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    TableChildrenA,
    TableChildrenB
  },
  directives: {
    clipboard
  },
  setup () {
    const loading = ref(false)
    const fixedRight = ref('right')
    const align = ref('center')
    const tableHeight = ref(null)
    const border = ref(true)
    const sourceList = ref({})

    const singleTable = ref({})

    const mockData = computed(() => {
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
    })

    const config = computed(() => {
      return [
        {
          attrs: {
            label: '编号',
            align: align.value,
            prop: 'id'
          }
        },
        {
          attrs: {
            label: '名称',
            prop: 'name',
            align: align.value,
            width: 200
          }
        },
        {
          attrs: {
            label: '状态',
            prop: 'isForbid',
            align: align.value,
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
            align: align.value,
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
            align: align.value,
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
            align: align.value,
            // 设置当前列恢复点击事件冒泡
            // isBubble: false,
            fixed: fixedRight.value
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
                  ElMessage({
                    message: JSON.stringify(row)
                  })
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
                  ElMessage({
                    message: `编号${row.id} router -> 已跳转到编辑页面！`
                  })
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
                  setPublish(row)
                }
              },
              !row.isForbid
                ? {
                    attrs: {
                      label: '禁用',
                      type: 'text',
                      disabled: false,
                      size: 'medium'
                    },
                    el: 'button',
                    click () {
                      setForbid(row)
                    }
                  }
                : {
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
                      setForbid(row)
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
                  copyLink(row)
                }
              }
            ]
          }
        }
      ]
    })

    const sleep = (time = 1000) => {
      return new Promise((resolve) => setTimeout(resolve, time))
    }

    const getList = async () => {
      loading.value = true

      await sleep()

      sourceList.value = mockData.value
      loading.value = false
    }

    const setFixedRight = () => {
      if (!fixedRight.value) {
        fixedRight.value = 'right'
      } else {
        fixedRight.value = false
      }
    }

    const setFixedRow = () => {
      if (!tableHeight.value) {
        tableHeight.value = '350'
      } else {
        tableHeight.value = ''
      }
    }

    const setLabelCenter = () => {
      if (!align.value) {
        align.value = 'center'
      } else {
        align.value = ''
      }
    }

    const setBorder = () => {
      border.value = !border.value
    }

    const handleRowClick = (row, column, cell) => {
      ElMessage({
        dangerouslyUseHTMLString: true, // Be careful :)
        message: `row-click 事件，单击了<span style="color: red;"> 第${row.$index}行 </span>请看控制台 log`
      })
      console.log('回调参数分别为: row, column, cell')
      console.log(row, column, cell)
    }

    const setCurrentRow = (rowNumber) => {
      const hocElTable = singleTable.value.$refs.hocElTable
      const row = rowNumber !== undefined ? sourceList.value.data[rowNumber] : ''
      hocElTable.setCurrentRow(row)
    }

    const setPublish = (row) => {
      ElMessageBox.confirm(`此操作会将${row.name}发布到线上, 是否继续?`, `编号${row.id}提示`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ElMessage({
          type: 'success',
          message: '发布成功!'
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消发布'
        })
      })
    }

    const setForbid = async (row) => {
      loading.value = true
      await sleep()
      loading.value = false
      row.isForbid = !row.isForbid
    }

    const copyLink = (row) => {
      ElMessage({
        type: 'success',
        message: '指令测试-复制成功，可以粘贴啦!'
      })
    }

    getList()

    return {
      singleTable,

      loading,
      fixedRight,
      align,
      tableHeight,
      border,
      sourceList,
      mockData,
      config,

      sleep,
      setFixedRight,
      setFixedRow,
      setLabelCenter,
      setBorder,
      handleRowClick,
      setCurrentRow,
      setPublish,
      setForbid,
      copyLink,

      getList
    }
  }
})
</script>

<style lang="scss" scoped>
.box-container {
  .banner {
    padding: 30px 0;
    background-color: #eee;
    .repo {
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      a {
        color: #2c3e50;
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: 400px) {
    .banner {
      .repo {
        width: 400px;
      }
    }
  }
  .content {
    position: relative;
    padding: 20px 20px 0;
    margin: 0 auto;
  }
}
</style>
