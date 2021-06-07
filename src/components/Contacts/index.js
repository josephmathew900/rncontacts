import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppModal from '../common/AppModal';
import Message from '../../components/common/Message';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {CONTACT_DETAILS, CREATE_CONTACT} from '../../constants/routeNames';

const Contacts = ({modalVisible, setModalVisible, data, loading, sortBy}) => {
  const {navigate} = useNavigation();

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
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(CONTACT_DETAILS, {item});
        }}>
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
            <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>

            <Text
              style={
                styles.phone_number
              }>{`+${country_code} ${phone_number}`}</Text>
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
    <>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <AppModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        {!loading ? (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={RenderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First Name') {
                        if (b.first_name > a.first_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }

                      if (sortBy === 'Last Name') {
                        if (b.last_name > a.last_name) {
                          return -1;
                        } else {
                          return 1;
                        }
                      }
                    })
                  : data
              }
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
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

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon type="material" color={colors.white} name="add" size={30} />
      </TouchableOpacity>
    </>
  );
};

export default Contacts;
