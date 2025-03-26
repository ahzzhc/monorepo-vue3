<template>
  <div>this is vue3 template!</div>
  <div>store: {{ store.demoString }}</div>
  <div>
    directive:
    <button
      v-debounce="
        () => {
          console.log('这是自定义directive')
        }
      "
    >
      点击我
    </button>
  </div>
  <g-demo msg="democomponent"></g-demo>
  <z-ectemplate></z-ectemplate>
  <z-eptemplate></z-eptemplate>
  <z-icon icon="spinner" type="warning"></z-icon>
  <z-icon icon="arrow-up"></z-icon>
</template>

<script lang="ts" setup>
import { demoStore } from '@/store/demo'
const store = demoStore()
store.setDemoVal()
</script>
