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
    
  }
}
</script>
