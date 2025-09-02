import Document, { Html, Head, Main, NextScript } from "next/document";
import { inter, fredoka } from "./_app";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
 <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
          
        </Head>
        <body className={`${inter.variable} ${fredoka.variable}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;