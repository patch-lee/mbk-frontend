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
export const openOverlay = content => {
  return {
    type: actionTypes.APP_STATE_OPEN_OVERLAY
  };
};

export const setOverlay = content => {
  return {
    type: actionTypes.APP_STATE_OPEN_OVERLAY,
    content
  };
};
export const closeOverlay = () => {
  return {
    type: actionTypes.APP_STATE_CLOSE_OVERLAY
  };
};
