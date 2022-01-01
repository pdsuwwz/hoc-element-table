<template>
  <div>
    <div class="block">
      <span class="demonstration">轮播组件</span>
      <el-carousel height="150px">
        <el-carousel-item
          v-for="item in 3"
          :key="item"
        >
          <h3 class="small">
            {{ modelValue }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    }
  }
})
</script>
<style>
  .block {
    text-align: center;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
