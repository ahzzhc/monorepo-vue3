import { type Plugin } from 'vue'
import type { App } from 'vue'

export type SFCWithInstall<T> = T & Plugin
export function withInstall<T>(comp: T) {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string }
    app.component(name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
