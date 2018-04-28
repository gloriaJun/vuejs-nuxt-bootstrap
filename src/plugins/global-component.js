import Vue from 'vue'
import VipIcon from '@/components/icon/VipIcon.vue'

const components = {
  VipIcon
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
