<template>
  <div>
    <component
      :is="item.name"
      v-for="(item, index) in getCellList"
      :key="index"
      v-model="item.data"
      :row="row"
    />
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, ref } from 'vue'

export default defineComponent({
  props: {
    parent: {
      type: Object,
      default () {
        return {}
      }
    },
    row: {
      type: Object,
      default () {
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
  setup (props) {
    const { proxy } = getCurrentInstance()
    proxy.$.components = props.parent.$options.components
    return {
      getCellList: ref(props.cellList)
    }
  }
})
</script>
