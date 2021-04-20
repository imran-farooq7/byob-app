import * as actionTypes from "./actionTypes";
import axios from "axios";
//AIzaSyDdhBSI17uKDfN6QZU-x8NLOL6Y_iKTOZw
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};
export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdhBSI17uKDfN6QZU-x8NLOL6Y_iKTOZw",
        authData
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
