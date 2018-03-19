// index.js
/*
  Libaray
 */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  number,
  text,
  boolean
} from '@storybook/addon-knobs/vue'

/*
 custom component
 */
import ImageList from './ImageList.vue'
import ImageDetection from './ImageDetection.vue'

storiesOf('Image', module) // 상위 카테고리 지정
  .add('dectection', () => ({ // 하위 내용 지정
    components: { ImageDetection },
    template: `
      <image-detection
        :image-url="imageUrl"
        :image-size="imageSize"
        :position-list="positionList"></image-detection>
    `,
    data () {
      return {
        imageSize: { width: 580, height: 400 },
        imageUrl: 'https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg',
        positionList: [{x: 8, y: 20, w: 16.6291, h: 33.0335}, {x: 48, y: 30, w: 18.6291, h: 28.0335}]
      }
    }
  }))
  .add('image list', () => {
    const close = boolean('showCloseBtn', false)
    const count = number('itemCount', 3)
    const width = text('listWidth', '600px')
    const height = text('listHeight', '500px')

    return ({ // 하위 내용 지정
      components: { ImageList },
      template: `
      <image-list
        :list-style="{width: '${width}', height: '${height}'}"
        :show-close-button="${close}"
        :item-count="${count}"
        :item-list="itemList">
        <div slot-scope="props">
          <span v-show="props.score">스코어 : {{ props.score }}점</span>
        </div>
      </image-list>
    `,
      data () {
        return {
          itemList: [
            { url: 'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg', score: 40 },
            { url: 'https://images.pexels.com/photos/673546/pexels-photo-673546.jpeg', score: 50 }
          ]
        }
      }
    })
  })
