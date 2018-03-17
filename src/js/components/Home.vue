<template>
  <div id="home" v-if="contents" v-html="contents" ref="contents"></div>
</template>

<script>
import Vue from 'vue'
var res = Vue.compile(`<div id="home">${this.contents}</div>`)

export default {
  name: 'Home',
  computed: {
    contents: function() {
      return this.$store.getters.pageByTitle('Home').contents
    }
  },
  mounted() {
    this.$nextTick(() => {
      var dom = this.$el
      var subheads = dom.getElementsByTagName('h4')
      for (var i = 0; i < subheads.length; i++) {
        var width = subheads[i].offsetWidth
        subheads[i].style.left = `${-1 * width}px`
      }
    })
  }
}
</script>
