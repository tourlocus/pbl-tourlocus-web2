import router from '../../router'
import * as types from './mutation-type'

export default {

  // 新規登録・ログイン
  Login ({commit}, values) {
    const responseHeader = values.headers
    const responseData = values.data

    const payloadValue = {
      name: responseData.data.name,
      accessToken: responseHeader['access-token'],
      uid: responseHeader['uid'],
      client: responseHeader['client'],
      isAuth: true
    }

    commit(types.LOGIN, payloadValue)
    router.push(`/users/${payloadValue.name}`)
  }
}
