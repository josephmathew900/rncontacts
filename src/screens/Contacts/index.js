import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding: 10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi from contacts</Text>
    </Container>
  );
};

export default Contacts;
