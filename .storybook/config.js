// config.js
import { configure, addDecorator } from '@storybook/vue';
// addons
import { withKnobs } from '@storybook/addon-knobs/vue';
import { setConsoleOptions } from '@storybook/addon-console'
import vueInfoAddon from "storybook-addon-vue-info/lib/index"

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// for redirect console log
const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude],
});

// add decorator
addDecorator(vueInfoAddon)
addDecorator(withKnobs)

function loadStories() {
  const req = require.context('../src/components/', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
