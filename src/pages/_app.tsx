import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "@/styles/globals.css";

const CryptoApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default CryptoApp;
