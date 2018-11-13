import axios from 'axios'
import router from '../../router'
// import * as types from './mutation-type'

export default {
  async createItem ({rootState}, value) {
    const url = 'items/create'
    const headers = JSON.parse(localStorage.getItem('key'))

    const form = new FormData()
    form.append('title', value.title)
    form.append('content', value.content)
    form.append('tags', value.tags)
    for (let i = 0; i < value.files.length; i++) {
      form.append('files[]', value.files[i])
    }

    const response = await axios({
      url: `${process.env.NODE_SLS}${url}`,
      method: 'POST',
      headers: {
        client: headers['client'],
        uid: headers['uid'],
        'access-token': headers['accessToken'],
        'Content-Type': 'multipart/form-data'
      },
      data: form
    })

    if (response.status === 200) {
      const userName = rootState.auth.userName
      router.push()
    }
  }
}
