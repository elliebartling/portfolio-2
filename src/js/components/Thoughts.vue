<template>
  <div id="highlights" v-bind:class="{ rendered: rendered }">
    <h4>{{ subtitle }}</h4>
    <div class="row">
      <div v-for="(w, index) in posts" v-if="index < number" class="posts-post">
        <a :href="'/' + w.path">
          <img :src="w.image" />
        </a>
        <p class="tag">{{ w.tag }}</p>
        <a :href="'/' + w.path">
          <h3 class="title">{{ w.title }}</h3>
        </a>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['number', 'subtitle'],
  data() {
    return {
      rendered: false
    }
  },
  computed: {
    posts: function() {
      return this.$store.getters.getPosts
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rendered = true
    })
  }

}
</script>
