import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/common/Container';
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
    </Container>
  );
};

export default Login;
