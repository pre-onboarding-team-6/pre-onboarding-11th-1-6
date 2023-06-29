import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignIn, SignUp, Todo } from './pages';
import GlobalStyle from './styles/GlobalStyle';
import AuthenticationGuard from './guards/AuthenticationGuard';

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

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={routerConfig} />
  </>
);

export default App;
