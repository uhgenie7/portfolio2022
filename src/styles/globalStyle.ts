import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${variables};

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/PretendardVariable.ttf') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    width: 100%;
    scroll-behavior: smooth;
    font-family: Pretendard-Regular, -apple-system, sans-serif;
  }

  #root {
    margin: 0 auto;
  }
  
  
  * {
    box-sizing: border-box;
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
