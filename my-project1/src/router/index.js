import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Systemhomepage from '@/components/Systemhomepage'
import Checkstatus from '@/components/Checkstatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Checkstatus',
      name:' Checkstatus',
      component:  Checkstatus
    },
    {
      path:'/Systemhomepage',
      name:' Systemhomepage',
      component: Systemhomepage
    }
  ]
})
