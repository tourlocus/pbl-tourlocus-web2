import axios from 'axios'
import router from '../../router'

export const getItems = async name => {
  const endpoints = `users/${name}/items`

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'GET'
    })

    if (response.status === 200) {
      const result = response.data
      return result
    }
  } catch (error) {
    router.push({name: 'NotFound'})
  }
}
