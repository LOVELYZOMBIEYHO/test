import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ evt }) {
  const router = useRouter();
  const evtCustom = evt[0];
  const evtCategories = `${evtCustom.category.categoryChi}, ${evtCustom.category.categoryEng},${evtCustom.category.categoryJap}`;
  const evtTags = `${evtCustom.tags.join(", ").toString()}`;
  return (
    <Head>
      <title>{`${evtCustom.titleChinese} - Jseedav.com | 海量高清AV無限看 |`}</title>
      <meta name="description" content={evtCustom.descriptionChi} />
      <meta property="og:locale" content="zh-TW" />
      <meta
        property="og:title"
        content={`${evtCustom.titleChinese} - Jseedav.com | 海量高清AV無限看 |`}
      />
      <meta
        property="og:description"
        content={`${evtCustom.descriptionChi} - Jseedav.com | 海量高清AV無限看 |`}
      />
      {/* url need to be updated with the new domain */}
      <meta property="og:url" content={`/videos/${evtCustom.slug}`} />
      <meta property="og:type" content="videos" />
      <meta property="og:site_name" content="Jseedav | 海量高清AV無限看 |" />
      {/* <meta property="article:published_time" content={evt.published_at} />
      <meta property="article:modified_time" content={evt.updated_at} /> */}

      {/* og:image may not read cdn  */}
      <meta property="og:image" content={evtCustom.imageLinkHorizontal} />

      <meta name="keywords" content={`${evtCategories}, ${evtTags}`} />

      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
