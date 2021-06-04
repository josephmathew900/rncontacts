import {useRoute} from '@react-navigation/core';
import React, {useContext, useState} from 'react';
import {useEffect} from 'react/cjs/react.development';
import LoginComponent from '../../components/Login';
import {loginUser} from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
  });
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({
        ...form,
        userName: params.data.username,
      });
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
