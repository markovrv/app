<template>
    <Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
  
<script>
import { Pie } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: 'PieChart',
    components: {
        Pie
    },
    props: {
        chartId: {
            type: String,
            default: 'pie-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => {}
        },
        dataset: Array
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: []
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
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

      this.chartData = {
            labels: ['Male', 'Female'],
            datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651'],
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
  