import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import article from './articles'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    article
  }
})

export default store
