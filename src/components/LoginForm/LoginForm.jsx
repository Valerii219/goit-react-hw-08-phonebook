import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return;
    }
    login({ email, password });
  };

  const emailColor = email === '' ? 'secondary' : 'warning'; // Виправлена логіка для зміни кольору
// const passwordColor = password ===
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="filled"
          id='email'
          type="email"
          color={emailColor} // Використовуємо зміну кольору
          onChange={handleChangeEmail}
          value={email}
          focused
          required
        />
        <TextField
          label="Password"
          variant="filled"
          id='password'
          type="password"
          color='secondary' // Використовуємо той самий колір для обох полів
          onChange={handleChangePassword}
          value={password}
          focused
          
          required 
        />
        <Button variant="contained" color="success" type='submit'>submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;