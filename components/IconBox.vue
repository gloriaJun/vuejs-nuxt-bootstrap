<template>
  <div
    class="icon-box input-group-addon"
    :style="boxStyle">
    <i
      class="fa"
      :class="faClassName"
      :style="iconStyle"></i>
  </div>
</template>

<script>
export default {
  name: 'IconBox',
  props: {
    // TODO 증명사진, 인물 사진, 객체인식에 관련한 사진 아이콘 요청 필요
    faClassName: {
      type: String,
      default: 'fa-user'
    },
    boxSize: { // 박스 크기
      type: Object,
      default: () => {
        return {
          width: '200px',
          height: '200px'
        }
      }
    }
  },
  computed: {
    boxStyle () {
      let pixel = (key) => {
        return (this.boxSize[key] ? parseFloat(this.boxSize[key]) : 200) + 'px'
      }
      return {
        width: pixel('width'),
        height: pixel('height')
      }
    },
    iconStyle () {
      let boxStyle = this.boxStyle
      return {
        fontSize: (parseFloat(boxStyle.width) * parseFloat(boxStyle.height) * 0.00098) + 'px'
        // fontSize: (parseFloat(boxStyle.width) * parseFloat(boxStyle.height) * 0.0028) + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E0E0;
  i.fa {
    color: #BDBDBD;
  }
}
</style>
