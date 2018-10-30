import Vue from 'vue'
import Router from 'vue-router'

//页面组件
import Home from '@/components/home'
import Admin from '@/page/admin'
import Details from '@/page/details'
import Goods from '@/page/goods'
import Goodslist from '@/page/goodslist'
import Goodstypelist from '@/page/goodstypelist'
import Login from '@/page/login'
import Goodstypes from '@/page/goodstypes'
import Notfound from '@/page/notfound'
import Reg from '@/page/reg'

//注册实例
Vue.use(Router)

export default new Router({
  mode:'history',//路由模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/admin',
      component:Admin
    },
    {
      path:'/goods',
      component:Goods,
      children:[
        {
          path:'/',
          component:Goodslist
        },
        {
          path:':type',
          component:Goodstypes,
          children:[
            {
              path:'/',
              component:Goodstypelist
            },
            {
              path:':ghg',
              component:Details
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/404',
      component:Notfound
    },
    {
      path:'*',
      redirect:'/404'
    }
  ]
})
