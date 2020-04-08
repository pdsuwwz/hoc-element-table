<template>
  <div>
    <component
      v-for="(item, index) in getCellList"
      :is="item.name"
      :key="index"
      :row="row"
      v-model="item.data"
    />
  </div>
</template>

<script>
export default {
  props: {
    parent: {
      type: Object,
      dafault () {
        return {}
      }
    },
    row: {
      type: Object,
      dafault () {
        return {}
      }
    },
    cellList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // fix:  https://github.com/pdsuwwz/hoc-element-table/issues/8
      getCellList: this.cellList
    }
  },
  created () {
    this.$options.components = this.parent.$options.components
  }
}
</script>
