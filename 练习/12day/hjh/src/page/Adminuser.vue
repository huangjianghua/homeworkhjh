<template>
    <div class="app">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- 面包屑 -->
          <div class="panel">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/Admin' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>用户管理</el-breadcrumb-item>
              <el-breadcrumb-item>{{activeName}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 选项卡1 -->
            <el-tabs v-model="activeName">
              <el-tab-pane label="用户信息" name="用户信息">
                <!-- 用户列表 -->
                <el-table
                v-loading="loading"
                :data="tableData"
                stripe
                style="width: 100%">
                  <el-table-column
                  prop="id"
                  label="ID"
                  width="80">
                  </el-table-column>
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
                <!-- 分页跳转 -->
                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40, 50]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100">
                  </el-pagination>
                </div>
              </el-tab-pane>
              <!-- 选项卡2 -->
              <el-tab-pane label="配置管理" name="配置管理">配置管理</el-tab-pane>
              <!-- 选项卡3 -->
              <el-tab-pane label="角色管理" name="角色管理">角色管理</el-tab-pane>
              <!-- 选项卡4 -->
              <el-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
          data() {
            return {
              currentPage4:4,
              activeName:'用户信息',
              tableData: [{
                id:1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                 id:2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                 id:3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                 id:4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:5,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:6,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:7,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:8,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:9,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              },
               {
                 id:10,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }
              ],
              loading:false
            }
          },
          methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
        // methods: {
        //   handleClick(tab, event) {
        //     console.log(event);
        //   }
        // },
    created() {
  
      
    },
    }
</script>

<style scoped>
  .app{
    height: 100%;
  }
  .panel{
    background: #fff;
    padding: 10px;
  }
  .block{
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
  }
</style>