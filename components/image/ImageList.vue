<template>
  <ul
    class="image-list"
    :style="listStyle">
    <li
      v-for="(value, index) in itemCount"
      :style="itemStyle"
      :key="index">
        <div class="image-wrapper">
          <div
            v-if="itemList[index]"
            class="image-item">
            <img :src="itemList[index].url">
            <div v-if="showCloseButton">
              <div class="overlay">
                <a
                  class="close"
                  @click="onClickDelete(index)">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <icon-box
            v-else
            :box-size="itemStyle"/>
        </div>
        <div
          class="image-description"
          :style="descStyle">
          <slot v-if="itemList[index]" :item="itemList[index]"/>
        </div>
    </li>
  </ul>
</template>

<script>
import IconBox from '@/components/IconBox'

export default {
  name: 'ImageList',
  props: {
    showCloseButton: {
      type: Boolean,
      default: false
    },
    itemCount: { // 출력할 이미지 갯수, 실제 전달된 리스트의 갯수보다 카운트가 크면 빈 이미지를 출력
      type: Number,
      default: 3
    },
    itemList: { // 출력할 이미지 정보가 담긴 배열
      type: Array,
      default: () => { return [] }
    },
    listStyle: { // 출력할 리스트 크기
      type: Object,
      default: () => {
        return {
          width: '600px',
          height: '500px'
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
    itemStyle () {
      let size = parseFloat(this.listStyle.width) / this.itemCount + 'px'
      return {
        minWidth: size,
        minHeight: size,
        width: size,
        height: size
      }
    },
    descStyle () {
      let width = parseFloat(this.itemStyle.width)
      let height = parseFloat(this.itemStyle.height)
      return {
        width: this.itemStyle.width,
        height: parseFloat(this.listStyle.height) - height + 'px',
        fontSize: (width * height * 0.00042) + 'px'
      }
    }
  },
  methods: {
    /**
     * 선택한 이미지 삭제
     * @param index
     */
    onClickDelete (index) {
      this.$emit('delete', index)
    }
  },
  created () {
    if (this.itemCount < this.itemList.length) {
      this.itemCount = this.itemList.length
    }
  }
}
</script>

<style lang="scss" scoped>
%imageSize {
  width: 100%;
  height: 100%;
}
.image-list {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;

  li {
    display: list-item;
    position: relative;
    margin-right: .1rem;
    .image-wrapper, .image-item {
      display: block;
      @extend %imageSize;

      img {
        @extend %imageSize;
      }

      &:hover .overlay {
        display: block;
      }
      .overlay {
        display: none;
        position: absolute;
        background: rgba(0, 0, 0, .4);
        color: #fff;
        @extend %imageSize;
        top: 0;
        left: 0;
        z-index: 1;
        .close {
          position: absolute;
          cursor: pointer;
          font-size: 1.8rem;
          top: 5px;
          right: 8px;
        }
      }
    }
    .image-description {
      border: 1px solid rgba(0,0,0,.125) !important;
      padding-left: 0.3rem;
    }
  }
}
</style>
