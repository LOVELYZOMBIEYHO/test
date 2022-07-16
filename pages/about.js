import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Seopage from "@/components/Seopage";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";
import Markdown from "markdown-to-jsx";
import { aboutPageMD } from "../markdowndocuents/aboutPage";

export default function about({ navbarOptions }) {
  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <Seopage /> */}
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-red-600">關於這個網站</h1>
        <Markdown options={{ forceBlock: true }}>{aboutPageMD}</Markdown>
        {/* <AboutDescription /> */}
        <p>Please feel free to read my blog! </p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic category colorKey and options
  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      categoryOptions,
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
