/* eslint-disable import/order */
import Script from "next/script";
import { ToastContainer } from "react-toastify";

import { fetchAPI } from "@/components/utils/fetchApi";
import { Montserrat } from "@next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

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
  const layoutDataPromise = fetchAPI("layout?populate=deep");
  const menusDataPromise = fetchAPI("navs?populate=deep");
  const courtsDataPromise = fetchAPI("courts-we-covers?populate=deep");

  const [layoutData, menusData, courtsData] = await Promise.all([
    layoutDataPromise,
    menusDataPromise,
    courtsDataPromise,
  ]);

  return { layoutData, menusData, courtsData };
}
export default function App({ Component, pageProps, commonData }) {
  return (
    <div className={`${mont.variable} `}>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NNNJX7H"
        strategy="afterInteractive"
      /> */}
      <GoogleTagManager gtmId="GTM-NNNJX7H" />
      <Script id="google-analytics" strategy="afterInteractive" async>
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
      <Script src="//code.tidio.co/zugsehbir1kb730wpjfwl95zl5wtvwzb.js" async />
      <Component {...pageProps} commonData={commonData} />
    </div>
  );
}

App.getInitialProps = async () => {
  const commonData = await getCommonData();
  return { commonData };
};
