import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icon';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" name="menu" size={25} style={{padding: 10}} />
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
