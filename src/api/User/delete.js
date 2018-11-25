import axios from 'axios'
import {getAuthInfo} from '../../utils'

const storage = getAuthInfo()

// サインアウト(ログアウト)
export const signOut = async () => {
  try {
    const endpoints = 'auth/sign_out'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}`,
      method: 'DELETE',
      headers: {
        uid: storage['uid'],
        client: storage['client'],
        'access-token': storage['access-token']
      }
    })

    if (response.status === 200) {
    }
  } catch (error) {
    console.error(error)
  }
}
