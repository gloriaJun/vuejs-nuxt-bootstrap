import { storiesOf } from '@storybook/vue'

import AppFooter from './AppFooter.vue'

storiesOf('Footer', module) // 상위 카테고리 지정
  .add('default', () => {
    return ({ // 하위 내용 지정
      components: { AppFooter },
      template: `<app-footer></app-footer>`
    })
  })
