import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query);
  // console.log(router.pathname.split("/"));
  const urlLastSplit = router.pathname.split("/");
  const urlLastQuery = urlLastSplit[urlLastSplit.length - 1];
  // console.log(urlLastQuery);
  // console.log(router);

  return (
    <Head>
      {/* Title */}
      {(() => {
        if (router.pathname === "/") return <title>Jseedav</title>;
        if (urlLastQuery === "[cate]")
          return <title>{router.query["cate"]}</title>;
        if (urlLastQuery === "[tags]")
          return <title>{router.query["tags"]}</title>;

        return <title>{urlLastQuery}</title>;
      })()}
      {/* Description */}

      {(() => {
        if (router.pathname === "/")
          return <meta name="description" content="Jseedav" />;
        if (router.pathname === "/articles")
          return <meta name="description" content="All Articles" />;
        if (router.pathname === "/about")
          return <meta name="description" content="About Me" />;
        if (router.pathname === "/category/web-development")
          return <meta name="description" content="Web Development" />;
        if (router.pathname === "/category/digital-marketing")
          return <meta name="description" content="Digital Marketing" />;
      })()}

      {/* og:title */}
      {(() => {
        if (router.pathname === "/")
          return <meta property="og:title" content="Jseedav" />;
        if (router.pathname === "/articles")
          return <meta property="og:title" content="All Articles" />;
        if (router.pathname === "/about")
          return <meta property="og:title" content="About Me" />;
        if (router.pathname === "/category/web-development")
          return <meta property="og:title" content="Web Development" />;
        if (router.pathname === "/category/digital-marketing")
          return <meta property="og:title" content="Digital Marketing" />;
      })()}

      {/* og:description */}
      {(() => {
        if (router.pathname === "/")
          return <meta property="og:description" content="Jseedav" />;
        if (router.pathname === "/articles")
          return <meta property="og:description" content="All Articles" />;
        if (router.pathname === "/about")
          return <meta property="og:description" content="About Me" />;
        if (router.pathname === "/category/web-development")
          return <meta property="og:description" content="Web Development" />;
        if (router.pathname === "/category/digital-marketing")
          return <meta property="og:description" content="Digital Marketing" />;
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
      <meta property="og:site_name" content="Jseedav" />
      <meta property="og:image" content="/images/showcase.jpg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:locale" content="en-CA" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
