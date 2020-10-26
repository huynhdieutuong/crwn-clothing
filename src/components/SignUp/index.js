import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import CustomButton from '../CustomButton';
import FormInput from '../FormInput';
import './styles.scss';

const SignUp = () => {
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      return alert('password do not match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      // Reset state
      setValues({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          name='displayName'
          type='displayName'
          value={values.displayName}
          label='display name'
          handleChange={handleChange}
        />
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
        <FormInput
          required
          name='confirmPassword'
          type='password'
          value={values.confirmPassword}
          label='confirm password'
          handleChange={handleChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
