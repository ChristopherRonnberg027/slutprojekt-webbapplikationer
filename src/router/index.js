import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import LoginForm from '../views/LoginForm.vue'
import MyAccount from '../views/MyAccount.vue'
import Products from '../views/Products.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SingleProduct from '../views/SingleProduct'

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
    component: Checkout
  },
  {
    path: '/loginform',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'SingleProduct',
    component: SingleProduct
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
