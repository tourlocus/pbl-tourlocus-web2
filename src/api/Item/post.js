import axios from 'axios'
import {getAuthInfo} from '../../utils'

// 記事作成
export const postItem = async values => {
  const endpoints = 'items/create'
  const storage = getAuthInfo()

  //
  const form = new FormData()
  form.append('title', values.title)
  form.append('content', values.content)
  form.append('tags', values.tags)
  for (let i = 0; i < values.files.length; i++) {
    form.append('files[]', values.files[i])
  }

  try {
    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}`,
      method: 'POST',
      headers: {
        uid: storage['uid'],
        client: storage['client'],
        'access-token': storage['accessToken']
      },
      data: form
    })

    if (response.status === 200) {
      return true
    }
  } catch (error) {
    console.error(error)
  }
}
