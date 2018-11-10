<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  html,body{ 
    width:100%;
    height: 100%;
    margin: 0px;
  }
  .app{
    width: 100%;
    height: 100%;
  }
  .el-aside{
     background-color:#545c64;
  }
  .el-main{
    background: #eee;
    margin: 0px;
  }
</style>
