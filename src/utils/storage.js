const key = 'tourlocus-client'

// 認証情報
export const getAuthInfo = () => {
  if (localStorage.getItem(key)) {
    const storage = JSON.parse(localStorage.getItem(key))

    return storage.auth.accessInfo
  } else {
    return 0
  }
}
