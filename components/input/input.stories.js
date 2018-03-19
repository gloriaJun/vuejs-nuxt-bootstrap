// index.js
/*
  Libaray
 */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  number,
  boolean
} from '@storybook/addon-knobs/vue'

/*
 custom component
 */
import SelectImageList from './SelectImageList.vue'
import ImageUpload from './ImageUpload.vue'

// input
storiesOf('Input', module) // 상위 카테고테리 지정
  .add('select image list', () => {
    const showSelectedBox = boolean('showSelectedBox', true)
    const count = number('imageCount', 5)

    return ({ // 하위 내용 지정
      components: { SelectImageList },
      template: `
      <select-image-list
        :image-list="imageList"
        :image-count="${count}"
        :show-selected-box="${showSelectedBox}"></select-image-list>`,
      data () {
        return {
          imageList: [
            'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg',
            'https://images.pexels.com/photos/673546/pexels-photo-673546.jpeg',
            'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg',
            'https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg'
          ]
        }
      }
    })
  })
  .add('image upload', () => ({ // 하위 내용 지정
    components: { ImageUpload },
    template: `<image-upload :placeholder="placeholder"></image-upload>`,
    data () {
      return {
        placeholder: '이미지 파일을 선택하거나 이미지 URL을 입력하여 관심인물을 등록하세요'
      }
    }
  }))
