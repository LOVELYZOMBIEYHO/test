import React from "react";
import { hello, world } from "api/hello";
import Layout from "@/components/Layout";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";

import { useEffect } from "react";
export default function test({ navbarOptions }) {
  hello();
  world();
  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = "https://use.typekit.net/foobar.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      test
      {/* <script
        async
        src="https://telegram.org/js/telegram-widget.js?19"
        data-telegram-post="teleembed/5"
        data-width="100%"
        data-userpic="false"
      ></script> */}
      {/* https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx */}
      <iframe
        id="xxx"
        title="xxx"
        width="1000"
        height="1000"
        frameBorder="value"
        allowTransparency
        srcDoc={`
          <!doctype html>
          <html>
          <head>
              <title>Chat bot</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width">
          </head>
          <body style="width:100%">
          <script
          async
          src="https://telegram.org/js/telegram-widget.js?19"
          data-telegram-post="teleembed/5"
          data-width="100%"
          data-userpic="false"
        ></script>
          </body>
          </html>
          `}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  // // Dynamic category colorKey and options
  // const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  // const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      // categoryOptions,
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
