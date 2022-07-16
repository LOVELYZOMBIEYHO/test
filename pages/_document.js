import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* test no ssl backend */}
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
          <script src="https://cdn.tailwindcss.com"></script>
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
