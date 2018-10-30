import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner'
import Btn from '@/components/btn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Btn',
      component: Btn
    }
  ]
})
