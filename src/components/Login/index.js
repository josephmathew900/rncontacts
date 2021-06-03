import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

const Login = ({error, loading, onChange, onSubmit}) => {
  const {navigate} = useNavigation();

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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message
              onRetry={() => {}}
              danger
              message="Invalid credentials"
              onDismiss={() => {}}
            />
          )}
          {error?.error && (
            <Message message={error.error} onDismiss={() => {}} danger />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
            onPress={onSubmit}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
