import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import Shtut from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
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
    path: '*',
    name: 'default',
    component: HomePage
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (Vue.$cookies.get('ass_session')) {
      next();
    } else {
      next({ name: 'Login' });
    }
  }
  next();
});

export default router
