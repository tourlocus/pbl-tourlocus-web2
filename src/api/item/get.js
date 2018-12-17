import axios from 'axios'
// import router from '../../router'

// 編集画面
export const getEdit = async (cred, id) => {
  try {
    const endpoints = 'articles/'
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}${id}`,
      method: 'GET',
      headers: {
        client: cred.client,
        uid: cred.uid,
        'access-token': cred.accessToken
      }
    })
    if (response.status === 200) {
      const result = response.data

      return result
    }
  } catch (error) {
    console.log(error)
  }
}

// 詳細画面
export const getDetail = async (name, id) => {
  try {
    const endpoints = 'items/show/'
    const response = await axios({
      url: `${process.env.NODE_BACKEND}${endpoints}${name}/${id}`,
      method: 'GET'
    })

    if (response.status === 200) {
      const result = response.data

      console.log(result)
      return result
    }
  } catch (error) {
    // レスポンスエラーがあった場合、NotFound
    console.log(error)
  }
}
