import SignUpForm from 'components/SignUpForm/SignUpForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { signUpThunk } from 'store/auth/actions';


const SignUp = () => {
 
  const dispatch = useDispatch();
  const auth = async body => {
    try {
      await dispatch(signUpThunk(body)).unwrap()
      toast.success("Registration is successful!");
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
