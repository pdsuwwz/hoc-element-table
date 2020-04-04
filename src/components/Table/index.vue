<template>
  <div class="table-list-container">
    <header class="header">
      <h2>{{ title }}</h2>
      <div class="header-actions">
        <el-button
          v-for="(item, index) in actionList.filter(it => it.text)"
          :key="index"
          type="primary"
          size="small"
          v-bind="getHeaderActions(item)"
          @click="item.action"
        >{{ item.text }}</el-button>
      </div>
    </header>
    <el-card>
      <div class="filter-form-container">
        <slot/>
      </div>
      <el-table
        :data="source.data"
        style="width: 100%"
        v-loading="loading"
        v-bind="$attrs"
      >
        <el-table-column
          v-for="(item, index) in config"
          :key="index"
          v-bind="getAttrsValue(item)"
        >
          <template slot-scope="scope">
            <div v-if="isFunction(getValue(scope, item))">
              <component
                :cellList="getValue(scope, item)()"
                :is="renderTypeList[getMatchRenderFunction(item)].target"
                :row="scope.row"
                :parent="getParent"
              />
            </div>
            <div
              v-else
            >{{ getValue(scope, item) }}</div>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="table-pagination" justify="end" type="flex">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next ,jumper"
          :current-page="pagination.currentPage"
          :page-size="pagination.perPage"
          :total="pagination.total"
          @size-change="handleSizeChange"
          @current-change="handlePageChange"
        />
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { isFunction } from '@/utils/type'
import ElementsMapping from './ElementsMapping'
import ComponentsMapping from './ComponentsMapping'
export default {
  name: 'Table',
  components: {
    ElementsMapping,
    ComponentsMapping
  },
  props: {
    paginationFilter: {
      type: Object,
      default () {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '这是标题'
    },
    source: {
      type: Object,
      default () {
        return {}
      }
    },
    config: {
      type: Array,
      default () {
        return []
      }
    },
    // TODO: header中按钮处理逻辑优化
    actionList: {
      type: Array,
      default () {
        return [
          { text: '', action: () => {} },
          { text: '', action: () => {} }
        ]
      }
    }
  },
  data () {
    return {
      pagination: {},
      renderTypeList: {
        render: {},
        renderHTML: {
          target: 'elements-mapping'
        },
        renderComponent: {
          target: 'components-mapping'
        }
      }
    }
  },
  methods: {
    getAttrsValue (item) {
      const { attrs } = item
      const result = {
        ...attrs
      }
      delete result.prop
      return result
    },
    getValue (scope, configItem) {
      const prop = configItem.attrs.prop

      const renderName = this.getMatchRenderFunction(configItem)
      const renderObj = this.renderTypeList[renderName]

      if (renderObj && this.isFunction(configItem[renderName])) {
        return renderObj.target
          ? this.getRenderValue(scope, configItem, { name: renderName, type: 'bind' })
          : this.getRenderValue(scope, configItem)
      }

      return scope.row[prop]
    },
    getRenderValue (scope, item, fn = { name: 'render', type: 'call' }) {
      const prop = item.attrs.prop

      const propValue = prop && scope.row[prop]
      const args = propValue !== undefined ? propValue : scope.row

      return item[fn.name][fn.type](this.getParent, args)
    },
    // 匹配 render 开头的函数
    getMatchRenderFunction (obj) {
      return Object.keys(obj).find((key) => {
        const matchRender = key.match(/^render.*/)
        return matchRender && matchRender[0]
      })
    },
    isFunction (fn) {
      return isFunction(fn)
    },
    handlePageChange (val) {
      this.$emit('getList', Object.assign(this.paginationFilter, { page: val }))
    },
    handleSizeChange (val) {
      this.$emit('getList', Object.assign(this.paginationFilter, { pageSize: val }))
    },
    getHeaderActions (item) {
      return {
        ...item.attrs
      }
    }
  },
  computed: {
    getParent () {
      return this.$parent
    }
  },
  watch: {
    source: {
      handler () {
        if (this.source.meta) {
          this.pagination = this.source.meta.pagination
        }
      },
      deep: true
    }
  }
}
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
      display: flex;
      justify-content: flex-end;
    }
  }
  .el-table {
    /deep/ th {
      font-size: 14px;
    }
    /deep/ td {
      font-size: 14px;
    }
  }
}
</style>
