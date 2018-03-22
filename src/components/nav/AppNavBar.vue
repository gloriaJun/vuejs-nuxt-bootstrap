<template>
  <b-navbar
    type="dark"
    variant="info">
    <b-navbar-brand>
      <img
        v-show="brandLogoImage.src"
        :src="brandLogoImage.src"
        :alt="brandLogoImage.alt"
        class="d-inline-block align-middle">
      {{ brandName }}
    </b-navbar-brand>
    <b-collapse
      id="nav_text_collapse"
      is-nav>
      <b-navbar-nav>
        <b-nav-text>Navbar text</b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNavBar',
  props: {
    brandLogoImage: {
      type: Object,
      default: () => { return { src: '', alt: '' } }
    },
    brandName: {
      type: String,
      required: true
    },
    aibrilLogoUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 3.5rem;
  .navbar-brand {
    img {
      width: 3rem;
      height: 2.5rem;
    }
  }
}
</style>
