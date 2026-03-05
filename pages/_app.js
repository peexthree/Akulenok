import "../css/tailwind.css";
import { Inter, Fredoka } from "next/font/google";
import Layout from "../components/layout";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
