import * as types from './mutation-type'

export default {
  // 新規登録・ログイン
  [types.LOGIN] (state, payload) {
    const {id, name, accessToken, uid, client} = payload

    state.id = id
    state.name = name
    state.accessToken = accessToken
    state.uid = uid
    state.client = client
    state.isAuth = true
  },

  // ログアウト
  [types.LOGOUT] (state) {
    state.id = ''
    state.name = ''
    state.accessToken = ''
    state.uid = ''
    state.client = ''
    state.isAuth = false
  }
}
