<template>
    <div class="app">
        <div class="from">
            <p>管理员请登录</p>
            <div class="user">
                用户名：<input type="text" @input="err.username=''" v-model="from.username">
                <p v-if="err.username"><span class="triangle"></span>{{err.username}}</p>
            </div>
            <div class="password">
                密码：<input type="password" @input="err.password=''" v-model="from.password">
                <p v-if="err.password">{{err.password}}</p>
            </div>
            <div class="btn">
                <button @click="login">登录</button>
            </div>
            <div class="reg">
                <router-link to="/reg">未注册，请您先注册！</router-link>
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
                },
                err:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
                axios.get('api/users/login', {
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
                        console.log(this.err)
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
        width: 340px;
        height: 390px;
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
            font-family: 'Courier New', Courier, monospace;
        }
        // 用户名边框
        .user{
            margin-bottom: 70px;
            margin-top: 10px;
            position: relative;
            input{
                outline:none;
                width: 210px;
                height: 28px;
                border-radius: 6px;
                background:#fff;
                border: 1px solid #999;
            }
          // 错误弹出的用户名框
            p{
                position: absolute;
                top: 18px;
                left: 65px;
                color: black;
                font-size: 14px;
                padding:6px;
                background: #eee;
                border-radius: 4px;
                z-index: 20;
                box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, .4); 
            }
        }
        // 密码边框
        .password{
            margin-bottom: 80px; 
            margin-left: 16px;
            position: relative;
            input{
                outline: none;
                outline:none;
                width: 210px;
                height: 28px;
                border-radius: 6px;
                background:#fff;
                border: 1px solid #999;
            }
            // 错误弹出的密码框
            p{
                position: absolute;
                top: 18px;
                left: 50px;
                color: black;
                text-align: center;
                font-size: 14px;
                background: #eee;
                border-radius: 4px;
                padding: 6px;
                z-index: 20;
                box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, .4);  
            }
        }
        // 按钮边框
        .btn button{
            border: none;
            outline: none;
            width: 240px;
            height: 35px;
            background:rgb(70, 159, 243);
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover{
                background:rgb(35, 49, 248);
            }
        .reg{
            margin-top: 10px;
        }
        
    }
</style>