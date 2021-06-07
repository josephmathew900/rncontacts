import React, {useContext, useState, useRef} from 'react';
import CreateContactComponent from '../../components/CreateContact';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_LIST} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/core';
import uploadImage from '../../helpers/uploadImage';

const CreateContact = () => {
  const [form, setForm] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [localFile, setLocalFile] = useState(null);
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

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
  };

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    setIsUploading(true);
    if (localFile?.size) {
      uploadImage(localFile)(url => {
        setIsUploading(false);
        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(error => {
        console.log(error);
        setIsUploading(false);
      });
    } else {
      setIsUploading(false);
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST);
      });
    }
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      loading={loading || isUploading}
      error={error}
      toggleValueChange={toggleValueChange}
      openSheet={openSheet}
      closeSheet={closeSheet}
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
