<template>
    <div class="warp">
        <div class="carousel" 
        v-for="(img,index) in imges"
        v-if="selctindex === index"
        :key="index"
        >
            <img :src="img">
        </div>
        <div class="title">
            <div class="inner"
            :class="{
                active: selctindex === index
            }"
            v-for="(item,index) in titles"
            @click="selctindex = index"
            :key="index"
            >{{item.title}}</div>
        </div>
        <div class="btnleft" @click="btnleft">&lt;</div>
        <div class="btnright" @click="btnright">&gt;</div>
    </div>
</template>

<script>
import imges1 from '@/assets/imges/1.jpg'
import imges2 from '@/assets/imges/2.jpg'
import imges3 from '@/assets/imges/3.jpg'
import imges4 from '@/assets/imges/4.jpg'
import imges5 from '@/assets/imges/5.jpg'
    export default {
        data(){
            return{
                selctindex:0,
                timer:null,
                imges:[
                    imges1,
                    imges2,
                    imges3,
                    imges4,
                    imges5
                    ],
                titles:[
                        {
                            title:'关注'
                        },
                        {
                            title:'推荐'
                        },
                        {
                            title:'时事'
                        },
                        {
                            title:'娱乐'
                        },
                        {
                            title:'体育',
                        }
                    ],
                }
        },
        methods:{
            btnleft(){
                this.selctindex--;
                if(this.selctindex < 0){
                    this.selctindex=4
                }
            },
            btnright(){
                this.selctindex++;
                if(this.selctindex > 4){
                    this.selctindex=0
                }
            },
            play(){
                setInterval(this.btnright,2000)
            },
            stop(){
                clearInterval(this.timer)
            },
            move(){
                this.timer=setInterval(this.btnright,2000)
            }
        },
         // 钩子函数
         created() {
                this.play()
            },

    
    }
</script>

<style>
     html,body{
            margin: 0px;
            padding: 0px;
        }
        .warp{
            width: 600px;
            height: 400px;
            margin: 90px auto;
            position: relative;
        }
        .warp .carousel{
            border-top-right-radius: 20px;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            top: 0px;
            left: 0px;
            
        }
        .warp .carousel img{
            width: 750px;
            height: 400px;
        }
        .warp .title{
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 10px;
            display: flex;
            justify-content:space-evenly;
            align-items: center;
            z-index: 10;
        }
        .warp .title .inner{
            border: 1px solid #eee;
            width: 60px;
            height: 30px;
            border-radius: 10px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
        }
        .warp .title .inner.active{
            background:linear-gradient(aqua,cornflowerblue,aqua);
            color: #fff;
        }
        .warp .btnleft{
            width: 30px;
            height: 50px;
            position: absolute;
            top: 50%;
            left: 10px;
            
        }
        .warp .btnright{
            width: 30px;
            height: 50px;
            position: absolute;
            top: 50%;
            right: 10px;
        }
        .warp .btnleft,
        .warp .btnright{
            background: rgba(0,0,0, .1);
            cursor: pointer;
            font-size: 24px;
            text-align: center;
            line-height: 50px;
            color: rgba(0,0,0, .1);
        }
        .warp .btnleft:hover{
            color: rgba(255, 255, 255, 0.6);
        }
        .warp .btnright:hover{
            color: rgba(255, 255, 255, 0.6);
        }

</style>