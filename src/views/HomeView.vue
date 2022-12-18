<template>
  <div class="home">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)



export default {
  name: 'HomeView',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ 
          { data: [40, 20, 12] }, 
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    loadDataset() {
      this.axios.get("data.json").then(response => {
        console.log(response.data)
      })
    }
  },
  created() {
    this.loadDataset()
  }
}
</script>
