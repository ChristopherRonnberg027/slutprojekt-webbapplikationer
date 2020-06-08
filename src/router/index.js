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
import Store from "../store/index";

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
      if (Store.state.user) {
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
    beforeEnter: (to, from, next) => {
      if (Store.state.user) {
        next(false)
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
    beforeEnter: (to, from, next) => {
      if (!Store.state.user) {
        next({ name: 'Login' })
      } else {
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

router.beforeEach((to, from, next) => {
  if (to.meta.reqAdmin) {
    if (!Store.state.user) {
      router.push({ name: 'Login' })
    } else if (Store.state.user.role === 'admin') {
      next();
    } else if (Store.state.user.role === 'customer') {
      router.push({ name: 'MyAccount' })
    }
  } else {
    next();
  }
})

export default router
