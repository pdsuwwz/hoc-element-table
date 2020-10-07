<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Layout'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
 }
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
}

html {
  box-sizing: border-box;
  font-size: 14px;
}
</style>
