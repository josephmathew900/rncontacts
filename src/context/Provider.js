import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authState';
import contacts from './reducers/contacts';
import ContactsInitialState from './initialStates/ContactsState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, constactsDispatch] = useReducer(
    contacts,
    ContactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, constactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
