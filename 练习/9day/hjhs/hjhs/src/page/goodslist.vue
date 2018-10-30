<template>
    <div>
        <h2>商品页面</h2>
        <p v-for="(item,index) in list" :key="index">
            <router-link :to="'/goods/types/0'+(index+1)">商品类型{{index+1}}</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: Array(6)
            }
        },
    }
</script>

<style scoped>

</style>