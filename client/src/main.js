import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

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
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });
const DEFAULT_TITLE = 'Tyler Pettitt';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE
  next()
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');