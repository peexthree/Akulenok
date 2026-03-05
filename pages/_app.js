import "../css/tailwind.css";
import { Nunito } from "next/font/google";
import Layout from "../components/layout";

export const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"]
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main className={`${nunito.variable} font-nunito`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
