import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import { routes } from './routes';
import App from './App.vue'

import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
