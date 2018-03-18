import Vue from 'vue'
import axios from 'axios'
import { router } from './router.js'
import { store } from './store.js'


Vue.component('highlights', require('./components/Highlights.vue'))
Vue.component('thoughts', require('./components/Thoughts.vue'))
Vue.component('get-in-touch', require('./components/GetInTouch.vue'))
Vue.component('tech-stack', require('./components/TechStack.vue'))
Vue.component('radar', require('./components/Radar.vue'))


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
  mounted() {
    var dom = this.$el
    var subheads = dom.getElementsByTagName('h4')
    for (var i = 0; i < subheads.length; i++) {
      var width = subheads[i].offsetWidth
      subheads[i].style.left = `${-1 * width}px`
      subheads[i].style.opacity = '1'
    }
  }
}).$mount('#app')
