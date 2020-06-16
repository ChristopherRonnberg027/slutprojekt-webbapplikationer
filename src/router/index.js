import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import MyAccount from '../views/MyAccount.vue'
import Products from '../views/Products.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SingleProduct from '../views/SingleProduct'
import Register from '../views/Register'
import AdminArea from '../views/AdminArea'
import store from "../store/index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next()
      } else {
        next({ name: 'ShoppingCart' })
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: async (to, from, next) => {
      if (!store.state.user) {
        await store.dispatch('setCartAndUser')
      }
      if (store.state.user) {
        next({ name: 'MyAccount' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount,
    beforeEnter: async (to, from, next) => {
      if (!store.state.user) {
        next({ name: 'Login' })
      } else {
        await store.dispatch("getOrders");
        next()
      }
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'SingleProduct',
    component: SingleProduct,
    props: true
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/admin',
    name: 'AdminArea',
    component: AdminArea,
    meta: { reqAdmin: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.user) {
    await store.dispatch('setCartAndUser')
  }
  if (to.meta.reqAdmin) {
    if (!store.state.user) {
      next({ name: 'Login' })
    } else if (store.state.user.role === 'admin') {
      next();
    } else if (store.state.user.role === 'customer') {
      next({ name: 'MyAccount' })
    }
  } else {
    next();
  }
})

router.afterEach((to, from) => {
  if (to.name === 'Products' && from.name !== 'SingleProduct') {
    window.scrollTo(0, 0)
  }
  if (to.name !== 'Products') {
    window.scrollTo(0, 0)
  }
  if (to.name === 'SingleProduct') {
    window.scrollTo(0, 200)
  }
})

export default router
