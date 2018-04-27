import Vue from 'vue'
import Vuex from 'vuex'
import find from 'lodash/find'
import filter from 'lodash/filter'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: require('../../build/api/posts.json').result,
    pages: [
      require('../../build/index.json')
    ],
    work: require('../../build/api/work.json').result
  },
  getters: {
    pageByTitle: (state) => (title) => {
      return find(state.pages, { title: title })
    },
    getWork: (state) => {
      return filter(state.work, { isPage: false })
    },
    getPosts: (state) => {
      return filter(state.posts, { isPage: false })
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

export { store }
