import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
const Home = r => require.ensure([], () => r(require('../pages/Home/Home.vue')), 'Home')
const Catalog = r => require.ensure([], () => r(require('../pages/Catalog/Catalog.vue')), 'My')
const My = r => require.ensure([], () => r(require('../pages/My/My.vue')), 'My')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop.vue')), 'shop')
const Search = r => require.ensure([], () => r(require('../pages/Search/Search.vue')), 'Search')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    }, {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },

  ]
})
