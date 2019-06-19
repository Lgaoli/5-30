// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './uitls/rem'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
import wx from 'weixin-jsapi'
// import ajax from './lib/ajax/Ajax.js'//----------------注意这个地方--axios



//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]


Vue.prototype.$axios = axios
Vue.prototype.$ajax = axios;//---------------------------注意这个地方--axios
Vue.config.productionTip = false
// Axios.defaults.withCredentials = true;
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
// require styles
import 'swiper/dist/css/swiper.css'
// import 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js'
/* eslint-disable no-new */



// const router = new VueRouter({
//   routes
// })

// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//       sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//       next({path: '/login'})
//   } else {
//       next()
//   }
// })
Axios.defaults.headers.common['Authentication-Token'] = store.state.token;
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  //判断是否存在token，如果存在将每个页面header都添加token
  if (store.state.token) {
    config.headers.common['Authentication-Token'] = store.state.token
  }

  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// http response 拦截器
Axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {

    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('del_token');
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response.data)
  });

new Vue({
  el: '#app',
  router,
  store, wx,
  components: { App },
  template: '<App/>'
})
