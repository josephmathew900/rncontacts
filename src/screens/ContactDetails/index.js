import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../../components/ContactDetails';

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute();

  return <ContactDetailsComponent contact={item} />;
};
export default ContactDetails;
