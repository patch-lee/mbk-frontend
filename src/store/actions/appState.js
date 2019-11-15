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
export const openOverlay = () => {
  console.log("open?");
  
  return {
    type: actionTypes.APP_STATE_OPEN_OVERLAY
  };
};
export const closeOverlay = () => {
  return {
    type: actionTypes.APP_STATE_CLOSE_OVERLAY
  };
};
