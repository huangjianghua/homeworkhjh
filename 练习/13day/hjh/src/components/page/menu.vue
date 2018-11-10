<template>
    <el-aside width="200px">
        <el-col>
            <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu :index='index+"1"' v-for="(item,index) in mains" :key="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group v-for="(chid1,jj) in item.children1" :key="jj">
                        <el-menu-item @click="path" :index="jj+1">{{chid1.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-aside>
</template>

<script>
    export default {
        props:{
            mains:Array
        },
        methods:{
            path(){
                if(index==){

                }
                this.router.path('/Adminuser')
            }
        }
    }
</script>

<style scoped>
    .el-menu{
        height: 100%;
        margin: 0px;
    }
</style>