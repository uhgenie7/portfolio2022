import type { AppProps } from 'next/app';
import ThemeProvider from '@src/components/ThemeProvider';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';
import Head from 'next/head';
import Favicon from '@src/components/Favicon';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Head>
            <meta charSet="utf-8" />
            <Favicon />
            <meta name="keywords" content="포트폴리오, 엄혜진" />
            <meta name="description" content="엄혜진의 포트폴리오 사이트입니다" />
            <meta name="author" content="hyejin" />
            <meta property="og:title" content="엄혜진의 포트폴리오 사이트" />
            <meta property="og:site_name" content="UHJ PORTFOLIO" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="엄혜진의 포트폴리오 사이트입니다." />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
            <link rel="canonical" href="" />
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
