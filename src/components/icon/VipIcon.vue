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
  vertical-align: middle;
  margin-right: .3rem;
  width: 24px;
  text-align: center;
  font-size: 1.2rem;
}
</style>
