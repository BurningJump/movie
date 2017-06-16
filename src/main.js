import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import mint from 'mint-ui'

Vue.use(mint)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
