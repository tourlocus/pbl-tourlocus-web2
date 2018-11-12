import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
import routes from './router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
