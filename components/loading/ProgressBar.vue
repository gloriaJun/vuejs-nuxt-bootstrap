<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped progress-bar-animated"
      role="progressbar"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="{ width: value + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: { // 진행율 표시할 숫자 값
      type: Number,
      default () { return 0 }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
