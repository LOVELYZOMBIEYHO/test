import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

class MyDocument extends Document {
  render() {
    return (
      // if eng web change zh to en
      <Html lang="zh">
        {/* <Seopage /> */}
        <Head>
          {/* PWA icon setting */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          {/* test no ssl backend */}
          {/* <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          {/* <script src="https://cdn.tailwindcss.com"></script> */}
          {/* Google Material Icon */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
          {/* Old Tailwind CSS for reference */}
          {/* <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* -------AD-------- */}
          <script
            async="async"
            data-cfasync="false"
            src="//pl17559545.highperformancegate.com/e28ba9e484bf75db00eb45066ce57674/invoke.js"
          ></script>

          {/* ------------ */}
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
