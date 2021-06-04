import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
  LOGOUT_USER,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case LOGOUT_USER:
      return {...state, loading: false, isLoggedIn: false};

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        data: null,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
