import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(247, 247, 247);
    --primary-color: rgb(117, 184, 255)
  }

  ul, li {
    list-style: none;
  }

  button {
    border: none;
    text-align: center;
    cursor: pointer;
  }
`;

export default GlobalStyle;
