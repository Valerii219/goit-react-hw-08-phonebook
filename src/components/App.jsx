
import Layout from "Layout/Layout";
import Home from "Pages/Home";
import PublicGuards from "Guard/PublicGuard";
import SignUp from "Pages/SignUp";
import Login from "Pages/Login";
import { ToastContainer } from "react-toastify";
import ContactFormik from "Pages/ContactFormik";
import { Route, Routes } from "react-router";

export const App = () => {
 
  return (
    <div><ToastContainer autoClose={2300}/>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contacts" element={<ContactFormik/>}/>
        <Route path="register" element={<PublicGuards><SignUp/></PublicGuards>}/>
        <Route path="login" element={<PublicGuards><Login/> </PublicGuards>}/>
      </Route>
    </Routes>

    </div>
    
  );

};
