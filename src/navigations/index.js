import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsAuthenticated(true);
        setAuthLoaded(true);
      } else {
        setIsAuthenticated(false);
        setAuthLoaded(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator
          color="blue"
          size={80}
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
        />
      )}
    </>
  );
};

export default AppNavContainer;
