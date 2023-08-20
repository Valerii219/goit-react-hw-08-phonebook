import React, { useState } from 'react';
import css from './SignUp.module.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { toast } from 'react-toastify';

const SignUpForm = ({ signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const isNameValid = name.length >= 2;
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isPasswordValid = password.length >= 6 && password.length <= 12;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid || !isEmailValid || !isPasswordValid) {
      if (!isNameValid) {
        toast.error('Name must be 2 or more characters');
      }
      if (!isEmailValid) {
        toast.error('Please enter a valid email address');
      }
      if (!isPasswordValid) {
        toast.error('Password (includes letters and numbers) must contain from 6 to 12 characters');
      }
      
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
        </FormControl>

        <FormControl color={isEmailValid ? 'success' : 'error'}>
          <InputLabel>Email address</InputLabel>
          <Input id="my-name" aria-describedby="my-helper-text" type="email" name="email" onChange={handleChangeEmail} value={email}  required />
        </FormControl>

        <FormControl color={isPasswordValid ? 'success' : 'error'}>
          <InputLabel>Password</InputLabel>
          <Input id="my-password" aria-describedby="my-helper-text" type="password" name="password" onChange={handleChangePassword} value={password} required />
        </FormControl>

        <Button color="success" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;