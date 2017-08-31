import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'activeRouter',
  	routes: [
      { path: '/City', name: 'City', component: r => require.ensure([], () => r(require('./../components/City')), 'City')},
  		{ path: '/Detail', name: 'Detail', component: r => require.ensure([], () => r(require('./../components/Detail')), 'Detail')},
  		{ path: '/Find', name: 'Find', component: r => require.ensure([], () => r(require('./../components/Find')), 'Find')},
  		{ path: '/Hot', name: 'Hot', component: r => require.ensure([], () => r(require('./../components/Hot')), 'Hot')},
  		{ path: '/Login', name: 'Login', component: r => require.ensure([], () => r(require('./../components/Login')), 'Login')},
  		{ path: '/NewMovies', name: 'NewMovies', component: r => require.ensure([], () => r(require('./../components/NewMovies')), 'NewMovies')},
      { path: '/Search', name: 'Search', component: r => require.ensure([], () => r(require('./../components/Search')), 'Search')},
  		{ path: '/Setting', name: 'Setting', component: r => require.ensure([], () => r(require('./../components/Setting')), 'Setting')},
  		{ path: '/Top250', name: 'Top250', component: r => require.ensure([], () => r(require('./../components/Top250')), 'Top250')},
  		{ path: '/USbox', name: 'USbox', component: r => require.ensure([], () => r(require('./../components/USbox')), 'USbox')},
  		{ path: '/User', name: 'User', component: r => require.ensure([], () => r(require('./../components/User')), 'User')},
  		{ path: '/Weekly', name: 'Weekly', component: r => require.ensure([], () => r(require('./../components/Weekly')), 'Weekly')},
  		{ path: '*', redirect: '/Hot'}
  	]
})
