<template>
    <div class="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to='/Admin'>首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table
            v-loading="loading"
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
          data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        loading:false
      }
    },
    created() {
  
      
    },
    }
</script>

<style scoped>
  .app{
    height: 100%;
  }
  .el-breadcrumb{
    margin-bottom: 20px;
  }
</style>