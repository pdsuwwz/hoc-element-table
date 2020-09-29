<template>
  <div class="table-list-container">

    <header class="header">
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
          >{{ item.text }}</el-button>
        </div>
      </div>
    </header>

    <el-card>

      <div class="filter-form-container">
        <slot/>
      </div>

      <el-table
        ref="hocElTable"
        :data="source"
        style="width: 100%"
        v-loading="loading"
        v-bind="$attrs"
        v-on="tableEvents"
      >

        <el-table-column
          v-for="(item, index) in config"
          :key="index"
          v-bind="getAttrsValue(item)"
        >
          <template v-slot="scope">
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
          :current-page="getPagination.currentPage"
          :page-size="getPagination.pageSize"
          :total="getPagination.total"
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
    filterParams: {
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
      default: ''
    },
    source: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    pagination: {
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
    actionList: {
      type: Array,
      default () {
        return [
          { text: '', action: () => {} }
        ]
      }
    },
    tableEvents: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
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

      this.$set(scope.row, '$index', scope.$index)

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
      this.$emit('getList', Object.assign(this.filterParams, { page: val }))
    },
    handleSizeChange (val) {
      this.$emit('getList', Object.assign(this.filterParams, { pageSize: val }))
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
    },
    getPagination () {
      const params = {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
      return Object.assign({}, params, this.pagination)
    },
    getActionList () {
      return this.actionList.reverse().filter(it => it.text)
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
      overflow-x: auto;
      .overflow-box {
        display: flex;
        flex-direction: row-reverse;
        overflow-x: auto;
        white-space: nowrap;
        /deep/ .el-button:nth-child(1) {
          margin-left: 10px;
        }
      }
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
