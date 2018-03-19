// index.js
/*
  Libaray
 */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import {
  number
} from '@storybook/addon-knobs/vue'

/*
 custom component
 */
// page header
import PageHeader from './PageHeader.vue'
// icon box
import IconBox from './IconBox.vue'

storiesOf('Page Header', module) // 상위 카테고리 지정
  .add('jumbotron', () => ({ // 하위 내용 지정
    components: { PageHeader },
    template: `
      <page-header
        :title="'Hello, world! 안녕!!'"
        :description="'page Description. 페이지 설명글입니다.'"></page-header>
    `
  }))

storiesOf('Font Awesome', module) // 상위 카테고리 지정
  .add('icon box', () => {
    const width = number('width', 200)
    const height = number('height', 200)

    return ({ // 하위 내용 지정
      components: { IconBox },
      template: `
      <icon-box :box-size="{width: ${width}, height: ${height}}"></icon-box>
    `
    })
  })
