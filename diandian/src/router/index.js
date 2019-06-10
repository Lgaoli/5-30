import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../pages/Home/Home.vue')), 'Home')
const Catalog = r => require.ensure([], () => r(require('../pages/Catalog/Catalog.vue')), 'My')
const My = r => require.ensure([], () => r(require('../pages/My/My.vue')), 'My')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop.vue')), 'shop')
const shop1 = r => require.ensure([], () => r(require('../pages/shop/shop1.vue')), 'shop1')
const Search = r => require.ensure([], () => r(require('../pages/Search/Search.vue')), 'Search')
const Detail = r => require.ensure([], () => r(require('../pages/detail/detail.vue')), 'Detail')
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
    },{
      path: '/shop1',
      name: 'shop1',
      component: shop1
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },{
      path: '/Detail',
      name: 'Detail',
      component:Detail
    },

  ]
})
