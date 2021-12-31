<template>
  <div class="table-list-container">
    <header
      v-if="!hideHeader"
      class="header"
    >
      <h2>{{ title }}</h2>

      <div class="header-actions">
        <div class="overflow-box">
          <el-button
            v-for="(item, index) in getActionList"
            :key="index"
            type="primary"
            size="small"
            v-bind="getHeaderActions(item)"
            @click="item.action"
          >
            {{ item.text }}
          </el-button>
        </div>
      </div>
    </header>

    <component :is="containerTag">
      <div class="filter-form-container">
        <slot />
      </div>

      <el-table
        ref="hocElTable"
        v-loading="loading"
        :data="source"
        style="width: 100%"
        v-bind="$attrs"
        v-on="tableEvents"
      >
        <el-table-column
          v-for="(item, index) in config"
          :key="index"
          v-bind="getAttrsValue(item)"
        >
          <template #default="scope">
            <div v-if="isFunction(getValue(scope, item))">
              <component
                :is="renderTypeList[getMatchRenderFunction(item)].target"
                :cell-list="getValue(scope, item)()"
                :row="scope.row"
                :parent="getParent"
                @click="($event) => {
                  handleNativeClick(getAttrsValue(item), $event)
                }"
              />
            </div>
            <div
              v-else
            >
              {{ getValue(scope, item) }}
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-row
        v-if="!hidePagination"
        class="table-pagination"
        justify="end"
        type="flex"
      >
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="getPagination.currentPage"
          :page-size="getPagination.pageSize"
          :total="getPagination.total"
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
        />
      </el-row>
    </component>
  </div>
</template>

<script>
import { isFunction as isFn, isBoolean } from '@/utils/type'
import ElementsMapping from './ElementsMapping'
import ComponentsMapping from './ComponentsMapping'
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
export default defineComponent({
  name: 'Table',
  components: {
    ElementsMapping,
    ComponentsMapping
  },
  props: {
    // 获取表格元数据时携带的参数
    filterParams: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格加载 loading
    loading: {
      type: Boolean,
      default: false
    },
    // 表格名称
    title: {
      type: String,
      default: ''
    },
    // 表格元数据
    source: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    // 指定外层容器的渲染组件
    containerTag: {
      type: String,
      default: 'el-card'
    },
    // 是否隐藏表头
    hideHeader: {
      type: Boolean,
      default: false
    },
    // 是否隐藏分页
    hidePagination: {
      type: Boolean,
      default: false
    },
    // 分页配置
    pagination: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格配置文件
    config: {
      type: Array,
      default () {
        return []
      }
    },
    // 表头右上方的按钮组
    actionList: {
      type: Array,
      default () {
        return [
          { text: '', action: () => {} }
        ]
      }
    },
    // element table 原生事件
    tableEvents: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  setup (props) {
    const { proxy } = getCurrentInstance()

    const getAttrsValue = (item) => {
      const { attrs } = item
      const result = {
        ...attrs
      }
      delete result.prop
      return result
    }

    const renderTypeList = ref({
      render: {},
      renderHTML: {
        target: 'elements-mapping'
      },
      renderComponent: {
        target: 'components-mapping'
      }
    })

    const getParent = computed(() => {
      return proxy.$parent
    })
    const getPagination = computed(() => {
      const params = {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
      return Object.assign({}, params, props.pagination)
    })

    const getActionList = computed(() => {
      return props.actionList.slice().reverse().filter(it => it.text)
    })

    const getValue = (scope, configItem) => {
      const prop = configItem.attrs.prop

      const renderName = getMatchRenderFunction(configItem)
      const renderObj = renderTypeList.value[renderName]

      if (renderObj && isFunction(configItem[renderName])) {
        return renderObj.target
          ? getRenderValue(scope, configItem, { name: renderName, type: 'bind' })
          : getRenderValue(scope, configItem)
      }

      return scope.row[prop]
    }

    const getRenderValue = (scope, item, fn = { name: 'render', type: 'call' }) => {
      const prop = item.attrs.prop

      const propValue = prop && scope.row[prop]

      scope.row.$index = scope.$index

      const args = propValue !== undefined ? propValue : scope.row

      return item[fn.name][fn.type](getParent.value, args)
    }

    // 匹配 render 开头的函数
    const getMatchRenderFunction = (obj) => {
      return Object.keys(obj).find((key) => {
        const matchRender = key.match(/^render.*/)
        return matchRender && matchRender[0]
      })
    }

    const isFunction = (fn) => {
      return isFn(fn)
    }

    const handlePageChange = (val) => {
      proxy.$emit('getList', Object.assign(props.filterParams, { page: val }))
    }

    const handleSizeChange = (val) => {
      proxy.$emit('getList', Object.assign(props.filterParams, { pageSize: val }))
    }

    const getHeaderActions = (item) => {
      return {
        ...item.attrs
      }
    }

    const stopBubbles = (e) => {
      const event = e || window.event
      if (event && event.stopPropagation) {
        event.stopPropagation()
      } else {
        event.cancelBubble = true
      }
    }

    const handleNativeClick = ({ isBubble }, e) => {
      // 考虑到单元格内渲染了组件，并且组件自身可能含有点击事件，故添加了阻止冒泡机制
      // 若指定 isBubble 为 false，则当前单元格恢复冒泡机制
      if (
        isBoolean(isBubble) &&
        !isBubble
      ) return

      stopBubbles(e)
    }

    return {
      getParent,
      getPagination,
      renderTypeList,
      getActionList,

      getAttrsValue,
      getValue,
      getRenderValue,
      getMatchRenderFunction,
      isFunction,
      handlePageChange,
      handleSizeChange,
      getHeaderActions,
      stopBubbles,
      handleNativeClick
    }
  }
})
</script>

<style lang="scss" scoped>
.table-list-container {
  .table-pagination {
    padding-top: 20px;
  }
  .header {
    display: flex;
    padding-bottom: 20px;
    .header-actions {
      flex: 1;
      overflow-x: auto;
      .overflow-box {
        display: flex;
        flex-direction: row-reverse;
        overflow-x: auto;
        white-space: nowrap;
        :deep() .el-button:nth-child(1) {
          margin-left: 10px;
        }
      }
    }
  }
  .el-table {
    :deep() th {
      font-size: 14px;
    }
    :deep() td {
      font-size: 14px;
    }
  }
}
</style>
