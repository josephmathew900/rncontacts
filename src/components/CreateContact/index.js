import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContact = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
        <Text style={styles.chooseText}>Choose Image</Text>
        <ScrollView>
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="Last Name" placeholder="Enter Last Name" />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                withCountryNameButton={false}
                withCallingCode
                withEmoji
                onSelect={() => {}}
              />
            }
            style={{paddingLeft: 10}}
            iconPosition="left"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />

          <CustomButton primary title="Create Contact" />
        </ScrollView>
      </Container>
    </View>
  );
};

export default CreateContact;
