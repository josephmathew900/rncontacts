import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetails';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contacts/deleteContact';
import {CONTACT_LIST} from '../../constants/routeNames';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();
  const {navigate, setOptions} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);

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

  return <ContactDetailsComponent contact={item} />;
};
export default ContactDetails;
