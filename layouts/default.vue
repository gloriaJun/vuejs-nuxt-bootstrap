<template>
  <div id="app">
    <app-nav-bar
      :brand-logo-image="{src: '/vas_m.png'}"
      :brand-name="'VAS'"/>
    <b-container fluid>
      <nuxt/>
    </b-container>
    <app-footer/>
  </div>
</template>

<script>
import AppNavBar from '~/components/nav/AppNavBar.vue'
import AppFooter from '~/components/footer/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavBar,
    AppFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
