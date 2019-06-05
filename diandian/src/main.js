// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './uitls/rem'
import Axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
// require styles
import 'swiper/dist/css/swiper.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
