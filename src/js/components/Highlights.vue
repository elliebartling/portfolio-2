<template>
  <div id="highlights" v-bind:class="{ rendered: rendered }">
    <h4>{{ subtitle }}</h4>
    <div class="row">
      <div v-for="(w, index) in work" v-if="index < number" :href="'/' + w.path" class="work-post">
        <img :src="w.image" />
        <div class="details">
          <h3 class="title" v-html="widont(w.title)"></h3>
          <p class="tag">{{ w.tag }}</p>
          <p>{{ w.excerpt }}</p>
          <a :href="'/' + w.path">Read the case study →</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import split from 'lodash/split'
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
  methods: {
    widont: function(text) {
      var words = split(text, ' ')
      var newText = text
      if (words.length > 3) {
        var lastSpace = text.lastIndexOf(' ')
        newText = text.substring(0, lastSpace) + '&nbsp;' + text.substring(lastSpace + 1)
      }

      return newText
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rendered = true
    })
  }

}
</script>
