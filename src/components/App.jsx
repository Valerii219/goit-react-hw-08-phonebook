import Layout from '../Layout/Layout';
import Home from '../pages/Home';

import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { ToastContainer } from 'react-toastify';

import { Route, Routes } from 'react-router';
import ContactFormik from '../pages/ContactFormik';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'store/auth/operationsAuth';
import PrivateRoad from '../PrivateRoad/PrivateRoad';
import PublicRoad from '../PublicRoad/PublicRoad';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);


  return (
    <div>
      <ToastContainer autoClose={2300} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoad>
                <ContactFormik />
              </PrivateRoad>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoad>
                <SignUp />
              </PublicRoad>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoad>
                <Login />
              </PublicRoad>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};