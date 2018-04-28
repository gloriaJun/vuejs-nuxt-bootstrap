import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import {
  VipCard
} from './index'

storiesOf('Card', module)
  .add('card', () => {
    // const iconName = text('iconName', 'language')

    return ({
      components: { VipCard },
      data () {
        return {
          // iconName: iconName
        }
      },
      template: `<vip-card></vip-card>`
    })
  })
