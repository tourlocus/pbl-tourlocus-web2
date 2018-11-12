import Vue from 'vue'
import VeeValidate from 'vee-validate'

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

//
sync(store, router)
Vue.use(ElementUI)
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.dispatch('auth/restore')
  }
}).$mount('#app')
