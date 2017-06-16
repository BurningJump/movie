import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  	routes: [
  		{ path: '/Find', name: 'Find', component: r => require.ensure([], () => r(require('./../components/Find')), 'Find')},
  		{ path: '/Hot', name: 'Hot', component: r => require.ensure([], () => r(require('./../components/Hot')), 'Hot')},
  		{ path: '/Login', name: 'Login', component: r => require.ensure([], () => r(require('./../components/Login')), 'Login')},
  		{ path: '/Setting', name: 'Setting', component: r => require.ensure([], () => r(require('./../components/Setting')), 'Setting')},
  		{ path: '/User', name: 'User', component: r => require.ensure([], () => r(require('./../components/User')), 'User')}
  	]
})
