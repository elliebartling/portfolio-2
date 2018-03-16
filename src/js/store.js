import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import find from 'lodash/find'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],
    pages: [],
    work: []
  },
  getters: {
    pageByTitle: (state) => (title) => {
      return find(state.pages, { title: title })
    }
  },
  mutations: {
    push (state, args) {
      state[args.key].push(args.data)
    },
    set (state, args) {
      state[args.key] = args.data
    },
  }
})

axios.get('/api/index.json')
  .then((res) => {
    console.log(res)
    store.commit('push', { key: 'pages', data: res.data })
  })

axios.get('/api/posts.json')
  .then((res) => {
    console.log(res)
    store.commit('set', { key: 'posts', data: res.data.result })
  })

axios.get('/api/work.json')
  .then((res) => {
    console.log(res)
    store.commit('set', { key: 'work', data: res.data.result })
  })

export { store }
