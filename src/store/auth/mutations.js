import * as types from './mutation-type'

export default {
  [types.LOGIN] (state, payload) {
    state.userName = payload.name
    state.loggedIn = true
  }
}
