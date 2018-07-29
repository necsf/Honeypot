import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Checkstatus1 from '@/components/Checkstatus1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path:'/Checkstatus1',
      name:' Checkstatus1',
      component:  Checkstatus1
    }
  ]
})
