import Document, { Html, Head, Main, NextScript } from "next/document";

const isProd = process.env.NODE_ENV === "production";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {isProd || (
            <meta
              httpEquiv="Content-Security-Policy"
              content="upgrade-insecure-requests"
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
