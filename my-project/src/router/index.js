import Vue from 'vue'
import Router from 'vue-router'
import vPage from 'v-page'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import Checkstatus1 from '@/components/Checkstatus1'
import Hosthoneypot from '@/components/Hosthoneypot'
import test from '@/components/test'
import index from '@/components/index'
import UserIndex from '@/components/UserIndex'
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
import Operator from "@/components/Operator"

Vue.use(vPage)
Vue.use(Router)
const routes = [
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
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component:  index,
        children:[
            {
                path:'/applyhoney',
                name:'applyhoney',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component:  applyhoney
            },
            {
                path:'/Checkstatus1',
                name:'Checkstatus1',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component:  Checkstatus1
            },
            {
                path:'/honeybuild',
                name:'honeybuild',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: honeybuild
            },
            {
                path:'/Hosthoneypot',
                name:'Hosthoneypot',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: Hosthoneypot,
                children: [
                    {
                        path:'/fileoperations',
                        name:'fileoperations',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: fileoperations
                    },
                    {
                        path:'/filemap',
                        name:'filemap',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: filemap

                    },
                    {
                        path:'/networkusage',
                        name:'networkusage',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: networkusage
                    },
                    {
                        path:'/registryinfo',
                        name:'registryinfo',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: registryinfo
                    },
                    {
                        path:'/registryassignment',
                        name:'registryassignment',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: registryassignment
                    },
                    {
                        path:'/processoper',
                        name:'processoper',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: processoper
                    },
                    {
                        path:'/operationthread',
                        name:'operatinthread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: operationthread
                    },
                    {
                        path:'/Hungthread',
                        name:'Hungthread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: Hungthread
                    },
                    {
                        path:'/replythread',
                        name:'replythread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: replythread
                    },
                    {
                        path:'/moduleoperation',
                        name:'moduleoperation',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: moduleoperation
                    },
                ]
            },
            {
                path:'/honeycontrol',
                name:'honeycontrol',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: HoneyControl
            },
            {
                path: '/Operator',
                name: 'Operator',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: Operator
            },

        ],

    },
    {
        path:'/userindex',
        name:'UserIndex',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component:  UserIndex,
        children:[
            {
                path:'/userindex/applyhoney',
                name:'userindex-applyhoney',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component:  applyhoney
            },
            {
                path:'/userindex/Checkstatus1',
                name:'userindex-Checkstatus1',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component:  Checkstatus1
            },
            {
                path:'/userindex/honeybuild',
                name:'userindex-honeybuild',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: honeybuild
            },
            {
                path:'/userindex/Hosthoneypot',
                name:'userindex-Hosthoneypot',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: Hosthoneypot,
                children: [
                    {
                        path:'/userindex/fileoperations',
                        name:'userindex-fileoperations',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: fileoperations
                    },
                    {
                        path:'/userindex/filemap',
                        name:'userindex-filemap',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: filemap

                    },
                    {
                        path:'/userindex/networkusage',
                        name:'userindex-networkusage',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: networkusage
                    },
                    {
                        path:'/userindex/registryinfo',
                        name:'userindex-registryinfo',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: registryinfo
                    },
                    {
                        path:'/userindex/registryassignment',
                        name:'userindex-registryassignment',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: registryassignment
                    },
                    {
                        path:'/userindex/processoper',
                        name:'userindex-processoper',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: processoper
                    },
                    {
                        path:'/userindex/operationthread',
                        name:'userindex-operatinthread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: operationthread
                    },
                    {
                        path:'/userindex/Hungthread',
                        name:'userindex-Hungthread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: Hungthread
                    },
                    {
                        path:'/userindex/replythread',
                        name:'userindex-replythread',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: replythread
                    },
                    {
                        path:'/userindex/moduleoperation',
                        name:'userindex-moduleoperation',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: moduleoperation
                    },
                    {
                        path: '/userindex/Operator',
                        name: 'userindex-Operator',
                        meta: {
                            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: Operator
                    },
                ]
            },

        ],

    },
    {
        path:'/systemindex',
        name:'systemindex',
        component: systemindex
    },
    {
        path:'/userindex/systemindex',
        name:'userindex-systemindex',
        component: systemindex
    },

];

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("username") == "1") {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/systemindex',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
export default router

