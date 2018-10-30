<template>
    <div>
        <h3>商品详情</h3>
        <h2>{{title}}</h2>
        <h2>{{id}}</h2>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:'',
                title:''
            }
        }, 
        created() {
            this.id=this.$route.params.ghg
            this.title="商品类型"+this.$route.params.ghg
            console.log(this.$route)
        },
        watch:{
            $route(v){
                console.log(this.$route)
                this.id=v.params.ghg
                this.title="商品类型"+v.params.ghg
            }
        },
       
    }
</script>

<style scoped>

</style>