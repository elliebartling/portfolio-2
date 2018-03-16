<template>
  <div id="home" v-if="contents" v-html="contents.contents">
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    contents: function() {
      return this.$store.getters.pageByTitle('Home')
    }
  },
  created() {
  }
}
</script>
