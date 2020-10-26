import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/utils';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      // Reset state
      setValues({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
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
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
