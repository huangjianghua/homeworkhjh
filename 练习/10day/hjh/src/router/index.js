import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/page/Admin'
import Adminhome from '@/page/Adminhome'
import Adminuser from '@/page/Adminuser'
import Login from '@/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children:[
        {
          path:'/',
          component:Adminhome
        },
        {
          path:'/Adminuser',
          component:Adminuser
        }
      ]
    }
  ]
})
