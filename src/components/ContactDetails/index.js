import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import ImageComponent from './ImageComponent';
import styles from './styles';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import CustomButton from '../../components/common/CustomButton';
import {useNavigation} from '@react-navigation/core';
import ImagePicker from '../../components/common/ImagePicker';
import {CREATE_CONTACT} from '../../constants/routeNames';

const ContactDetails = ({contact, onFileSelected, sheetRef}) => {
  const {contact_picture, first_name, last_name, phone_number, country_code} =
    contact;
  const {navigate} = useNavigation();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {contact_picture && <ImageComponent src={contact_picture} />}

        <View style={styles.content}>
          <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
        </View>

        <View style={styles.hrLine} />

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="material"
              name="call"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="material"
              name="message"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="material"
              name="video-call"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon type="material" name="call" color={colors.grey} size={27} />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="material"
              name="video-call"
              color={colors.primary}
              size={27}
              style={{paddingRight: 10}}
            />
            <Icon
              type="material"
              name="message"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>

        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />
      </View>

      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </ScrollView>
  );
};

export default ContactDetails;
