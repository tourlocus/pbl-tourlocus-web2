import axios from 'axios'
import router from '../../router'

export const getDetail = async id => {
  try {
    const endpoints = 'items/show/'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}${id}`,
      method: 'GET'
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    router.push({name: 'NotFound'})
    console.error(error)
  }
}

export const getEdit = async id => {
  try {
    const endpoints = 'items/edit/'

    const response = await axios({
      url: `${process.env.NODE_SLS}${endpoints}${id}`,
      method: 'GET'
    })

    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    router.push({name: 'NotFound'})
    console.error(error)
  }
}
