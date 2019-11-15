import * as actionTypes from "../actions/actionTypes";

const initialState = {
  navToggle: "close",
  overlayToggle:"hide"
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_STATE_OPEN_NAV: {
      return { ...state, navToggle: "open" };
    }
    case actionTypes.APP_STATE_CLOSE_NAV: {
      return { ...state, navToggle: "close" };
    }
    case actionTypes.APP_STATE_OPEN_OVERLAY: {
      return { ...state, overlayToggle: "show" };
    }
    case actionTypes.APP_STATE_CLOSE_OVERLAY: {
      return { ...state, overlayToggle: "hide" };
    }
    default:
      return state;
  }
};

export default reducers;
