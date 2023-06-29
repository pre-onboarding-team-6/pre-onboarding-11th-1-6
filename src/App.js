import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import routerConfig from './router/routerConfig';

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={routerConfig} />
  </>
);

export default App;
