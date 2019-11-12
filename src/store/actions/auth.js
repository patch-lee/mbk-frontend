import * as actions from './actionTypes'

export const authLogin = (payload) => {
  return (dispatch) => {
    // FIRE AUTH REQUEST INSTEAD OF setTimeout
    setTimeout(() => {
      dispatch({ type: actions.AUTH_LOGIN, credentials: payload })
    }, 2000)
  }
}
