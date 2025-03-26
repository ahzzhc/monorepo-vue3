import _Eptemplate from './src/index.vue'
import { withInstall } from '../../utils/with-install'

const Eptemplate = withInstall(_Eptemplate)

export default Eptemplate

declare module 'vue' {
  export interface GlobalComponents {
    ZEptemplate: typeof Eptemplate
  }
}
