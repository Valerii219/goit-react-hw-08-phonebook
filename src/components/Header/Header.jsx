import React from 'react';
import css from './Header.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectAuth } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from 'services/api';
import { logOutThunk } from 'store/auth/actions';
import { ButtonBase } from '@mui/material';
import home from '../../img/home.png';
import log from '../../img/log.png';
import logOut from '../../img/logOut.jpg';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    deleteToken();
  };

  return (
    <header>
      <div className={css.header}>
        <div className={css.home}>
          <ButtonBase onClick={() => navigate('./')}>
            <img className={css.img} src={home} alt="Home" width='60' height='60' />
          </ButtonBase>
        </div>
        {location.pathname !== '/login' && (
          <div className={css.login}>
            <ButtonBase variant="outlined" onClick={() => (isAuth ? handleLogOut() : navigate('./login'))}>
              {isAuth ? (
                <img className={css.img} src={logOut} alt="Logout" width='60' height='60' />
              ) : (
                <img className={css.img} src={log} alt="Login" width='60' height='60' />
              )}
            </ButtonBase>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;