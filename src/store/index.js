import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import user from './user'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'tourlocus-client'
})

const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: [vuexLocal.plugin]
})

export default store
