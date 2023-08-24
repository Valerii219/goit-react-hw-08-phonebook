
import css from './login.module.css';


import 'react-toastify/dist/ReactToastify.css';
import LoginForm from 'components/LoginForm/LoginForm';


const Login = () => {
  // const navigate = useNavigate();

  return (
    <>
      <LoginForm  />
      <div className={css.sign}>
       
      </div>
    </>
  );
};

export default Login;
