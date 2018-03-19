<template>
  <div class="spinner">
    <div class="overlay">
      <div class="loading">
      <vue-simple-spinner
        size="big"
        line-fg-color="#6eedd8"
        :message="message"/>
      <div v-if="percent !== undefined" class="percent-text">
        <span class="percent-number">{{ percent }}%</span> 처리 완료
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSimpleSpinner from 'vue-simple-spinner'

export default {
  name: 'Spinner',
  props: {
    message: {
      type: String,
      default: ''
    },
    percent: { // 진행율 표시할 숫자 값
      type: Number,
      default: undefined
    }
  },
  data () {
    return {
    }
  },
  components: {
    VueSimpleSpinner
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  /*position: relative;*/
  /*display: block;*/
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, .4);
    margin: auto;
    color: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    .loading {
      position: absolute;
      display: inline-block;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      padding: 3rem 5rem;
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  .percent-text {
    text-align: center;
    color: #757575;
    .percent-number {
      font-weight: bold;
      color: #3F51B5;
    }
  }
}
</style>
