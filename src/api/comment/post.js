import axios from 'axios'

export const postComment = async (cred, value) => {
  const endpoints = 'comment/post'
  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'POST',
      headers: {
        'access-token': cred.accessToken,
        uid: cred.uid,
        client: cred.client
      },
      data: JSON.stringify(value)
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    console.error(error.message)
  }
}
