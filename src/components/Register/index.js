import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

const Register = ({onChange, onSubmit, errors, error, loading}) => {
  const {navigate} = useNavigation();
  const [iseSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message message={error.error} onRetry={() => {}} danger />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={iseSecureEntry}
            icon={<Text>Show</Text>}
            iconPosition="right"
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{iseSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            error={errors.password || error?.password?.[0]}
          />

          <CustomButton
            onPress={onSubmit}
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Register;
