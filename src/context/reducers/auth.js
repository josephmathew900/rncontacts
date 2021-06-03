import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};
    case REGISTER_FAILURE:
      return {...state, loading: false, error: payload};
    case CLEAR_AUTH_STATE:
      return {...state, data: null, error: null, loading: false};
    default:
      return state;
  }
};

export default auth;
