import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import buefy from './plugins/buefy';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
require("./assets/main.scss");

import Home from "./components/Home.vue";
import Cast from "./components/Cast.vue";
import Films from "./components/Films.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/cast", component: Cast },
    { path: "/films", component: Films }
  ]
});

Vue.config.productionTip = false

new Vue({
  buefy,
  router,
  render: h => h(App)
}).$mount('#app')
