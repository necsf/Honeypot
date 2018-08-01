import Vue from 'vue'
import Router from 'vue-router'
import vPage from 'v-page'
import HelloWorld from '@/components/HelloWorld'
import Checkstatus1 from '@/components/Checkstatus1'
import Hosthoneypot from '@/components/Hosthoneypot'
import test from '@/components/test'
import fileoperations from '@/components/Hosthoneypots/fileoperations'
import filemap from '@/components/Hosthoneypots/filemap'
import networkusage from '@/components/Hosthoneypots/networkusage'
import registryinfo from '@/components/Hosthoneypots/registryinfo'
import registryassignment from '@/components/Hosthoneypots/registryassignment'
import processoper from '@/components/Hosthoneypots/processoper'
import operationthread from '@/components/Hosthoneypots/operationthread'
import Hungthread  from '@/components/Hosthoneypots/Hungthread'
import replythread  from '@/components/Hosthoneypots/replythread'
import moduleoperation  from '@/components/Hosthoneypots/moduleoperation'

Vue.use(vPage)
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
    },
    {
      path:'/Hosthoneypot',
      name:'Hosthoneypot',
      component: Hosthoneypot,
      children: [
        {
          path:'/test',
          component:test
        },
        {
          path:'/fileoperations',
          component: fileoperations
        },
        {
          path:'/filemap',
          component: filemap

        },
        {
          path:'/networkusage',
          component: networkusage
        },
        {
          path:'/registryinfo',
          component: registryinfo
        },
        {
          path:'/registryassignment',
          component: registryassignment
        },
        {
          path:'/processoper',
          component: processoper
        },
        {
          path:'/operationthread',
          component: operationthread
        },
        {
          path:'/Hungthread',
          component: Hungthread
        },
        {
          path:'/replythread',
          component: replythread
        },
        {
          path:'/moduleoperation',
          component: moduleoperation
        }

      ]
    }

  ]
})
