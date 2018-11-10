<template>
    <div class="app">
            <!-- 头部 -->
                <PageHeader :dropdownmeue="dropdownmeue"></PageHeader>
            <el-container>
                <!-- 左侧栏 -->
                <el-aside width="200px">
                    <PageMenu :mains="mains"/>
                </el-aside>
                <!-- 中间内容 -->
                <el-main>
                     <router-view></router-view>
                </el-main>
            </el-container>
    </div>
</template>

<script>
// 引入头部组件
import PageHeader from '@/components/page/Header'
// 引入中间内容组件
import PageMenu from '@/components/page/menu'
    export default {
        components:{
            PageHeader,
            PageMenu
        },
        data(){
            return{
                dropdownmeue:[
                    {
                        name:'账号管理'
                    },
                    {
                        name:'安全退出'
                    }
                ],
                mains:[
                    {
                        name:'模块管理',
                        children1:[
                            {
                                name:'用户管理',
                                path
                                children2:[
                                    {
                                        name:'用户信息',
                                        children3:[
                                            {
                                                name:'用户关注'
                                            },
                                            {
                                                name:'用户点赞'
                                            },
                                            {
                                                name:'用户收藏'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name:'信息管理'
                            },
                            {
                                name:'考试管理'
                            },
                            {
                                name:'实验室管理'
                            },
                            {
                                name:'大作业管理'
                            },
                            {
                                name:'监控管理'
                            },
                        ]
                    },
                    {
                        name:'系统管理',
                        children1:[
                            {
                                name:'用户管理'
                            },
                            {
                                name:'信息管理'
                            },
                            {
                                name:'考试管理'
                            }
                        ]
                    }

                ]
                }
            }
        }
    
</script>

<style scoped lang="less">
    .app{
        height: 100%;
            display: flex;
            flex-direction: column;
        .title{
            font-size: 22px;
        }
    }
    .el-container{
    height: 100%;
    }
    
</style>