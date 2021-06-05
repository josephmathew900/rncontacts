import {
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {...state.getContacts, loading: true, error: null},
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: payload,
        },
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        getContacts: {...state.getContacts, loading: false, error: payload},
      };
    default:
      return state;
  }
};

export default contacts;
