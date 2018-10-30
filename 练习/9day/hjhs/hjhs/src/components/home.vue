<template>
    <div>
        <h1>首页</h1>
        <router-link to="/login">登录</router-link>
        <router-link to="/reg">注册</router-link>
        <router-link to="/goods">商品</router-link>
        <router-link to="/admin">管理</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>