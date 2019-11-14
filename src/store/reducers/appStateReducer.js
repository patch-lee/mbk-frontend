import * as actionTypes from "../actions/actionTypes";

const initialState = {
  navToggle: "close"
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_STATE_OPEN_NAV: {
      return { ...state, navToggle: "open" };
    }
    case actionTypes.APP_STATE_CLOSE_NAV: {
      return { ...state, navToggle: "close" };
    }

    default:
      return state;
  }
};

export default reducers;
