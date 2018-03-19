<template>
  <ul class="select-image-list">
    <li
      v-for="(url, index) in imageList"
      :class="{ active: (showSelectedBox && isActive(url)) }"
      :style="imageStyle"
      :key="index"
      @click="onClickImage(url)">
      <a class="image-item img-thumbnail">
        <img :src="url"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SelectImageList',
  props: {
    showSelectedBox: {
      type: Boolean,
      default: false
    },
    imageList: { // 이미지 배열
      type: Array,
      default: () => { return [] }
    },
    imageSize: { // 이미지 크기
      type: Object,
      default: () => {
        return {
          width: 200,
          height: 200
        }
      }
    }
  },
  data () {
    return {
      selectedList: []
    }
  },
  computed: {
    imageStyle () {
      return {
        minWidth: this.imageSize.width + 'px',
        minHeight: this.imageSize.height + 'px',
        width: this.imageSize.width + 'px',
        height: this.imageSize.height + 'px'
      }
    }
  },
  methods: {
    /**
     * image 클릭
     */
    onClickImage (url) {
      if (this.isActive(url)) {
        this.selectedList.splice(this.selectedList.indexOf(url), 1)
        this.selectedList.push(url)
      }
      this.$emit('click', url)
    },
    /**
     * 이미지 선택 여부에 따른 active 활성화 설정
     * @param url
     * @returns {boolean}
     */
    isActive (url) {
      return this.selectedList.includes(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-image-list {
  display: flex;
  padding-left: 0;
  list-style: none;

  li {
    display: list-item;
    margin-right: .5rem;
    cursor: pointer;
    &.active {
      box-shadow: 0 0 0 3px #40C4FF;
    }
    &:hover {
      box-shadow: 0 0 0 3px #007bff;
    }
    .image-item {
      display: block;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
