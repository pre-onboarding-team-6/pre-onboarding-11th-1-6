import { createBrowserRouter } from 'react-router-dom';
import AuthenticationGuard from '../guards/AuthenticationGuard';
import { SignIn, SignUp, Todo } from '../pages';
import { PATH } from '../constants';

const routerConfig = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <AuthenticationGuard redirectTo={PATH.TODO} element={<SignIn />} />,
  },
  {
    path: PATH.SIGN_IN,
    element: <AuthenticationGuard redirectTo={PATH.TODO} element={<SignIn />} />,
  },
  {
    path: PATH.SIGN_UP,
    element: <AuthenticationGuard redirectTo={PATH.TODO} element={<SignUp />} />,
  },
  {
    path: PATH.TODO,
    element: <AuthenticationGuard redirectTo={PATH.SIGN_IN} element={<Todo />} />,
  },
]);

export default routerConfig;
