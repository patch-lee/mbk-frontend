import * as actionTypes from "../actions/actionTypes";

const initialState = {
  navToggle: "close",
  overlayToggle: "close",
  overlayContent: ""
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
      return {
        ...state,
        navToggle: "open"
      };
    }
    case actionTypes.APP_STATE_SET_OVERLAY: {
      return {
        ...state,

        overlayContent: action.content
      };
    }
    case actionTypes.APP_STATE_CLOSE_OVERLAY: {
      return { ...state, navToggle: "close" };
    }
    default:
      return state;
  }
};

export default reducers;
