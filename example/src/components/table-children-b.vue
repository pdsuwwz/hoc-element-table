<template>
  <div class="demo-image">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      fit="contain"
    />
    <p>{{ modelValue }}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup () {
    return {
      url: ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-image {
  text-align: center;
}
</style>
