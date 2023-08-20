import Header from 'components/Header/Header'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { refreshThunk } from 'store/auth/actions'
import { selectAuth } from 'store/auth/selectors'

const Layout = () => {
  const isAuth = useSelector(selectAuth)
  const dispatch = useDispatch();

  useEffect(() => {
   !isAuth && dispatch(refreshThunk())
  }, [dispatch, isAuth])
  
  return (<>
  <Header/>
  <Outlet/>
  </>
    
  )
}

export default Layout
