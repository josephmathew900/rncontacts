import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import AppModal from '../common/AppModal';
import Message from '../../components/common/Message';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';

const Contacts = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message={'No contacts to show'} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}></Image>
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
              }}></View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>

          <Text>{phone_number}</Text>
        </View>

        <Icon type="material" name="keyboard-arrow-right"></Icon>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      {!loading ? (
        <View style={{paddingVertical: 20}}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}}></View>}
          />
        </View>
      ) : (
        <ActivityIndicator
          style={{paddingVertical: 100, paddingHorizontal: 100}}
          size="large"
          color={colors.primary}
        />
      )}
    </View>
  );
};

export default Contacts;
