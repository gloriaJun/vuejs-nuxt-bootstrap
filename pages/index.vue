<template>
  <p>Header and footers using props.</p>
</template>

<script>
import contentData from '~/assets/data.json'

export default {
  components: {
  },
  head () {
    return {
      title: contentData.vas.meta.title,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon_vas.ico' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
