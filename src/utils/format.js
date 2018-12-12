export const editResponseFormat = value => {
  const media = []
  const tags = []

  for (let i = 0; i < value.mediaFiles.length; i++) {
    let src = `${process.env.NODE_BACKEND}uploads/${value.mediaFiles[i].url}`
    media.push(src)
  }

  for (let i = 0; i < value.tags.length; i++) {
    tags.push({text: value.tags[i].name})
  }

  return {
    title: value.title,
    content: value.content,
    meida: media,
    tags: tags
  }
}
