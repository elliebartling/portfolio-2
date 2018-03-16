import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('./components/Home.vue')

// Define standard/default "types" of URLs
const routes = [
  { path: "/", component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})


export { router }
