import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import AsyncComputed from 'vue-async-computed'
import VueCarousel from 'vue-carousel'
import VueAxios from "vue-axios";
import VueCookies from 'vue-cookies';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(AsyncComputed)
Vue.use(VueCarousel)
Vue.use(VueCookies)


axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);


Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
