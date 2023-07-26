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
        <meta charset="UTF-8" />I offer proper education around fundamentals,
        risk management, and best trading practices traders are lacking. I
        believe that traders and investors need access to proper education. My
        Trade sessions are built around a support network, and a trading
        community with a flexible work time frame depending on your own time. My
        signals are delivered in real-time for the most familiar crypto-currency
        pairs which is the perfect solution when it comes to dissecting and
        deciphering crypto-trading signals. Why holdl blindly? trade smartly!
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
        <meta
          name="keywords"
          content="martin james greg, martingregjames, forex, broker, crypto, financial adviser "
        />
        <meta name="keywords" content="love, relationship happiness" />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        {/* <link rel="stylesheet" href="/final/index.min.css" /> */}
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        <link rel="icon" href="/favicon (1).ico" />
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
