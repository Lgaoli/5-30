import Vue from 'vue'
import Router from 'vue-router'



const Home = r => require.ensure([], () => r(require('../pages/Home/Home.vue')), 'Home')
const Login = r => require.ensure([], () => r(require('../pages/Home/login.vue')), 'Login')
const Catalog = r => require.ensure([], () => r(require('../pages/Catalog/Catalog.vue')), 'My')
const My = r => require.ensure([], () => r(require('../pages/My/My.vue')), 'My')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop.vue')), 'shop')
const Search = r => require.ensure([], () => r(require('../pages/Search/Search.vue')), 'Search')
const Detail = r => require.ensure([], () => r(require('../pages/detail/detail.vue')), 'Detail')
const shippingAddress = r => require.ensure([], () => r(require('../pages/shippingAddress/shippingAddress.vue')), 'shippingAddress')
const AddressEdit = r => require.ensure([], () => r(require('../pages/shippingAddress/AddressEdit.vue')), 'AddressEdit')
const Indent = r => require.ensure([], () => r(require('../pages/Indent/indent.vue')), 'Indent')
const Call = r => require.ensure([], () => r(require('../pages/call/call.vue')), 'Call')
const Agency = r => require.ensure([], () => r(require('../pages/Agency/Agency.vue')), 'Agency')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },

      component: Home
    }, {
      path: '/Login',
      name: 'Login',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Login
    }, {
      path: '/Catalog',
      name: 'Catalog',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Catalog
    }, {
      path: '/My',
      name: 'My',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: My
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: shop
    },
    {
      path: '/Search',
      name: 'Search',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Search,
    }, {
      path: '/Detail',
      name: 'Detail',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Detail
    },
    , {
      path: '/shippingAddress',
      name: 'shippingAddress',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: shippingAddress
    }, {
      path: '/AddressEdit',
      name: 'AddressEdit',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: AddressEdit
    },
    {
      path: '/Indent',
      name: 'Indent',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Indent
    }, {
      path: '/Call',
      name: 'Call',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Call
    }, {
      path: '/Agency',
      name: 'Agency',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Agency
    }

  ],


})

router.beforeEach((to, from, next) => {

  if (window.localStorage.token) {
    next()
  } else {
    if (window.location.href="https://api.ddjingxuan.cn/api/v2/code/user") {
      next()
    } else {
      window.location.href="https://api.ddjingxuan.cn/api/v2/code/user"
    }
  }
})
export default router