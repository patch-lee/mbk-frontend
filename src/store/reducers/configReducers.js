import * as actionTypes from '../actions/actionTypes'

const initialState = {}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.someAction: {
      return state
    }
    default:
      return state
  }
}

export default reducers
