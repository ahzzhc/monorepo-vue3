<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import * as echarts from 'echarts'

defineOptions({
  name: 'z-ectemplate'
})

const state = reactive({
  option: {
    tooltip: {},
    grid: {
      top: '10%',
      left: '3%',
      right: '3%',
      bottom: '5%',
      containLabel: true
    },
    dataset: {
      source: [
        ['product', '人才', '企业'],
        ['周一', 43.3, 85.8],
        ['周二', 83.1, 73.4],
        ['周三', 86.4, 65.2],
        ['周四', 72.4, 53.9],
        ['周五', 83.1, 73.4],
        ['周六', 86.4, 65.2],
        ['周日', 72.4, 53.9]
      ]
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        barWidth: '10',
        itemStyle: {
          color: '#6DA6EA'
        }
      },
      {
        type: 'bar',
        barWidth: '10',
        itemStyle: {
          color: '#FBC605'
        }
      }
    ]
  }
})
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chartBar'))
  // 绘制图表
  myChart.setOption(state.option)
  // 图表响应式
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
</script>
<template>
  <div id="chartBar"></div>
</template>
<style scoped>
#chartBar {
  height: 11.63rem;
  background: #ffffff;
  border-radius: 0.27rem;
  width: 100%;
}
</style>
