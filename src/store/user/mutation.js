import * as types from './mutation-type'

export default {
  // 新規登録
  [types.SIGN_UP] (state, payload) {
    const {name, accessToken, uid, client} = payload

    state.name = name
    state.accessToken = accessToken
    state.uid = uid
    state.client = client
    state.isAuth = true
  }

  // ログイン
}
