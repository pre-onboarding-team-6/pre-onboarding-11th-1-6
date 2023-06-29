import { Navigate } from 'react-router-dom';
import { getToken } from '../utils';
import { PATH } from '../constants';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const isLogin = getToken();

  if (redirectTo === PATH.TODO && isLogin) {
    return <Navigate to={redirectTo} replace />;
  }

  if (redirectTo === PATH.SIGN_IN && !isLogin) {
    return <Navigate to={redirectTo} replace />;
  }

  return element;
};

export default AuthenticationGuard;
