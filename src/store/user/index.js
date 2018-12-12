import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default {
  namespaced: true,
  state: {
    name: '',
    accessToken: null,
    uid: null,
    client: null,
    isAuth: false
  },
  getters,
  mutations,
  actions
}
