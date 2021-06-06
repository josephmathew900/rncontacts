import React from 'react';
import {Text, View} from 'react-native';
import SettingsComponent from '../../components/Settings';

const Settings = () => {
  const settingsOptions = [
    {
      title: 'My Info',
      subTitle: 'Setup your profile',
      onPress: () => {},
    },
    {
      title: 'Accounts',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Default account for new contacts',
      subTitle: 'Hello@hello.com',
      onPress: () => {},
    },
    {
      title: 'Contacts to display',
      subTitle: 'All contacts',
      onPress: () => {},
    },
    {
      title: 'Sort by',
      subTitle: 'First Name',
      onPress: () => {},
    },
    {
      title: 'Name format',
      subTitle: 'First Name first',
      onPress: () => {},
    },
    {
      title: 'Import',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Export',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'Blocked NUmbers',
      subTitle: null,
      onPress: () => {},
    },
    {
      title: 'About RNContacts',
      subTitle: null,
      onPress: () => {},
    },
  ];

  return <SettingsComponent settingsOptions={settingsOptions} />;
};

export default Settings;
