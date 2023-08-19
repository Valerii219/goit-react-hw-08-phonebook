import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'store/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const login = body => {
    dispatch(loginThunk(body));
  };
  return (
  <>
  <LoginForm login={login}/>
  <Link to="/">Home</Link>
  <Link to='/register'>SignUp</Link></>
   
  )
}

export default Login
