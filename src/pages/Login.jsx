import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { loginThunk } from 'store/auth/actions';
import css from './login.module.css'
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import {  toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { selectAuth } from 'store/auth/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();
  const login = async body => {
    try {
      await dispatch(loginThunk(body)).unwrap()
      toast.success("Login successful!");
      if (isAuth) {
        navigate('/contacts'); // Виправлено виклик navigate
        console.log('Navigated to /contacts'); // Додано console.log
      }
    } catch (error) {
      toast.error("Login or password is incorrect ");
    }
    
  };
  return (
  <>
  <LoginForm login={login}/>
  <div className={css.sign}><Button variant="outlined" color="secondary" onClick={() => ( navigate('/register'))} >SignUp</Button></div>
  </>
   
  )
}

export default Login
