import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import moment from 'moment'
import VueGtag from "vue-gtag";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HomeComponent from './components/HomeComponent.vue'
import CommentsComponent from './components/CommentsComponent.vue'


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
if(process.env.NODE_ENV == 'production'){
  Vue.use(VueGtag, {
    config: { id: "UA-192744249-1"}
  }, router);
}

const DEFAULT_TITLE = 'Tyler Pettitt';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');