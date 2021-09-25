import * as TYPES from './type';

const initialAuth = {
  loading: false,
  email: '',
  token: null,
  error: null,
};

export const authReducer = (state = initialAuth, {type, payload}) => {
  switch (type) {
    case TYPES.SIGNUP_REQ: {
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    }
    case TYPES.SIGNUP_SUCCESS: {
      return {
        email: payload.user.username,
        token: payload.token,
        loading: false,
      };
    }
    case TYPES.SIGNUP_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case TYPES.SIGNIN_REQ: {
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    }
    case TYPES.SIGNIN_SUCCESS: {
      return {
        email: payload.user.username,
        token: payload.token,
        loading: false,
      };
    }
    case TYPES.SIGNIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case TYPES.SIGNOUT_REQ: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case TYPES.SIGNOUT_SUCCESS: {
      return {
        email: '',
        token: null,
        loading: false,
      };
    }
    case TYPES.SIGNOUT_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
