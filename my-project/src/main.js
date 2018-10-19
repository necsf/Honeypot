// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VueResource from 'vue-resource'


/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(VueResource);

// 跨域设置
var axios = require('axios');
axios.defaults.baseURL = 'http://127.0.0.1:8433';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (sessionStorage.getItem("username") == "1") {

        }
        return config
    },
    err => {
        return Promise.reject(err)
    },
)
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    sessionStorage.setItem("username","");

                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== '/systemindex' &&
                    router.replace({
                        path: '/systemindex',
                        query: { redirect: router.currentRoute.path },
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    },
)


// // 设置axios请求的token
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
// //设置请求头
// axios.defaults.headers.post["Content-type"] = "application/json"


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
