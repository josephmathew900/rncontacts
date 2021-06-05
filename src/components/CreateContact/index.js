import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const CreateContact = ({
  form,
  setForm,
  onChangeText,
  onSubmit,
  loading,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
        <Text style={styles.chooseText}>Choose Image</Text>
        <ScrollView>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChangeText({name: 'firstName', value});
            }}
            error={error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChangeText({name: 'lastName', value});
            }}
            error={error?.last_name?.[0]}
          />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                countryCode={form.country_code || undefined}
                withCountryNameButton={false}
                withCallingCode
                withCallingCodeButton
                withEmoji
                onSelect={v => {
                  const phoneCode = v.callingCode[0];
                  const cCode = v.cca2;
                  setForm({...form, country_code: cCode, phoneCode});
                }}
              />
            }
            style={{paddingLeft: 10}}
            iconPosition="left"
            onChangeText={value => {
              onChangeText({name: 'phoneNumber', value});
            }}
            label="Phone Number"
            placeholder="Enter Phone Number"
            error={error?.phone_number?.[0]}
            keyboardType="phone-pad"
          />

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title="Create Contact"
          />
        </ScrollView>
      </Container>
    </View>
  );
};

export default CreateContact;
