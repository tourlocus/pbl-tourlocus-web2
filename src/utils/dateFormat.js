import moment from 'moment'

export const format = value => {
  var date = moment(value)
  return date.format('YYYY年MM月DD日') + 'に更新'
}
