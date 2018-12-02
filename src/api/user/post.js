import axios from 'axios'

export const signUpRequest = async values => {
  const endpoints = 'auth'

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
      return response
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const SignInRequest = async values => {
  const endpoints = 'auth/sign_in'

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(values)
    })

    if (response.status === 200) {
    }
  } catch (error) {
    throw new Error(error)
  }
}
