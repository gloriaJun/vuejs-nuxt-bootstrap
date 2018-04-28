<template>
  <div id="app">
    <vip-header
      id="header"
      :brand="brand"
      :language="language"
      @selectLang="setLanguage"></vip-header>

    <el-container id="container">
      <vip-sidebar
        id="sidebar"
        :menus="menus"
        @select="selectMenu"></vip-sidebar>

      <el-main id="main">
        {{ $t('headerItems') }}
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {
  VipHeader,
  VipSidebar
} from '@/components/layout/index'
import { mapGetters } from 'vuex'
import languages from '@/locales/languages'

export default {
  components: {
    VipHeader,
    VipSidebar
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'locale'
    ]),
    brand () {
      return this.$t('headerItems.brand')
    },
    language () {
      return {
        currentLang: languages[this.locale].title,
        menus: languages
      }
    },
    menus () {
      return this.$t('menuItems')
    }
  },
  methods: {
    setLanguage (lang) {
      this.$router.replace({ params: { lang } })
    },
    selectMenu (path) {
      console.log(path)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
