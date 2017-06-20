import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'activeRouter',
  	routes: [
  		{ path: '/City', name: 'City', component: r => require.ensure([], () => r(require('./../components/City')), 'City')},
  		{ path: '/Find', name: 'Find', component: r => require.ensure([], () => r(require('./../components/Find')), 'Find')},
  		{ path: '/Hot', name: 'Hot', component: r => require.ensure([], () => r(require('./../components/Hot')), 'Hot')},
  		{ path: '/Login', name: 'Login', component: r => require.ensure([], () => r(require('./../components/Login')), 'Login')},
  		{ path: '/Setting', name: 'Setting', component: r => require.ensure([], () => r(require('./../components/Setting')), 'Setting')},
  		{ path: '/Top250', name: 'Top250', component: r => require.ensure([], () => r(require('./../components/Top250')), 'Top250')},
  		{ path: '/User', name: 'User', component: r => require.ensure([], () => r(require('./../components/User')), 'User')},
  		{ path: '*', redirect: '/Hot'}
  	]
})
