import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
require("./assets/main.scss");

import Home from "./pages/Home.vue";
import Cast from "./pages/Cast.vue";
import Films from "./pages/Films.vue";
Vue.use(Buefy)

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
  router,
  render: h => h(App)
}).$mount('#app')
