import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import auth from './auth'
import article from './articles'

Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: 'tourlocus-client'
})

const store = new Vuex.Store({
  modules: {
    auth,
    article
  },
  plugins: [vuexLocal.plugin]
})

export default store
