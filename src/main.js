import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import qs from 'qs'

Vue.use(mint)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
