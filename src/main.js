import Vue from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'
import customTheme from './custom-theme.js'
import CReset from '@chakra-ui/vue/dist/cjs/CReset'


Vue.use(Chakra, {
  extendTheme: customTheme
})

new Vue({
  el: '#app',
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount()