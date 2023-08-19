import SignUpForm from 'components/SignUpForm/SignUpForm';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpThunk } from 'store/auth/actions';


const SignUp = () => {
 
  const dispatch = useDispatch();
  const auth = body => {
    dispatch(signUpThunk(body));
  };

  return (
    <>
      <SignUpForm signUp={auth} />
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      
    </>
  );
};

export default SignUp;
