import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import FormInput from '../FormInput';
import './styles.scss';

const SignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          name='email'
          type='email'
          value={values.email}
          label='email'
          handleChange={handleChange}
        />
        <FormInput
          required
          name='password'
          type='password'
          value={values.password}
          label='password'
          handleChange={handleChange}
        />
        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
