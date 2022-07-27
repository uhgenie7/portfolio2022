import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: '#F8F7F4',
  textColor: '#31302E',
  borderColor: '1px solid #eaeaea',
  highlight: '#d4f0f0',
};

export const darkTheme: DefaultTheme = {
  bgColor: '#1E1E22',
  textColor: '#ccc',
  borderColor: '1px solid #2c2d33',
  highlight: '#426693',
};

const colors = {
  main: '#25b5aa',
  success: '#83E031',
  info: '#42C9FF',
  warning: '#FFC747',
  danger: '#FF543A',
};

export const theme = {
  lightTheme,
  darkTheme,
  colors,
};
