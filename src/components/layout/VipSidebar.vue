<template>
  <el-aside class="vip-sidebar">
    <el-menu
      mode="vertical"
      @select="onSelectItem">
      <template v-for="(menu, key) in menus">
        <el-submenu
          v-if="menu.items"
          :key="key"
          :index="menu.path">
          <template slot="title">
            <vip-icon
              v-if="menu.icon"
              :icon-name="menu.icon"></vip-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subKey) in menu.items"
            :key="subKey"
            :index="subMenu.path">
            {{ subMenu.title }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item
          v-else
          :key="key"
          :index="menu.path">
          <vip-icon
            v-if="menu.icon"
            :icon-name="menu.icon"></vip-icon>
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'VipSidebar',
  props: {
    menus: {
      type: [Array, Object]
    }
  },
  methods: {
    onSelectItem (key, keyPath) {
      this.$emit('select', keyPath.join(''))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-sidebar, .el-menu {
  height: 100%;
}
</style>
