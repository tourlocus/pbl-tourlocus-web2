import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, payload) {
    state.loggedIn = true
    state.accessInfo = payload.accessInfo
    state.userInfo = payload.userInfo
  }
}
