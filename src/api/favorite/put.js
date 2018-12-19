import axios from 'axios'

export const updateFavorite = async (cred, articleId, status) => {
  const resource = 'favorites/'

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${resource}${articleId}`,
      method: 'PUT',
      headers: {
        'access-token': cred.accessToken,
        client: cred.client,
        uid: cred.uid
      },
      data: JSON.stringify({
        status: status
      })
    })
    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    throw error
  }
}
