import router from '../../router'
import * as types from './mutation-type'

export default {

  // 新規登録
  SignUp ({commit}, values) {
    const responseHeader = values.headers
    const responseData = values.data

    const payloadValue = {
      name: responseData.data.name,
      accessToken: responseHeader['access-token'],
      uid: responseHeader['uid'],
      client: responseHeader['client'],
      isAuth: true
    }

    commit(types.SIGN_UP, payloadValue)
    router.push(`/users/${payloadValue.name}`)
  }
}
