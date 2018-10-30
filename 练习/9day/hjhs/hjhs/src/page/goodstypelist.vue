<template>
    <div>
        <h1>商品类型{{type}}</h1>
        <ul>
            <p v-for="(item, index) in Array(6)" :key="index">
                <router-link :to="'/goods/'+ type+ '/'+ 'nz' + (index+1)">
                    男装{{index+1}}
                </router-link>
            </p>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:Array(6),
                type: ''
            }
        },
        created() {
            const { type } = this.$route.params
            this.type = type
            console.log(type)
        },
        watch: {
            $route({params}) {
                this.type = params.type
            }
        }
    }
</script>

<style scoped>

</style>