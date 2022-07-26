import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globalStyle';

const theme = {};

export const decorators = [
  (Story, context) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story {...context} />
      </ThemeProvider>
    </RecoilRoot>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F7F4',
      },
      {
        name: 'dark',
        value: '#1E1E22',
      },
    ],
  },
};
