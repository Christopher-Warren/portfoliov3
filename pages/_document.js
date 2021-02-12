import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white ">
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta
            httpEquiv="ScreenOrientation"
            content="autoRotate:disabled"
          ></meta>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
