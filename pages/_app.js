// pages/_app.js

import Head from "next/head";
import General from "@/hooks/context/General";

import "../styles/global.css";

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="martin Greg James is an investment broker and financial adviser.
           martin portfolio are proof that he has huge experience under his sleeves;
           working with him will change your finanical life toward complete financial freedom.
           "
        />
        <meta name="robots" content="index" />
        <meta name="robots" content="index" />
        <meta name="keywords" content="martin james greg " />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        {/* <link rel="stylesheet" href="/final/index.min.css" /> */}
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        <link
          rel="shortcut icon"
          sizes="16x16"
          href="https://womenlove-wbl4.vercel.app/miller.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="https://womenlove-wbl4.vercel.app/miller.ico"
        />
        <link
          rel="icon"
          sizes="16x16"
          href="https://womenlove-wbl4.vercel.app/miller.ico"
        />
        <link
          rel="icon"
          sizes="16x16"
          href="https://womenlove-wbl4.vercel.app/miller.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="16x16"
          href="https://womenlove-wbl4.vercel.app/miller.ico"
        />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        <title>Martin Greg James</title>
        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      <General>
        <Component {...pageProps} />
      </General>
    </>
  );
}

export default MyApp;
