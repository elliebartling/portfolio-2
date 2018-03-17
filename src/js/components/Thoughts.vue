<template>
  <div id="highlights" v-bind:class="{ rendered: rendered }">
    <h4>Recent Thoughts</h4>
    <div class="row">
      <div v-for="post in posts" class="work-post">
        <a :href="post.path">
          <img :src="post.image" />
          <h3>{{ post.title }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rendered: false
    }
  },
  computed: {
    posts: function() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rendered = true
    })
  }

}
</script>
