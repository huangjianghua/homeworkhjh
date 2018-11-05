import Vue from 'vue'
import Router from 'vue-router'
// 导入管理界面
import Admin from '@/page/Admin'
// 导入管理界面下的欢迎登录子界面
import Adminhome from '@/page/Adminhome'
// 导入管理界面下的用户信息子界面
import Adminuser from '@/page/Adminuser'
// 导入登录界面
import Login from '@/page/Login'
// 导入注册界面
import Reg from '@/page/Reg'
// 导入请求错误返回的错误页面
import Notexist from '@/page/Notexist'
// 导入404页面
import Notfound from '@/page/Notfound'

// 注册Router为vue实例
Vue.use(Router)

export default new Router({
  routes: [
    // 将/设置为登录页面
    {
      path:'/',
      component:Login
    },
    // 配置注册路由
    {
      path:'/reg',
      component:Reg
    },
    // 配置管理界面路由
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      // 访问时需要验证
      meta:{
        auth:true
      },
      // 管理界面下的子路由
      children:[
        {
          path:'/',
          // 欢迎登录界面
          component:Adminhome,
          // 访问时需要验证
          meta:{
            auth:true
          }
        },
        {
          path:'/Adminuser',
          // 用户信息界面
          component:Adminuser,
           // 访问时需要验证
          meta:{
            auth:true
          }
        }
      ]
    },
    // 配置404路由
    {
      path:'/404.html',
      component:Notfound
    },
    {
      path:'*',
      // 路径重定向后当用户输入的路径有误都将会跳转到这个404页面
      redirect:'/404.html'
    },
    {
      path:'/Notexist',
      component:Notexist
    }
    
  ]
})
