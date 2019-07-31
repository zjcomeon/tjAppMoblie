import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/reset.css'
import './assets/styles/index.scss'
import VueResource from 'vue-resource'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(preview)
Vue.use(VueResource,{
  fullscreenEl: false
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
