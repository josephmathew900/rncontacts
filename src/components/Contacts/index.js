import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../../components/common/CustomButton';

const Contacts = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <CustomButton
        secondary
        title="Open Modal"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default Contacts;
