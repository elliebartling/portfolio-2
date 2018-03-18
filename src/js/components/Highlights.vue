<template>
  <div id="highlights" v-bind:class="{ rendered: rendered }">
    <h4>{{ subtitle }}</h4>
    <div class="row">
      <div v-for="(w, index) in work" v-if="index < number" class="work-post">
        <a :href="w.path">
          <img :src="w.image" />
          <h3 class="title">{{ w.title }}</h3>
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
    work: function() {
      return this.$store.getters.getWork
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rendered = true
    })
  }

}
</script>
