import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import AppNavBar from './AppNavBar.vue'

storiesOf('Nav', module) // 상위 카테고리 지정
  .add('NavBar', () => {
    const brandLogoUrl = text('brandLogoUrl', '/logo.png')
    const brandName = text('brandName', '브랜드명')

    return ({ // 하위 내용 지정
      components: { AppNavBar },
      template: `
      <app-nav-bar
        :brand-logo-image="{src: '${brandLogoUrl}', alt: 'vas'}"
        :brand-name="'${brandName}'"></app-nav-bar>
    `
    })
  })
