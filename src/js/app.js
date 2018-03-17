import Vue from 'vue'
import axios from 'axios'
import { router } from './router.js'
import { store } from './store.js'


Vue.component('highlights', require('./components/Highlights.vue'))

const app = new Vue({
  router,
  store,
  data() {
    return {
      pages: [],
      posts: [],
      work: []
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     console.log("ready")
  //     // var subheads = document.getElementsByTagName('h4')
  //     var dom = this.$el
  //     var subheads = dom.getElementsByTagName('h4')
  //     console.log(dom)
  //     console.log(subheads)
  //     for (var i = 0; i < subheads.length; i++) {
  //       console.log(subheads[i])
  //       var width = subheads[i].offsetWidth
  //       subheads[i].style.left = `${-1 * width}px`
  //       console.log(width)
  //     }
  //   })
  // }
}).$mount('#app')
