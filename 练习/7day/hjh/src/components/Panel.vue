<template>
    <div class="panel">
       <div class="panel-inner">
           <ul class="list">
               <li v-for="(item,index) in list" :key="index" @click="openoff(item)">
                   <!-- 主目录 -->
                   <div class="mains" >
                       <!-- 小箭头 -->
                       <span ref="ico"></span>
                    {{item.celecbrity}}
                   </div>
                   <ul class="list_inner" v-show="item.hides">
                       <!-- 子目录 -->
                       <li v-for="(child,index) in item.children" :key="index">
                           <div class="child">{{child.introduced}}</div>
                       </li>
                   </ul>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[
                    {
                     celecbrity:"史蒂夫·乔布斯" ,
                     hides:false,
                     children:[
                        {
                            introduced:"史蒂夫·乔布斯（Steve Jobs）史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
                        }
                     ]
                       
                    },
                    {
                     celecbrity:"斯蒂夫·盖瑞·沃兹尼亚克" ,
                     hides:false,
                     children:[
                        {
                            introduced:"斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。"
                        }
                     ]  
                    },
                     {
                     celecbrity:"乔纳森·伊夫" ,
                     hides:false,
                     children:[
                        {
                            introduced:"乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。"
                        }
                     ]  
                    }
                ]
            }
        },
        methods:{
            openoff(item){
                item.hides = !item.hides
                this.list.forEach(val => {
                    if(item !==val){
                        val.hides=false
                    }
                     
                });
               
            },
            // cutti(index){
            //     this.$refs.ico.style.transform = !this.hides ? 'rotate(90deg)':'rotate(0deg)'
            //     this.hides = !this.hides
            // }
        }
    }
</script>

<style>
    .panel-inner{
        width: 500px;
        margin: 90px auto;
    }
    /* 主目录 */
    .panel-inner .list{
        border: 1px solid #999;
        width: 100%;
        list-style: none;
        margin: 0px;
        padding: 0px;
        border-radius: 5px;
        overflow: hidden;
    }
    .panel-inner .list li{
        width: 100%;
        line-height: 35px;
    }
    .panel-inner .list li .mains{
        width: 480px;
        height: 35px;
        background: #eee;
        padding-left: 20px;
        line-height: 35px;
        border-bottom: 1px solid #999;
        position: relative;
        cursor: pointer;
    }
    /* 小箭头 */
    .panel-inner .list li .mains span{
        width: 0px;
        height: 0px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid #999;
        position: absolute;
        top: 14px;
        left: 6px;
    }
    /* 子目录 */
    .panel-inner .list_inner{
        margin: 0px;
        padding: 0px;
    }
    .panel-inner .list_inner li{
        list-style: none;
    }
    .panel-inner .list_inner li .child{
        width: 480px;
        background: #fff;
        padding: 8px 10px;
        line-height: 24px;
    }

</style>