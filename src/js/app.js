import Vue from 'vue'
import axios from 'axios'
import { router } from './router.js'
import { store } from './store.js'

const app = new Vue({
  router,
  store,
  data() {
    return {
      pages: [],
      posts: [],
      work: []
    }
  }
}).$mount('#app')
