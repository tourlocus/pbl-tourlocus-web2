export default {
  logState: state => {
    return state.loggedIn
  },
  loginUserName: state => {
    return state.userInfo.name
  }
}
