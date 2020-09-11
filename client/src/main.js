import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from './components/HomeComponent.vue';
import ReviewComponent from './components/ReviewComponent.vue';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.prototype.moment = moment

Vue.config.productionTip = false;

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent,
    meta: {
      title: 'Tyler Pettitt'
    }
  },
  {
    name: 'review',
    path: '/review',
    component: ReviewComponent
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });
const DEFAULT_TITLE = 'Tyler Pettitt';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');