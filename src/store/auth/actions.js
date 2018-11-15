import * as types from './mutation-type'
import axios from 'axios'
import router from '../../router'

export default {
  async signUp ({commit}, values) {
    const url = 'auth'

    const response = await axios({
      url: `${process.env.NODE_SLS}${url}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
      const result = response.data
      const header = response.headers

      const userInfo = {
        name: result.data.name,
        icon: `${process.env.NODE_SLS}uploads/${result.data.icon}`,
        intro: result.data.intro
      }

      const accessInfo = {
        accessToken: header['access-token'],
        uid: header['uid'],
        client: header['client']
      }

      commit(types.LOGIN, {userInfo, accessInfo})
      router.push(`/users/${userInfo.name}`)
    }
  },

  async signIn ({commit}, values) {
    const endpoints = 'auth/sign_in'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
      const result = response.data
      const header = response.headers

      const userInfo = {
        name: result.data.name
      }

      const accessInfo = {
        accessToken: header['access-token'],
        uid: header['uid'],
        client: header['client']
      }

      commit(types.LOGIN, {userInfo, accessInfo})
      router.push(`/users/${userInfo.name}`)
    }
  }
}
