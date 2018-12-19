import router from '../../router'
import * as types from './mutation-type'

export default {

  // 新規登録・ログイン
  Login ({commit}, values) {
    const responseHeader = values.headers
    const responseData = values.data

    const payloadValue = {
      id: responseData.data.id,
      name: responseData.data.name,
      accessToken: responseHeader['access-token'],
      uid: responseHeader['uid'],
      client: responseHeader['client'],
      isAuth: true
    }

    commit(types.LOGIN, payloadValue)
    router.push(`/users/${responseData.data.name}`)
  },

  // ログアウト
  Logout ({ commit }) {
    commit(types.LOGOUT)
  }
}
