import { defineAsyncComponent, type AsyncComponentLoader } from 'vue'

const modules = import.meta.glob('./g-*/*.vue')

const global = {
  install: (app: any) => {
    for (let [key, value] of Object.entries(modules)) {
      const name = key.split('/')[1]
      const AsyncComp = defineAsyncComponent({
        loader: value as AsyncComponentLoader
      })
      app.component(name, AsyncComp)
    }
  }
}

export default global
