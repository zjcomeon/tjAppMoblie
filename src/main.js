import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/reset.css'
import './assets/styles/index.scss'
import VueResource from 'vue-resource'

import 'lib-flexible'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
