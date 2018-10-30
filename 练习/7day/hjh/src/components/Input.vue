<template>
    <div class="app">
        <div class="CustomInput">
            <!-- 左图标 -->
            <span class="left">
                <slot name="left" />
            </span>
            <input class="inputs" v-model="title" type="text">{{title}}
            <!-- 右图标 -->
            <span class="right">
                <slot name="right" />
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 title:''
            }
           
        }
    }
</script>

<style>
    html,body{
        margin: 0px;
        padding: 0px;
    }
    .CustomInput{
        border: 1px solid #999;
        height: 35px;
        width: 300px;
        margin:40px auto;
        border-radius: 4px;
        position: relative;
        padding: 0px;
        background: rgb(204, 204, 204);
    }
    .CustomInput .inputs{
        height: 33px;
        width: 222px;
        margin-left: 35px;
        background: #fff;
        padding: 1px 4px;
        border: none;
    }
    .CustomInput .left{
        width: 37px;
        height: 35px;
        position: absolute;
        left: 0px;
        top: 0px;
        text-align: center;
        line-height: 31px;
        background: rgb(204, 204, 204);
    }
    .CustomInput .left img{
        width: 100%;
        height: 100%;
    }
    .CustomInput .right{
        width: 37px;
        height: 35px;
        position: absolute;
        right: 0px;
        top: 0px;
        text-align: center;
        line-height: 31px;
        background: rgb(204, 204, 204);
    }
    .CustomInput .right img{
        width: 100%;
        height: 100%;
    }
</style>