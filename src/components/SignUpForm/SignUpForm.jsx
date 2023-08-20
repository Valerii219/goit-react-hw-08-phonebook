import React, { useState } from 'react';
import css from './SignUp.module.css';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

const SignUpForm = ({ signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const isValid = newPassword.length >= 6 && newPassword.length <= 12;
    setIsPasswordValid(isValid);
  };

  const isNameValid = name.length >= 3;
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      return;
    }
    signUp({ name, email, password });
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <FormControl color={isNameValid ? 'success' : 'error'}>
          <InputLabel>Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type="text" name="name" onChange={handleChangeName} value={name} required />
          <FormHelperText id="my-helper-text">We'll never share your name.</FormHelperText>
        </FormControl>

        <FormControl color={isEmailValid ? 'success' : 'error'}>
          <InputLabel>Email address</InputLabel>
          <Input id="my-name" aria-describedby="my-helper-text" type="email" name="email" onChange={handleChangeEmail} value={email} pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" required />
          <FormHelperText id="my-email">
            {isEmailValid ? '' : 'Please enter a valid email address.'}
          </FormHelperText>
        </FormControl>

        <FormControl color={isPasswordValid ? 'success' : 'error'}>
          <InputLabel>Password</InputLabel>
          <Input id="my-password" aria-describedby="my-helper-text" type="password" name="password" onChange={handleChangePassword} value={password} required />
          <FormHelperText id="my-helper-text">
            {isPasswordValid ? '' : 'Password must be between 6 and 12 characters long.'}
          </FormHelperText>
        </FormControl>

        <Button color="success" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;