import axios from 'axios'
import router from '../../router'
import * as types from './mutation-type'

export default {
  async createItem ({rootState}, value) {
    const url = 'items/create'
    const info = rootState.auth

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
        client: info.accessInfo['client'],
        uid: info.accessInfo['uid'],
        'access-token': info.accessInfo['accessToken'],
        'Content-Type': 'multipart/form-data'
      },
      data: form
    })

    if (response.status === 200) {
      const userName = info.userInfo.name
      router.push(`/users/${userName}`)
    }
  },

  // GET_ITEM
  async getItem ({rootState, commit}, id) {
    const url = `items/edit/${id}`
    const info = rootState.auth

    const response = await axios({
      url: `${process.env.NODE_SLS}${url}`,
      method: 'GET',
      headers: {
        client: info.accessInfo['client'],
        uid: info.accessInfo['uid'],
        'access-token': info.accessInfo['accessToken']
      }
    })

    if (response.status === 200) {
      const result = response.data
      const {title, content} = result
      const media = []
      const tags = []

      for (let i = 0; i < result.media.length; i++) {
        const f = `${process.env.NODE_SLS}${result.media[i].media.url}`
        media.push(f)
      }

      for (let i = 0; i < result.tags.length; i++) {
        tags.push(result.tags[i].name)
      }

      commit(types.GET_ITEM, {title, content, media, tags})
    }
  },

  // CHANGE_MEDIA_FILE
  changeMediaFile ({commit}, file) {
    commit(types.CHANGE_MEDIA_FILE, file)
  }
}
