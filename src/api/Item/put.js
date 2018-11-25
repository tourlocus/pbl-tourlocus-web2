import axios from 'axios'
import router from '../../router'

const key = 'tourlocus-client'

export const putItem = async (values, id) => {
  const storage = JSON.parse(localStorage.getItem(key))
  const accessInfo = storage.auth.accessInfo
  const userInfo = storage.auth.userInfo
  const endpoints = 'items/update/'

  try {
    console.log(values.file)
    const form = new FormData()
    form.append('title', values.title)
    form.append('content', values.content)
    form.append('tags', values.tags)
    for (let i = 0; i < values.file.length; i++) {
      form.append('files[]', values.file[i])
    }

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}${id}`,
      method: 'PUT',
      headers: {
        client: accessInfo['client'],
        uid: accessInfo['uid'],
        'access-token': accessInfo['accessToken'],
        'Content-Type': 'multipart/form-data'
      },
      data: form
    })

    if (response.status === 200) {
      router.push(`/users/${userInfo.name}`)
    }
  } catch (error) {
    console.error(error)
  }
}
