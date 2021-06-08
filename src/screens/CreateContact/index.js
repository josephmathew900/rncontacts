import React, {useContext, useState, useRef, useEffect} from 'react';
import CreateContactComponent from '../../components/CreateContact';
import createContact from '../../context/actions/contacts/createContact';
import editContact from '../../context/actions/contacts/editContact';
import {GlobalContext} from '../../context/Provider';
import {CONTACT_DETAILS, CONTACT_LIST} from '../../constants/routeNames';
import {useNavigation, useRoute} from '@react-navigation/core';
import uploadImage from '../../helpers/uploadImage';
import countryCodes from '../../utils/countryCodes';

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
  const {params} = useRoute();
  const sheetRef = useRef(null);

  useEffect(() => {
    if (params?.contact) {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: phoneCode,
      } = params?.contact;

      setForm(prevForm => ({
        ...prevForm,
        firstName,
        lastName,
        phoneNumber,
        isFavorite,
        phoneCode,
      }));

      const country = countryCodes.find(item => {
        return item.value.replace('+', '') === phoneCode;
      });

      if (country) {
        setForm(prevForm => ({
          ...prevForm,
          countryCode: country.key.toUpperCase(),
        }));
      }

      if (params?.contact?.contact_picture) {
        setLocalFile(params?.contact?.contact_picture);
      }
    }
  }, []);

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
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          editContact(
            {...form, contactPicture: url},
            params.contact.id,
          )(contactsDispatch)(updatedContact => {
            navigate(CONTACT_DETAILS, {item: updatedContact});
          });
        })(error => {
          console.log(error);
          setIsUploading(false);
        });
      } else {
        editContact(form, params.contact.id)(contactsDispatch)(
          updatedContact => {
            navigate(CONTACT_DETAILS, {item: updatedContact});
          },
        );
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true);
        uploadImage(localFile)(url => {
          setIsUploading(false);
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(error => {
          console.log(error);
          setIsUploading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
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
