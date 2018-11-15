export const mediaFormat = array => {
  const fmtArray = []
  const endpoints = 'uploads/'

  for (let i = 0; i < array.length; i++) {
    const f = `${process.env.NODE_SLS}${endpoints}${array[i].url}`
    fmtArray.push(f)
  }

  return fmtArray
}

export const tagFormat = array => {
  const tagArray = []

  for (let i = 0; i < array.length; i++) {
    const f = array[i].name
    tagArray.push(f)
  }

  return tagArray
}
