import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import {LOGIN_SUCCESS} from '../constants/actionTypes';
import {navigationRef} from './SideMenu/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
    authDispatch,
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsAuthenticated(true);
        setAuthLoaded(true);
        authDispatch({type: LOGIN_SUCCESS, payload: {}});
      } else {
        setIsAuthenticated(false);
        setAuthLoaded(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (authLoaded) {
      SplashScreen.hide();
    }
  }, [authLoaded]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
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
