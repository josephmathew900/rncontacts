import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import colors from '../../assets/theme/colors';
import ImagePicker from '../common/ImagePicker';

const CreateContact = ({
  form,
  setForm,
  onChangeText,
  onSubmit,
  loading,
  error,
  toggleValueChange,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile,
  params,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
        </TouchableOpacity>
        <ScrollView>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChangeText({name: 'firstName', value});
            }}
            error={error?.first_name?.[0]}
            value={form.firstName || ''}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChangeText({name: 'lastName', value});
            }}
            error={error?.last_name?.[0]}
            value={form.lastName || ''}
          />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                countryCode={form.countryCode || undefined}
                withCountryNameButton={false}
                withCallingCode
                withCallingCodeButton
                withEmoji
                onSelect={v => {
                  const phoneCode = v.callingCode[0];
                  const cCode = v.cca2;
                  setForm({...form, countryCode: cCode, phoneCode});
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
            value={form.phoneNumber || ''}
          />

          <View style={styles.switchWrapper}>
            <Text style={{fontSize: 15}}>Add to Favorites</Text>
            <Switch
              trackColor={{false: colors.grey, true: colors.primary}}
              thumbColor={colors.white}
              onValueChange={toggleValueChange}
              value={form.isFavorite}
            />
          </View>

          <CustomButton
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
            primary
            title={params?.editing ? 'Update Contact' : 'Create Contact'}
          />
        </ScrollView>
      </Container>
      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  );
};

export default CreateContact;
