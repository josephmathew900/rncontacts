import React, {useContext, useState} from 'react';
import LoginComponent from '../../components/Login';
import {loginUser} from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

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
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
