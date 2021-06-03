import React, {useState, useEffect} from 'react';
import RegisterComponent from '../../components/Register';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {}, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name == 'password') {
        if (value.length < 6) {
          setErrors({...errors, [name]: 'This field needs minimum 6 chars'});
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
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
