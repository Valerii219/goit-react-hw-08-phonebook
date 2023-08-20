import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { useDispatch } from 'react-redux';

import { loginThunk } from 'store/auth/actions';
import css from './login.module.css'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = body => {
    dispatch(loginThunk(body));
  };
  return (
  <>
  <LoginForm login={login}/>
  <div className={css.sign}><Button variant="outlined" color="secondary" onClick={() => ( navigate('./register'))} >SignUp</Button></div>
  </>
   
  )
}

export default Login
