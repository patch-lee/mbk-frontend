import * as actionTypes from "./actionTypes";

export const openNav = () => {
  return {
    type: actionTypes.APP_STATE_OPEN_NAV
  };
};

export const closeNav = () => {
  return {
    type: actionTypes.APP_STATE_CLOSE_NAV
  };
};
