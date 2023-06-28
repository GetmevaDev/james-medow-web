import Script from "next/script";
import { ToastContainer } from "react-toastify";

import { Montserrat } from "@next/font/google";

import "swiper/css";

import "@/styles/globals.scss";
import "boxicons/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";

export const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mont.variable} `}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
                 (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-NNNJX7H");
          `}
      </Script>

      <ToastContainer />

      <Script
        type="text/javascript"
        src="//cdn.callrail.com/companies/658899511/3048a1676ebba4a3220e/12/swap.js"
      />

      <Component {...pageProps} />
    </main>
  );
}
