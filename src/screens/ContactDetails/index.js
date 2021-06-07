import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetails';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();

  const {setOptions} = useNavigation();

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

              <TouchableOpacity style={{paddingLeft: 10}}>
                <Icon
                  type="material"
                  color={colors.grey}
                  size={21}
                  name="delete"
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);

  return <ContactDetailsComponent contact={item} />;
};
export default ContactDetails;
