<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'
onMounted(() => {
  let option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  const myChart = echarts.init(document.getElementById('abc'))
  myChart.setOption(option)
})

// 使用刚指定的配置项和数据显示图表。
</script>

<template>
  <div id="abc" ref="chartRef" style="width: 100%; height: 35vh"></div>
</template>
<style scoped></style>
