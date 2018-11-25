export const getUser = (values) => {
  const userInfo = {}
  const endpoints = 'uploads/'

  userInfo.name = values.userName
  userInfo.icon = `${process.env.NODE_SLS}${endpoints}${values.icon}`
  userInfo.intro = values.intro

  return userInfo
}

export const getArticleItems = (values) => {
  return values.articles
}
