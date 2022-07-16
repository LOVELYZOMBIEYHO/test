import Head from "next/head";

export default function Seo({ evt }) {
  const evtCustom = evt[0];
  return (
    <Head>
      <title>{evtCustom.titleChinese}</title>
      <meta name="description" content={evtCustom.description} />
      <meta property="og:locale" content="en-CA" />
      <meta property="og:title" content={evtCustom.titleChinese} />
      <meta property="og:description" content={evtCustom.description} />
      {/* url need to be updated with the new domain */}
      <meta property="og:url" content={`/videos/${evtCustom.slug}`} />
      <meta property="og:type" content="videos" />
      <meta property="og:site_name" content="H website" />
      {/* <meta property="article:published_time" content={evt.published_at} />
      <meta property="article:modified_time" content={evt.updated_at} /> */}

      {/* og:image may not read cdn  */}
      <meta property="og:image" content={evtCustom.imageLinkHorizontal} />
      <meta property="og:image" content="/images/showcase.jpg" />

      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
