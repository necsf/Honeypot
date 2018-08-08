import Vue from 'vue'
import Router from 'vue-router'
import vPage from 'v-page'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import Checkstatus1 from '@/components/Checkstatus1'
import Hosthoneypot from '@/components/Hosthoneypot'
import test from '@/components/test'
import index from '@/components/index'
import platform from '@/components/platform'
import applyhoney from '@/components/applyhoney'
import systemindex from '@/components/systemindex'
import honeybuild from '@/components/honeybuild'
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
import HoneyControl from '@/components/HoneyControl'

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
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/index',
      name:'index',
      component:  index,
      children:[
        {
          path:'/applyhoney',
          name:'applyhoney',
          component:  applyhoney
        },
        {
          path:'/platform',
          name:'platform',
          component: platform
        },
        {
          path:'/Checkstatus1',
          name:'Checkstatus1',
          component:  Checkstatus1
        },
        {
          path:'/honeybuild',
          name:'honeybuild',
          component: honeybuild
        },
        {
          path:'/systemindex',
          name:'systemindex',
          component: systemindex
        },
        {
          path:'/test',
          name: 'test',
          component:test
        },
        {
          path:'/Hosthoneypot',
          name:'Hosthoneypot',
          component: Hosthoneypot,
          children: [
            {
              path:'/fileoperations',
              name:'fileoperations',
              component: fileoperations
            },
            {
              path:'/filemap',
              name:'filemap',
              component: filemap

            },
            {
              path:'/networkusage',
              name:'networkusage',
              component: networkusage
            },
            {
              path:'/registryinfo',
              name:'registryinfo',
              component: registryinfo
            },
            {
              path:'/registryassignment',
              name:'registryassignment',
              component: registryassignment
            },
            {
              path:'/processoper',
              name:'processoper',
              component: processoper
            },
            {
              path:'/operationthread',
              name:'operatinthread',
              component: operationthread
            },
            {
              path:'/Hungthread',
              name:'Hungthread',
              component: Hungthread
            },
            {
              path:'/replythread',
              name:'replythread',
              component: replythread
            },
            {
              path:'/moduleoperation',
              name:'moduleoperation',
              component: moduleoperation
            },
          ]
        },
        {
          path:'/honeycontrol',
          name:'honeycontrol',
          component: HoneyControl
        }

      ]
    },




  ]
})
