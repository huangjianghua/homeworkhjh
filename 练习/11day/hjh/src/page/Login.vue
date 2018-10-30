<template>
    <div class="app">
        <div class="from">
            <p>管理员请登录</p>
            <div class="user">
                用户名：<input type="text" @input="err.username=''" v-model="from.username">
                <p v-for="(item,index) in err" :key="index">{{err.username}}</p>
            </div>
            <div class="password">
                密码：<input type="password" @input="err.password=''" v-model="from.password">
                <p v-for="(item,index) in err" :key="index">{{err.password}}</p>
            </div>
            <div class="btn">
                <button @click="login">登录</button>
            </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                from:{
                    username:'',
                    password:''
                },
                err:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
                axios.get('api/users', {
                    params:this.from
                    })
                    .then((res) => {
                        const { code, err, data } = res.data
                        if (!code) {
                            //未填写的用户名或密码赋值给data里面的err
                            this.err=err
                           console.log(this.err)
                        }  else {
                            this.$router.push('/Admin')
                        }
                    })
                    .catch(err =>{
                        console.log(err)
                    })

            }
        }
    }
</script>

<style scoped lang="less">
    .app{
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    // 表单盒子
    .from{
        width: 340px;
        height: 390px;
        border: 1px solid #999;
        display: flex;
        flex-direction:column;
        align-items: center;
        padding: 10px;
        background: #eee;
        border-radius: 10px;
        // 用户名边框
        .user{
            margin-bottom: 80px;
            margin-top: 30px;
            position: relative;
            input{
                width: 210px;
                height: 28px;
                border-radius: 6px;
                background:rgba(4, 0, 0, 0.2);
            }
            p{
                width: 210px;
                height: 28px;
                position: absolute;
                top: 18px;
                left: 65px;
                color: red;
                font-size: 14px;
                line-height: 28px;
            }
        }
        // 密码边框
        .password{
            margin-bottom: 80px; 
            margin-left: 16px;
            position: relative;
            input{
                width: 210px;
                height: 28px;
                border-radius: 6px;
                background:rgba(4, 0, 0, 0.2); 
            }
            p{
                width: 210px;
                height: 28px;
                position: absolute;
                top: 18px;
                left: 50px;
                color: red;
                font-size: 14px;
                line-height: 28px;
            }
        }
        // 按钮边框
        .btn button{
            border: none;
            width: 240px;
            height: 35px;
            background:rgb(5, 5, 226);
            color: #fff;
            border-radius: 4px;
        }
        
    }
</style>