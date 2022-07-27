import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import Seo from "@/components/Seo";
import Seopage from "@/components/Seopage";

import layoutstyles from "@/styles/Layout.module.css";

// children 為SPECIAL 必須用children 代表body content
export default function Layout({ keywords, children, navbarOptions }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta name="keywords" content={keywords} />
      </Head>
      {router.pathname === "/videos/[slug]" ? "" : <Seopage />}
      <Header navbarOptions={navbarOptions} />
      {/* {router.pathname === "/" && <Showcase />} */}
      <div>{children}</div>
      {/* Divide footer and content body */}
      <br />
      <br />
      <br />
      <Footer navbarOptions={navbarOptions} />
    </div>
  );
}

Layout.defaultProps = {
  keywords: "Hanime, HCosplay, Anime, Cosplay",
};
