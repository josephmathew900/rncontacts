import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from '../../constants/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        createContact: {...state.createContact, loading: true, error: null},
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: [payload, ...state.getContacts.data],
        },
      };
    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        createContact: {...state.createContact, loading: false, error: payload},
      };

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

    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {...state.createContact, loading: true, error: null},
      };

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContact: {...state.deleteContact, loading: false, error: null},
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.filter(item => item.id !== payload),
        },
      };

    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        deleteContact: {...state.deleteContact, loading: false, error: payload},
      };

    default:
      return state;
  }
};

export default contacts;
