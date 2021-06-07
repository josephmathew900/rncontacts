import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_LIST,
  CONTACT_DETAILS,
  CREATE_CONTACT,
  SETTINGS,
  LOGOUT,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Contact"
      screenOptions={{headerTitleAlign: 'center'}}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}
        // options={{headerLeft: () => <Text style={{padding: 10}}>NAV</Text>}}
      />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
