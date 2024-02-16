/* eslint-disable import/order */
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";

import { fetchAPI } from "@/components/utils/fetchApi";
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

async function getCommonData() {
  const layoutData = await fetchAPI("layout?populate=deep");
  const menusData = await fetchAPI("navs?populate=deep");
  const courtsData = await fetchAPI("courts-we-covers?populate=deep");
  return { layoutData, menusData, courtsData };
}

export default function App({ Component, pageProps, commonData }) {
  return (
    <main className={`${mont.variable} `}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NNNJX7H"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NNNJX7H');
        `}
      </Script>

      <ToastContainer />

      <noscript>
        <iframe
          title="map"
          src="https://www.googletagmanager.com/ns.html?id=GTM-NNNJX7H"
          height={0}
          width={0}
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Script
        type="text/javascript"
        src="http:////cdn.callrail.com/companies/658899511/3048a1676ebba4a3220e/12/swap.js"
      />
      <Script src="//code.tidio.co/zugsehbir1kb730wpjfwl95zl5wtvwzb.js" />
      {/* <GoogleReCaptchaProvider
        reCaptchaKey="6LfRl3MpAAAAAJFjMqDpE6YaNz1y1uVN30LQ5pRe"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      > */}
      <Component {...pageProps} commonData={commonData} />
      {/* </GoogleReCaptchaProvider> */}
    </main>
  );
}

App.getInitialProps = async () => {
  const commonData = await getCommonData();
  return { commonData };
};
