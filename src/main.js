import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import qs from 'qs'
import filter from './components/filter'
import './assets/css/reset.css'
import './assets/css/style.css'

Vue.use(mint)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})

//全局过滤器 filter
for (var k in filter) {
    Vue.filter(k, filter[k]);
}
