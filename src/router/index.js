import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Shtut from '../views/About.vue'
import NotFound from '../views/NotFoundPage.vue'

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
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: () => import('../views/RecipePage.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
