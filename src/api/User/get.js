import axios from 'axios'
import {getAuthInfo} from '../../utils'

const storage = getAuthInfo()

export const getItems = async (name) => {
  const endpoints = 'users/home/'

  try {
    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}${name}`,
      method: 'GET',
      headers: {
        uid: storage['uid'],
        client: storage['client'],
        'access-token': storage['accessToken']
      }
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    console.error(error)
  }
}
