import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import ShopIndex from '../components/ShopIndex.vue'
import Sol from '../components/shops/Sol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/shops',
    name: 'ShopIndex',
    component: ShopIndex
  },
  {
    path: '/shops/sol',
    name: 'Sol',
    component: Sol
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
