import {useNavigation} from '@react-navigation/core';
import React, {useState, useCallback, useRef} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ContactsComponent from '../../components/Contacts';
import Icon from '../../components/common/Icon';
import {useContext} from 'react';
import {GlobalContext} from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {CONTACT_DETAILS} from '../../constants/routeNames';

const Contacts = ({navigation}) => {
  const {navigate, setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const contactsRef = useRef([]);

  const {
    contactsState: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );

  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        newItem => !prev.map(prevItem => prevItem.id).includes(newItem.id),
      );

      navigate(CONTACT_DETAILS, {item: newContact});
    }
  }, [data.length]);

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
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
