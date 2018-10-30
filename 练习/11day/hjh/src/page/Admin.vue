<template>
    <div class="app">
        <el-container direction>
            <!-- 头部 -->
            <el-header>
                <div class="title">后台管理界面</div>
                <!-- 右边登录说明 -->
                <div class="manage"> 
                    <p class="user"></p> 
                    <p>欢迎登录,
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                管理员<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>账号管理</el-dropdown-item>
                                <el-dropdown-item>安全退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </p> 
                </div>
            </el-header>
            <el-container>
                <!-- 左侧栏 -->
                <el-aside width="200px">
                    <el-col>
                        <el-menu
                        router
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>内容管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/Adminuser">用户信息</el-menu-item>
                                    <el-menu-item index="/loading">loading加载</el-menu-item>
                                    <el-menu-item index="/progressbar">圆形进度条</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-aside>
                <!-- 中间内容 -->
                <el-main>
                <router-view></router-view>
                </el-main>
            </el-container>
    </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
    .app{
        height: 100%;
        .title{
            font-size: 22px;
        }
    }
    .el-menu{
        height: 100%;
        margin: 0px;
    }
    .user{
        border: 1px solid saddlebrown;
        width: 30px;
        height: 30px;
        background: tomato;
        border-radius: 100%;
    }
    .el-dropdown-link{
        color: blue;
    }
</style>