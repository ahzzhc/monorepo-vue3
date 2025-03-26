import _Icon from './src/index.vue'
import { withInstall } from '../../utils/with-install'

const Icon = withInstall(_Icon)

export default Icon

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof Icon
  }
}
