import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ContactsComponent from '../../components/Contacts';
import Icon from '../../components/common/Icon';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

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
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
