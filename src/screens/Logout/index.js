import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {GlobalContext} from '../../context/Provider';
import {logoutUser} from '../../context/actions/auth/logoutUser';

const Logout = () => {
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  useEffect(() => {
    logoutUser()(authDispatch);
  }, []);

  return <ActivityIndicator />;
};

export default Logout;
