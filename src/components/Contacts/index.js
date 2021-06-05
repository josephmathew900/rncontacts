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

  const RenderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;

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
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>

            <Text
              style={
                styles.phone_number
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>

        <Icon
          type="material"
          name="keyboard-arrow-right"
          size={17}
          color={colors.grey}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: colors.white}}>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      {!loading ? (
        <View style={{paddingVertical: 20}}>
          <FlatList
            renderItem={RenderItem}
            data={data}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
            )}
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
