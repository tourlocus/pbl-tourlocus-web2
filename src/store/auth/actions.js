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

      const saveData = {
        name: result.data.name,
        accessToken: header['access-token'],
        uid: header['uid'],
        client: header['client']
      }
      localStorage.setItem('key', JSON.stringify(saveData))
      commit(types.LOGIN, saveData)
      router.push(`/${saveData.name}`)
    }
  },

  restore ({commit}) {
    const data = localStorage.getItem('key')
    if (data) {
      commit(types.LOGIN, JSON.parse(data))
    }
  }
}
