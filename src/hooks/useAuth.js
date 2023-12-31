import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../apis';
import { setToken } from '../utils';

const useAuth = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleValueChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    try {
      await signUp(formValues);
      navigate('/signin');
    } catch (err) {
      setError(err);
    }
  };

  const handleSignInSubmit = async e => {
    e.preventDefault();
    try {
      const { access_token: accessToken } = await signIn(formValues);
      setToken(accessToken);
      navigate('/todo', { replace: true });
    } catch (err) {
      setError(err);
    }
  };

  return { formValues, error, handleValueChange, handleSignUpSubmit, handleSignInSubmit };
};

export default useAuth;
