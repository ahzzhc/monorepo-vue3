export const directives = (app: any) => {
  app.directive('debounce', {
    mounted(el: any, binding: any) {
      if (typeof binding.value !== 'function') return
      el.timer = null
      el.handler = function () {
        if (el.timer) {
          clearTimeout(el.timer)
        }
        el.timer = setTimeout(() => {
          binding.value.apply(this, arguments)
        }, 2000)
      }
      el.addEventListener('click', el.handler)
    },
    beforeUnmount(el: any) {
      if (el.timer) {
        el.timer = null
        clearTimeout(el.timer)
      }
      el.removeEventListener('click', el.handler)
    }
  })
}
