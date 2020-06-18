import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'
import VueCarousel from 'vue-carousel'
import Vuelidate from "vuelidate";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin
].forEach((x) => Vue.use(x));
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(AsyncComputed)
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
