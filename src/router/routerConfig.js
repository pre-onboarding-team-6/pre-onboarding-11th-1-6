import { createBrowserRouter } from 'react-router-dom';
import AuthenticationGuard from '../guards/AuthenticationGuard';
import { SignIn, SignUp, Todo } from '../pages';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticationGuard redirectTo={'/todo'} element={<SignIn />} />,
  },
  {
    path: 'signup',
    element: <AuthenticationGuard redirectTo={'/todo'} element={<SignUp />} />,
  },
  {
    path: 'signin',
    element: <AuthenticationGuard redirectTo={'/todo'} element={<SignIn />} />,
  },
  {
    path: 'todo',
    element: <AuthenticationGuard redirectTo={'/signin'} element={<Todo />} />,
  },
]);

export default routerConfig;
