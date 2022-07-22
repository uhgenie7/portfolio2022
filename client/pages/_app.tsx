import type { AppProps } from 'next/app';
import ThemeProvider from '@src/components/ThemeProvider';
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
