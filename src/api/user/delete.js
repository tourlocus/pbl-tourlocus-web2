import axios from 'axios'
import {Sleep} from '../../utils'

export const signOut = async (cred) => {
  const resource = 'auth/sign_out'

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${resource}`,
      method: 'DELETE',
      headers: {
        'access-token': cred.accessToken,
        client: cred.client,
        uid: cred.uid
      }
    })

    if (response.status === 200) {
      Sleep(2000)
      location.reload()
    }
  } catch (error) {
    throw new Error(error)
  }
}
