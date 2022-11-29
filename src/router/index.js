import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import GoodsView from '../views/GoodsView.vue'
import OrdersView from '../views/OrdersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goods',
    name: 'goods',
    component: GoodsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
]

const router = new VueRouter({
  routes
})

export default router
