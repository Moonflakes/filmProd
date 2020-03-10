import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {store} from './store';
require("./assets/main.scss");

import Home from "./pages/Home.vue";
import Cast from "./pages/Cast.vue";
import Films from "./pages/Films.vue";
import FilmItem from "./pages/FilmItem.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faEdit)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/cast", component: Cast },
    { path: "/films", component: Films },
    { path: "/film/:id(\\d+)", component: FilmItem, name: 'film' },
    // { path: "/actor/:id(\\d+)", component: Films }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
