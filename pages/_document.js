import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <title>Folklore</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Folklore es un e-commerce de productos artesanales"
          />
          <link rel="icon" href="/favicon.ico" />
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
