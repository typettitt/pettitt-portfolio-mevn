import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomeComponent from './components/HomeComponent.vue';
import CommentsComponent from './components/CommentsComponent.vue';


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
    name: 'comments',
    path: '/comments',
    component: CommentsComponent
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });
const DEFAULT_TITLE = 'Tyler Pettitt';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
});


//jwt for API security
axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDEzOTk2MTh9.BJuivuH-Nx-fU10OpbBsD3qyhnpj6mhVAFiX0wwoM6c';

new Vue(Vue.util.extend({ router }, App)).$mount('#app');