import axios from 'axios'

export const createItem = async (credential, values) => {
  const endpoints = 'items/create'

  try {
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}`,
      method: 'POST'

    })
  } catch (error) {
    console.log(error)
  }
}
