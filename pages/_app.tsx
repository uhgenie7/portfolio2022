import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import ThemeProvider from '@src/components/ThemeProvider';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';
import Head from 'next/head';
import '../src/styles/font.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Head>
            <title>UHJ PORTFOLIO</title>
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
