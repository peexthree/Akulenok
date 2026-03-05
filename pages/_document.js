import Document, { Html, Head, Main, NextScript } from "next/document";
import { nunito } from "./_app";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        </Head>
        <body className="bg-slate-50 text-slate-800 font-nunito antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
