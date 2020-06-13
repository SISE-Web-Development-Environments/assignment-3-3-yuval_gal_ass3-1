import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Shtut from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/shtut',
    name: 'About',
    component: Shtut
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
