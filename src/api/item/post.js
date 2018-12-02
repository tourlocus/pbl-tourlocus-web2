import axios from 'axios'
import router from '../../router'

export const createItem = async (credential, values) => {
  const endpoints = 'items/create'

  // FormData
  const form = new FormData()
  form.append('title', values.title)
  form.append('content', values.content)
  form.append('tags', values.tags)
  for (let i = 0; i < values.files.length; i++) {
    form.append('files[]', values.files[i])
  }

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'POST',
      headers: {
        client: credential.client,
        uid: credential.uid,
        'access-token': credential.accessToken,
        'Content-Type': 'multipart/form-data'
      },
      data: form
    })

    if (response.status === 200) {
      const redirectURL = `/users/${credential.name}`
      router.push(redirectURL)
    }
  } catch (error) {
    throw new Error(error)
  }
}
