import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${variables};
  
  html,
  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }
  
  #root {
    margin: 0 auto;
  }
  
  
  * {
    box-sizing: border-box;
  }
  
  body, button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  }

  p {
    line-height: 1.5;
    word-break: keep-all;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }
  
  a, a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    &:hover,
    &:focus {
      color: var(--main);
    }
  }

  ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
