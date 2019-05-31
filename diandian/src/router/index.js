import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

const Catalog = r => require.ensure([], () => r(require('../pages/Catalog/Catalog.vue')), 'My')
const My = r => require.ensure([], () => r(require('../pages/My/My.vue')), 'My')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },{
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    },{
      path: '/My',
      name: 'My',
      component:My
    },
    
  ]
})
