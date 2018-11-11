<template>
  <div id="tech-stack" v-bind:class="{ rendered: rendered }">
    <h4>Tech Stack</h4>
    <radar :chartData="chartData" :options="options"></radar>
  </div>
</template>
<script>
import { Radar } from 'vue-chartjs'
export default {
  data() {
    return {
      rendered: false,
      chartData: {
        labels: ['UX Design', 'UI Design', 'Typography', 'IxD', 'Front-End Web Development', 'Graphic Design', 'Client Presentations', 'User Research'],
        datasets: [
          {
            label: 'Experience',
            data: [80, 85, 70, 70, 80, 60, 70, 50],
            lineTension: 0.1,
            backgroundColor: 'rgba(0,13,255,.5)',
            borderColor: '#000DFF',
            pointBackgroundColor: 'white',
            pointBorderColor: '#000DFF',
            pointBorderWidth: 4,
          }
        ]
      },
      options: {
        scale: {
          display: true,
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20
          },
          pointLabels: {
            fontSize: 14
          },
          gridLines: {
            color: '#EEEEEE',
            lineWidth: 2,
            tickMarkLength: '2'
          }
        }
      }
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
