import _Ectemplate from './src/index.vue'
import { withInstall } from '../../utils/with-install'

const Ectemplate = withInstall(_Ectemplate)

export default Ectemplate

declare module 'vue' {
  export interface GlobalComponents {
    ZEctemplate: typeof Ectemplate
  }
}
