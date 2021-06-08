import React, {useContext, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetails';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {CONTACT_DETAILS, CONTACT_LIST} from '../../constants/routeNames';
import uploadImage from '../../helpers/uploadImage';
import editContact from '../../context/actions/contacts/editContact';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {navigate, setOptions} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon
                  type="material"
                  color={colors.grey}
                  size={21}
                  name={item.is_favorite ? 'star' : 'star-border'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete!',
                    'Are you sure you want to remove ' + item.first_name + '?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    type="material"
                    color={colors.grey}
                    size={21}
                    name="delete"
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item, loading]);

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

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    setIsUpdating(true);
    uploadImage(image)(url => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country_code: phoneCode,
        is_favorite: isFavorite,
      } = item;
      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          phoneCode,
          isFavorite,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatch)(() => {
        setIsUpdating(false);
        setUploadSucceeded(true);
      });
    })(error => {
      console.log(error);
      setIsUpdating(false);
    });
  };

  return (
    <ContactDetailsComponent
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      contact={item}
      onFileSelected={onFileSelected}
      localFile={localFile}
      isUpdating={isUpdating}
      uploadSucceeded={uploadSucceeded}
    />
  );
};
export default ContactDetails;
