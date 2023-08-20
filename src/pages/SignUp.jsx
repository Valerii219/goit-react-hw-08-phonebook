import SignUpForm from 'components/SignUpForm/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { signUpThunk } from 'store/auth/actions';
import { selectAuth } from 'store/auth/selectors';


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const auth = async body => {
    try {
      await dispatch(signUpThunk(body)).unwrap()
      toast.success("Registration is successful!");
      if (isAuth) {
        navigate('./contacts')}
    } catch (error) {
      toast.error("Login or password is incorrect or the user with such email is already registered ");
    }
  };

  return (
    <>
      <SignUpForm signUp={auth} />
    </>
  );
};

export default SignUp;
