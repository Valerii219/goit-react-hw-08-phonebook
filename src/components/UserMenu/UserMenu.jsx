import React from 'react'
import logOut from '../../img/logOut.jpg'
import css from '../Header/Header.module.css'
import { ButtonBase } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import authSelectors from 'store/auth/selectors'
import { logOutThunk } from 'store/auth/operations'
const UserMenu = () => {
  const mail = useSelector(authSelectors.selectUser);
  const dispatch = useDispatch();
  return (
    
    <div className={css.menu}>
  <p>{mail}</p>
  <ButtonBase variant="outlined" onClick={()=>dispatch(logOutThunk())}><img
              // className={css.img}
              src={logOut}
              alt="Logout"
              width="60"
              height="60"
            /></ButtonBase>
</div>
  )
}

export default UserMenu
