// index.js
/*
  Libaray
 */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

/*
 custom component
 */
import ProgressBar from './ProgressBar.vue'
// import Loading from './Loading.vue'

storiesOf('Loading', module) // 상위 카테고리 지정
  .add('progressBar', () => ({ // 하위 내용 지정
    components: { ProgressBar },
    template: '<progress-bar :value=20></progress-bar>'
  }))
  // .add('block loading', () => ({ // 하위 내용 지정
  //   components: { Loading },
  //   template: `
  //     <loading :message="'In Progress'" :percent="30"/>`
  // }))
