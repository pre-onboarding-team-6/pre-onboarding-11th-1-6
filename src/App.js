import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import routerConfig from './router/routerConfig';
import { Container } from './components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <RouterProvider router={routerConfig} />
    </Container>
  </>
);

export default App;
