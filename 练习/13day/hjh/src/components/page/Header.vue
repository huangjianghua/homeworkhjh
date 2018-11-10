<template>
         <el-header>
            <div class="title">后台管理界面</div>
            <!-- 右边登录说明 -->
            <div class="manage"> 
                <p class="users">
                    <img :src="imge">
                </p> 
                <!-- <p>欢迎登录
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,index) in dropdownmeue" :key="index">{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </p>  -->
                <p>请您先登录！
                    <button>
                        <router-link to="/">登录</router-link>
                    </button>
                </p>
            </div>
        </el-header>
</template>

<script>
    export default {
        props:{
            imge:String,
            dropdownmeue:Array
        }
    }
</script>

<style scoped lang="less">
    .el-header{
    width: 100%;
    background: #999;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 0px;
    align-items: center;
        .title{
            font-size: 26px;
        }
        .manage{
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            text-decoration: none;
        }
        }
    }
    .users{
        border: 1px solid saddlebrown;
        width: 30px;
        height: 30px;
        background: tomato;
        border-radius: 100%;
    }
</style>