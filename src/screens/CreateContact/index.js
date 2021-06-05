import React, {useContext, useState, useRef} from 'react';
import CreateContactComponent from '../../components/CreateContact';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/core';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const {navigate} = useNavigation();

  const toggleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      toggleValueChange={toggleValueChange}
      openSheet={openSheet}
      closeSheet={closeSheet}
      sheetRef={sheetRef}
    />
  );
};

export default CreateContact;
