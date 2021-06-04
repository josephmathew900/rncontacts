import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

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
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
