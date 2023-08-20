import { Route, Routes } from "react-router";
import ContactFormik from "pages/ContactFormik";

import Layout from "Layout/Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import PublicGuards from "Guard/PublicGuard";

export const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contacts" element={<ContactFormik/>}/>
        <Route path="register" element={<PublicGuards><SignUp/></PublicGuards>}/>
        <Route path="login" element={<PublicGuards><Login/></PublicGuards>}/>
      </Route>
      
      
    </Routes>

  );

};
