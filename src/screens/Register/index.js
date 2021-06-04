import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect, useContext} from 'react';
import RegisterComponent from '../../components/Register';
import {LOGIN} from '../../constants/routeNames';
import {clearAuthState, register} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {useFocusEffect} from '@react-navigation/native';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);
  const {navigate} = useNavigation();

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (data) {
  //       clearAuthState()(authDispatch);
  //     }
  //   }, [data, error]),
  // );

  useEffect(() => {
    clearAuthState()(authDispatch);
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name == 'password') {
        if (value.length < 8) {
          setErrors({...errors, [name]: 'This field needs minimum 8 chars'});
        } else {
          setErrors({...errors, [name]: null});
        }
      } else {
        setErrors({...errors, [name]: null});
      }
    } else {
      setErrors({...errors, [name]: 'This field is required'});
    }
  };

  const onSubmit = () => {
    Object.keys(form).map(field => {
      if (!form[field]) {
        setErrors(prevError => ({
          ...prevError,
          [field]: `Please add a ${field}`,
        }));
      }
    });

    // if (Object.values(form).every(item => item.trim().length > 0)) {
    //   clearAuthState()(authDispatch);
    //   register(form)(authDispatch)(response => {
    //     navigate(LOGIN, {data: response});
    //   });
    // }
    if (
      Object.keys(form).every(key =>
        key == 'password'
          ? form[key].trim().length >= 8
          : form[key].trim().length > 0,
      )
    ) {
      clearAuthState()(authDispatch);
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
