import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import VipIcon from './VipIcon'

storiesOf('Icon', module)
  .add('material icon', () => {
    const iconName = text('iconName', 'language')

    return ({
      components: { VipIcon },
      data () {
        return {
          iconName: iconName
        }
      },
      template: `<vip-icon :icon-name=iconName></vip-icon>`
    })
  })
