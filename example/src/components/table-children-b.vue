<template>
  <div class="demo-image">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      fit="contain"
    />
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-image {
  text-align: center;
}
</style>
