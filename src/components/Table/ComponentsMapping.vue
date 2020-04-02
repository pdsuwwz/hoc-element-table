<template>
  <div>
    <component
      v-for="(item, index) in cellList"
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
  created () {
    // TODO: 可优化
    this.$options.components = this.parent.$options.components
  }
}
</script>
