import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();

  return (
    <Head>
      {/* Title */}
      {(() => {
        if (router.pathname === "/") return <title>Hoson's Digital Life</title>;
        if (router.pathname === "/articles") return <title>All Articles</title>;
        if (router.pathname === "/about") return <title>About Me</title>;
        if (router.pathname === "/category/web-development")
          return <title>Web-Development</title>;
        if (router.pathname === "/category/digital-marketing")
          return <title>Digital-Marketing</title>;
      })()}
      {/* Description */}

      {(() => {
        if (router.pathname === "/")
          return <meta name="description" content="Hoson's Digital Life" />;
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
          return <meta property="og:title" content="Hoson's Digital Life" />;
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
          return (
            <meta property="og:description" content="Hoson's Digital Life" />
          );
        if (router.pathname === "/articles")
          return <meta property="og:description" content="All Articles" />;
        if (router.pathname === "/about")
          return <meta property="og:description" content="About Me" />;
        if (router.pathname === "/category/web-development")
          return <meta property="og:description" content="Web Development" />;
        if (router.pathname === "/category/digital-marketing")
          return <meta property="og:description" content="Digital Marketing" />;
      })()}

      <meta property="og:url" content={router.pathname} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Hoson's Digital Life" />
      <meta property="og:image" content="/images/showcase.jpg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:locale" content="en-CA" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
