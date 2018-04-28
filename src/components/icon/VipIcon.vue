<template>
  <i
    class="vip-icon material-icons"
    @click="clickIcon">{{ iconName }}</i>
</template>

<script>
export default {
  name: 'VipIcon',
  props: {
    iconName: {
      type: String
    }
  },
  methods: {
    clickIcon () {
      this.$emit('click')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-icon {
  font-size: inherit;
}
</style>
