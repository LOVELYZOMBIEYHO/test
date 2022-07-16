// import "@/styles/globals.css";
// import ReactGA from "react-ga4";
// import { useState, useEffect } from "react";

// function MyApp({ Component, pageProps }) {
//   ReactGA.initialize("G-14NYJXTW9X");

//   // ReactGA.send("pageview");
//   // useEffect(() => {
//   //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
//   // }, []);

//   ReactGA.event({
//     category: "your category",
//     action: "your action",
//     label: "your label", // optional
//     value: 99, // optional, must be a number
//     nonInteraction: true, // optional, true/false
//     transport: "xhr", // optional, beacon/xhr/image
//   });

//   ReactGA.modalview("/");

//   // ReactGA.pageview(window.location.pathname + window.location.search);
//   return <Component {...pageProps} />;
// }

// export default MyApp;

// ----------------------------------

import "@/styles/globals.css";
import ReactGA from "react-ga4";
import { useState, useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageview } from "../lib/gtm";
function MyApp({ Component, pageProps }) {
  ReactGA.initialize("G-14NYJXTW9X");

  // ReactGA.send("pageview");
  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // }, []);

  // ReactGA.event({
  //   category: "your category",
  //   action: "your action",
  //   label: "your label", // optional
  //   value: 99, // optional, must be a number
  //   nonInteraction: true, // optional, true/false
  //   transport: "xhr", // optional, beacon/xhr/image
  // });

  // GTM setting
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
