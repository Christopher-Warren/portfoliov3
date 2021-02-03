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
        <body className="bg-gray-900 text-white">
          <link rel="icon" type="image/png" href="/favicon.png" />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
