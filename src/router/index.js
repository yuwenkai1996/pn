import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/modules/User'
import Login from '@/modules/Login'
import Reg from '@/modules/Reg'
import ListPage from '@/modules/ListPage'
import Detail from "@/modules/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/listpage',
      name: 'ListPage',
      component: ListPage
    },{
      path: '/reg',
      name: 'Reg',
      component: Reg
    },{
      path: '/detail/:showid',
      name: 'Detail',
      component: Detail
    }
  ]
})
