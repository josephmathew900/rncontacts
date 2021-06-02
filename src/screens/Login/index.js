import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, onChangeText] = useState('test');

  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>Hide</Text>}
        iconPosition="right"
      />

      <CustomButton primary title="submit" />
    </Container>
  );
};

export default Login;
