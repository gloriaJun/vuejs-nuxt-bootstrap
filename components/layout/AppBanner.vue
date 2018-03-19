<template>
  <nav
    class="banner navbar navbar-expand-md navbar-dark fixed-top">
    <a
      class="navbar-brand"
      href="/">
      <img
        class="banner__icon"
        :src="bannerData.serviceIcon">
        {{ bannerData.serviceName }}
        <span class="banner__txt">{{ bannerData.serviceNameSub }}</span>
    </a>
    <img
      class="banner__logo"
      :src="bannerData.logo">
  </nav>
</template>

<script>
export default {
  name: 'AppBanner',
  props: {
    bannerData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: #17a2b8;
  .banner__icon {
    width: 8%;
    height: 8%;
  }
  .banner__txt {
    font-size: .8rem;
    color: #ECEFF1;
    margin-left: .2rem;
  }
  .banner__logo {
    position: absolute;
    right: 1rem;
    opacity: 0.5;
    width: 80px;
    height: 30px;
  }
}
</style>
