import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Favicon from '@src/components/Favicon';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {' '}
            {initialProps.styles} {sheet.getStyleElement()}{' '}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <Favicon />
          <meta name="keywords" content="프론트엔드, 포트폴리오, 엄혜진" />
          <meta name="description" content="엄혜진의 포트폴리오 사이트입니다" />
          <meta name="author" content="hyejin" />
          <meta property="og:title" content="엄혜진의 포트폴리오 사이트" />
          <meta property="og:site_name" content="UHJ PORTFOLIO" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="엄혜진의 포트폴리오 사이트입니다." />
          <meta property="og:url" content="portfolio2022-puce.vercel.app/" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/72803184/189064724-ad951731-ba1f-4227-8986-3dfe01234d08.png"
          />
          <link rel="canonical" href="portfolio2022-puce.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
