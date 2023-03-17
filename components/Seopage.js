import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query);
  // console.log(router.pathname.split("/"));
  const urlLastSplit = router.pathname.split("/");
  const urlLastQuery = urlLastSplit[urlLastSplit.length - 1];

  const siteName =
    "Cosplay AV無限看 | Cosplay JAV | Cosplay Porn - Jseedav.com";

  // console.log(urlLastQuery);
  // console.log(router.query["tag"]);

  return (
    <Head>
      {/* Title */}
      {(() => {
        if (router.pathname === "/") return <title>{siteName}</title>;
        if (urlLastQuery === "[cate]")
          return <title>{router.query["cate"]}</title>;
        if (urlLastQuery === "[tag]")
          return <title>{router.query["tag"]}</title>;

        return <title>{urlLastQuery}</title>;
      })()}
      {/* Description */}

      {(() => {
        if (router.pathname === "/")
          return <meta name="description" content={siteName} />;
        if (router.pathname === "/videos")
          return <meta name="description" content="全部影片" />;
        if (router.pathname === "/about")
          return <meta name="description" content={`關於 ${siteName}`} />;
      })()}

      {/* og:title */}
      {(() => {
        if (router.pathname === "/")
          return <meta property="og:title" content={siteName} />;
        if (router.pathname === "/videos")
          return (
            <meta
              property="og:title"
              content="全部影片 - Jseedav.com | Cosplay AV無限看 | Cosplay JAV | Cosplay Porn"
            />
          );
        if (router.pathname === "/about")
          return <meta property="og:title" content={`關於 ${siteName}`} />;
      })()}

      {/* og:description */}
      {(() => {
        if (router.pathname === "/")
          return (
            <meta
              property="og:description"
              content="Jseedav.com | Cosplay AV無限看 | Cosplay JAV | Cosplay Porn"
            />
          );
        if (router.pathname === "/videos")
          return <meta property="og:description" content="全部影片" />;
        if (router.pathname === "/about")
          return (
            <meta property="og:description" content={`關於 ${siteName}`} />
          );
      })()}

      {/* og:url */}
      {(() => {
        if (router.pathname === "/videos/search/[tags]")
          return (
            <meta
              property="og:url"
              content={`/videos/search/${router.query["tags"]}`}
            />
          );
      })()}

      <meta property="og:type" content="video.movie" />
      <meta
        property="og:site_name"
        content="Jseedav.com | Cosplay AV無限看 | Cosplay JAV | Cosplay Porn"
      />
      <meta property="og:image" content="/images/website-logo.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:locale" content="zh-TW" />
      <meta
        name="keywords"
        content="Jav,Japanese Av, Av, Japanese Adult movies, Adult movies, Jseedav, Jseedav.com, www.Jseedav.com, 日本AV, AV哥, 無修正AV, 無修正, AV, アダルト, セックス, エロ動画, 60FPS AV, HD AV, 無碼AV, 無廣告, 無広告 , 高清AV, Japan AV, iPhone AV, Android AV, Mobile AV, コスプレ, COSPLAY, Cosplay porn, Cosplay Jav, Cosplay av, 成人電影, 成人免費電影, 成人影片, 線上播放, BT下載, AV BT, JAVHD, Microsoft, DMM, R18"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
