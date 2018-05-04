<template>
  <div id="app">
    <vip-header
      id="header"
      :brand="brand"
      :language="language"
      @toggleCollapse="toggleSidebar"
      @selectLang="changeLanguage"></vip-header>

    <el-container id="container">
      <vip-sidebar
        id="sidebar"
        :menus="menus"
        :is-collapse="isCollapse"
        @select="selectMenu"></vip-sidebar>

      <el-main id="main">
        <vip-breadcrumb
          v-if="$_.size(breadcrumb) !== 0"
          :item-list="breadcrumb"></vip-breadcrumb>
        <div class="content">
          <nuxt-child></nuxt-child>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {
  VipHeader,
  VipSidebar,
  VipBreadcrumb
} from '@/components/layout/index'
import { mapGetters } from 'vuex'
import languages from '@/locales/languages'

export default {
  components: {
    VipHeader,
    VipSidebar,
    VipBreadcrumb
  },
  data () {
    return {
      isCollapse: false
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
    },
    breadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      let path = matched[0].path.replace(/\/:lang\?\/?/, '')

      return path.split('/').reduce((result, name, index) => {
        let menu = (index === 0) ? this.menus : result[index - 1].items
        let re = new RegExp(`^/?${name}/?$`)
        result.push(this.$_.find(menu, menu => re.test(menu.path)))
        return result
      }, [])
    }
  },
  created () {
    if (typeof document === 'undefined') return
    let lang = this.$route.params.lang
    this.setLanguage(lang)
  },
  methods: {
    setLanguage (lang) {
      this.$i18n.locale = lang
      if (this.$i18n.locale !== this.locale) {
        this.$store.dispatch('setLanguage', lang)
      }
    },
    toggleSidebar (active) {
      this.isCollapse = active
    },
    changeLanguage (lang) {
      this.$router.replace({params: { lang }})
      this.setLanguage(lang)
    },
    selectMenu (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
