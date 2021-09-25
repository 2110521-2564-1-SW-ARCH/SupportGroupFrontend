import * as TYPES from './type';
import {signUp, signIn, signOut} from './api';

export const signup = (value) => async (dispatch) => {
  dispatch({
    type: TYPES.SIGNIN_REQ,
  });
  try {
    const response = await signUp(value.email, value.password);
    dispatch({
      type: TYPES.SIGNUP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.SIGNUP_FAIL,
      payload: error,
    });
  }
};

export const signin = (value) => async (dispatch) => {
  dispatch({
    type: TYPES.SIGNIN_REQ,
  });
  try {
    const response = await signIn(value.email, value.password);
    dispatch({
      type: TYPES.SIGNIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.SIGNIN_FAIL,
      payload: error,
    });
  }
};

export const signout = () => async (dispatch) => {
  dispatch({
    type: TYPES.SIGNOUT_REQ,
  });
  try {
    await signOut();
    dispatch({
      type: TYPES.SIGNOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TYPES.SIGNIN_FAIL,
      payload: error,
    });
  }
};
