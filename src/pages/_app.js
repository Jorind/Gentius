import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import "tailwindcss/tailwind.css";

import "../styles/slider.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
