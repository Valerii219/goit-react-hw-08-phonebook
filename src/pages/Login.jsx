
import css from './login.module.css';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from 'components/LoginForm/LoginForm';


const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <LoginForm  />
      <div className={css.sign}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/register')}
        >
          SignUp
        </Button>
      </div>
    </>
  );
};

export default Login;
