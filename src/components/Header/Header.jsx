import React from 'react'
import css from './Header.module.css'
import {  NavLink, useNavigate } from 'react-router-dom';
import { selectAuth } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from 'store/auth/slice';
import { get } from 'services/auth';
// import { deleteToken } from 'services/api';
import { logOutThunk } from 'store/auth/actions';

const Header = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(selectAuth)
const dispatch = useDispatch()
const handleLogOut = () => {
  dispatch(logOutThunk()); // Виклик функції виходу
   // deleteToken()
};
  
  
  return (<header>
    <div className={css.header}>
        <NavLink  to="/">Home</NavLink>
        <button onClick={()=>isAuth ? handleLogOut() : navigate('./login')}>{isAuth?'Logout': 'Login'}</button>
        <button onClick={()=> navigate('./register')}>SignUp</button>
        <button onClick={get}>get</button>
    </div>
    </header>
    
  )
}

export default Header;
