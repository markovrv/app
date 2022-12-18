<template>
  <div class="home">
    <BarChart v-if="dataset.length > 0" :dataset="dataset" />
    <PieChart v-if="dataset.length > 0" :dataset="dataset" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'

export default {
  name: 'HomeView',
  components: { BarChart, PieChart },
  data() {
    return {
      dataset: [],
    }
  },
  methods: {
    loadDataset() {
      this.axios.get("data.json").then(response => {
        this.dataset = response.data;
      })
    }
  },
  created() {
    this.loadDataset()
  }
}
</script>
