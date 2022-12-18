<template>
  <div class="home">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :chartData="chart1"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)



export default {
  name: 'HomeView',
  components: { Bar },
  props: {
    dataset: Array
  },
  data() {
    return {
      chart1: {
        labels: [],
        datasets: [ 
          { data: [] }, 
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    chart1Set() {
      var data = [0, 0]

      this.dataset.forEach(item => {
        if(item.gender == 'male') data[0]++;
        else data[1]++;
      })

      this.chart1 = {
        labels: ['male', 'female'],
        datasets: [
          {
            label: 'Gender',
            backgroundColor: '#f87979',
            data
          }
        ]
      }
    }
  },
  mounted() {
    this.chart1Set()
  }
}
</script>
