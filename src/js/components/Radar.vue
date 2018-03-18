
<script>
import { Radar, mixins } from 'vue-chartjs'
export default {
  props: ['chartData', 'options'],
  extends: Radar,
  mixins: [mixins.reactiveProp],
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  }
}

</script>
