<template>
  <b-alert show>
    <app-logo/>
    Hello Bootstrap!
    <font-awesome-icon icon="spinner" spin />
  </b-alert>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
</style>
