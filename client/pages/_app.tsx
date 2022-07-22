import type { AppProps } from 'next/app';
import ThemeProvider from './context/themeProvider';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
