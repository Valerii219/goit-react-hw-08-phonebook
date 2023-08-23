
import css from './Header.module.css';
import { useNavigate} from 'react-router-dom';

import {  ButtonBase } from '@mui/material';
import home from '../../img/home.png';


import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/selectors';
import Navig from 'components/Log and Registr/Navig';


const Header = () => {
  const navigate = useNavigate();
  const isLoading = useSelector(authSelectors.selectLoading);
 
  return (
    <header>
      <div className={css.header}>
        <div className={css.home}>
          <ButtonBase onClick={() => navigate('./')}>
            <img
              className={css.img}
              src={home}
              alt="Home"
              width="60"
              height="60"
            />
          </ButtonBase>
          <ButtonBase onClick={() => navigate('./contacts')}>
           contacts
          </ButtonBase>
          
        </div>
        {isLoading ?  <UserMenu /> : <Navig/>} 
       
          
       
       
      </div>
    </header>
  );
};

export default Header;
