import * as types from './mutation-type'

export default {
  [types.GET_ITEM] (state, payload) {
    state.article = payload
  },

  // mediaの変更
  [types.CHANGE_MEDIA_FILE] (state, payload) {
    state.tmpArticle = state.article
    state.article.media.push(payload)
  }
}
