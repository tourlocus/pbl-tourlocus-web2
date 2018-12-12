import axios from 'axios'
import router from '../../router'

export const updateItem = async (cred, id, values) => {
  const endpoint = 'articles/'
  const tagArray = []

  for (let i = 0; i < values.tags.length; i++) {
    const tag = values.tags[i].text
    tagArray.push(tag)
  }

  // FormData
  const form = new FormData()
  form.append('title', values.title)
  form.append('content', values.content)
  form.append('tags', tagArray)
  for (let i = 0; i < values.files.length; i++) {
    form.append('files[]', values.files[i])
  }

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoint}${id}`,
      method: 'PUT',
      headers: {
        client: cred.client,
        uid: cred.uid,
        'access-token': cred.accessToken
      },
      data: form
    })

    if (response.status === 200) {
      const redirectURL = `/users/${cred.name}`
      router.push(redirectURL)
    }
  } catch (error) {
    throw new Error(error)
  }
}
