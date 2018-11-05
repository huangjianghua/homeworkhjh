<template>
    <div class="found">
        <div class="content">
            <h1>无法请求到！</h1>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
    html,body{
        margin: 0;
        padding: 0;
    }
    .found{
        width: 100%;
        height: 100%;
        background: url(../assets/404.jpg) no-repeat center transparent;
        .content{
            position: absolute;
            left: 40%;
            top: 20%;
            margin:auto;
            h1{
                color: red;
                font-size: 60px;
            }
        }
        
    }
</style>