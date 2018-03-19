<template>
  <div
    class="image-detection"
    :style="customStyle">
    <div
      class="target-wrapper"
      :style="customStyle">
      <img
        v-if="imageUrl.trim().length"
        class="target-image"
        :src="imageUrl">
      <icon-box
        v-else
        fa-class-name="fa-picture-o"
        :box-size="customStyle"/>
    </div>
    <div
      class="result-wrapper"
      :style="customStyle"
      v-if="!isResultEmpty">
      <div
        v-for="(position, index) in positionList"
        :key="index">
        <div
          class="rectangle"
          :style="styleObject(position)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBox from '@/components/IconBox'

export default {
  name: 'ImageDetection',
  props: {
    imageUrl: { // 검출에 사용한 이미지
      type: String,
      required: true
    },
    positionList: { // 검출된 결과에 대한 정보를 담은 객체의 배열
      type: Array,
      default: () => {
        return [{x: 0, y: 0, w: 0, h: 0}]
      }
    },
    imageSize: {
      type: Object,
      default: () => {
        return {
          width: 540,
          height: 430
        }
      }
    }
  },
  data () {
    return {}
  },
  components: {
    IconBox
  },
  computed: {
    isResultEmpty () {
      const obj = this.positionList
      return !obj.length || (obj.length === 1 && this.isObjectEmpty(this.positionList[0]))
    },
    customStyle () {
      return {
        maxWidth: this.imageSize.width + 'px',
        maxHeight: this.imageSize.height + 'px',
        width: this.imageSize.width + 'px',
        height: this.imageSize.height + 'px'
      }
    }
  },
  methods: {
    styleObject (obj) {
      let mig = (val) => { return `${val}%` }
      return {
        left: mig(obj.x),
        top: mig(obj.y),
        width: mig(obj.w),
        height: mig(obj.h)
      }
    },
    isObjectEmpty (obj) {
      return !Object.values(obj).some(x => x > 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.image-detection {
  position: relative;
  background-color: #eee;
  .target-wrapper .target-image {
    width: 100%;
    height: 100%;
  }
  .result-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    .rectangle {
      position: absolute;
      border: solid 2px #FF1744;
    }
  }
}
</style>
