<template>
    <div class="app">
        <div class="from">
            <p>注册</p>
            <div class="user">
                用户名：<input type="text" @click="err.username=''" v-model="from.username">
                <p v-if="err.username">{{err.username}}</p>
            </div>
             <div class="phone">
                手机号：<input type="text" @click="err.phone=''" @input="err.phone=''" v-model="from.phone">
                <p v-if="err.phone">{{err.phone}}</p>
            </div>
            <div class="email">
                邮箱：<input type="text" @click="err.email=''" @input="err.email=''" accesskey="hh" v-model="from.email">
                <p v-if="err.email">{{err.email}}</p>
            </div>
            <div class="password">
                密码：<input type="password" @click="err.password=''" @input="err.password=''" v-model="from.password">
                <p v-if="err.password">{{err.password}}</p>
            </div>
            <div class="btn">
                <button @click="login">注册</button>
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
                    password:'',
                    phone:'',
                    email:''
                },
                err:{
                    username:'',
                    password:'',
                    phone:'',
                    email:''
                }
            }     
        },
        methods:{
            // 向后台请求
            login(){
                axios.get('api/users/reg', {
                    params:this.from
                    })
                    .then((res) => {
                        const { code, err, data } = res.data
                        if (!code) {
                            //未填写的用户名或密码赋值给data里面的err
                            this.err=err
                           console.log(this.err)
                        }  else {
                            this.$router.push('/')
                        }
                    })
                    .catch(err =>{
                        console.log(err)
                        this.$router.push('/Notexist')
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
        background: url(../assets/background.png) no-repeat center;
    }
    // 表单盒子
    .from{
        width: 360px;
        height: 420px;
        display: flex;
        flex-direction:column;
        align-items: center;
        padding: 10px;
        background: rgba(0, 0, 0, .3);
        border-radius: 10px;
        font-family: 'Courier New', Courier, monospace;
        //标题
        p{
            display: inline-block;
            font-size: 24px;
        }
        // 用户名边框
        // 手机号边框
        .user,.phone{
            margin-bottom: 35px;
            position: relative;
            font-size: 16px;
            input{
                outline:none;
                width: 240px;
                height: 28px;
                border-radius: 6px;
                background:#fff;
                border: 1px solid rgb(224, 224, 224);
            }
            // 错误弹出的用户名和密码框
                p{
                    position: absolute;
                    top: 18px;
                    left: 65px;
                    color: black;
                    font-size: 14px;
                    padding: 6px;
                    background: #eee;
                    border-radius: 4px;
                    z-index: 20;
                    box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, .4); 
                }
        }
         // 密码边框
        // 邮箱边框
        .password,.email{
            margin-bottom: 35px;
            position: relative;
            margin-left: 16px;
            font-size: 16px;
            input{
                outline:none;
                width: 240px;
                height: 28px;
                border-radius: 6px;
                background:#fff;
                border: 1px solid rgb(224, 224, 224);
            }
            // 错误弹出的密码和邮箱框
                p{
                    position: absolute;
                    top: 18px;
                    left: 48px;
                    color: black;
                    font-size: 14px;
                    padding:6px;
                    background: #eee;
                    border-radius: 4px;
                    z-index: 20;
                    box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, .4); 
                }
        }
         // 按钮边框
        .btn button{
            border: none;
            width: 280px;
            height: 38px;
            font-size: 16px;
            background:rgb(70, 159, 243);
            color: #fff;
            border-radius: 4px;
            margin-top: 14px;
            cursor: pointer;
        }
        button:hover{
                background:rgb(35, 49, 248);
            }
        
    }
</style>