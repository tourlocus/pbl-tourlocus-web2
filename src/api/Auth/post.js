import axios from 'axios'

// 新規登録
export const signUpRequest = async values => {
  try {
    const endpoints = 'auth'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    throw new Error(error)
  }
}

// ログイン
export const signInRequest = async values => {
  try {
    const endpoints = 'auth/sign_in'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    throw new Error(error)
  }
}
