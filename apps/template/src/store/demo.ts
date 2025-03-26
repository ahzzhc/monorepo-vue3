import { defineStore } from 'pinia'
export const demoStore = defineStore('demo', {
  state: () => {
    return {
      demoString: ''
    }
  },
  actions: {
    async setDemoVal() {
      this.demoString = 'hello'
    }
  }
})
