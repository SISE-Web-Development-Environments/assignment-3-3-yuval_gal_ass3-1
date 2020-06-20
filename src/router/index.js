import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import Shtut from '../views/About.vue'
import RegisterPage from "../views/RegisterPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: Shtut
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '*',
    name: 'default',
    component: HomePage
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: () => import('../views/RecipePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
