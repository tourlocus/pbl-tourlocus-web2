import Vue from 'vue'
import VeeValidate from 'vee-validate'

// Element UI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/umd/locale/ja'
import 'element-ui/lib/theme-chalk/index.css'

//
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

//
sync(store, router)
Vue.use(ElementUI, {locale})
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
