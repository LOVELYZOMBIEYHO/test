// import qs from "qs";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Layout from "@/components/Layout";
// import Eventitem from "@/components/Eventitem";
// import Head from "next/head";
// // {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
// import { API_URL } from "@/config/index";

// export default function EvensPage({ articles }) {
//   const router = useRouter();

//   console.log(articles);
//   return (
//     <Layout>
//       <Head>
//         <title>Search Results</title>
//       </Head>
//       <div className="m-3">
//         <Link href="/articles">Go Back</Link>
//         <h1 className="text-red-600">Search Results for {router.query.term}</h1>

//         {articles.length === 0 && <h3>No events to show</h3>}
//         {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
//         {articles.map((evt) => (
//           <Eventitem key={evt.id} evt={evt} />
//         ))}
//       </div>
//     </Layout>
//   );
// }

// //  暫時SEARCH 1 會出news category 2 會出nature
// export async function getServerSideProps({ query: { term } }) {
//   const query = qs.stringify({
//     _where: {
//       _or: [
//         { title_contains: term },
//         { description_contains: term },
//         { category_contains: term },
//         { tag_contains: term },
//         { content_contains: term },
//       ],
//     },
//   });

//   const res = await fetch(`${API_URL}/articles?${query}`);
//   const articles = await res.json();
//   console.log(articles);
//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output
//     props: { articles },
//   };
// }

// -------------------------

import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import CategoryShowCase from "@/components/CategoryShowCase";
import TagShowCase from "@/components/TagShowCase";
import Seo from "@/components/Seo";
import Seopage from "@/components/Seopage";

import Head from "next/head";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";
import { useState, useEffect } from "react";
import SearchFilterButton from "@/components/SearchFilterButton";

export default function SearchPage({
  categoryOptions,
  navbarOptions,
  tagOptions,
  bigTagOptions,
  bigTagOptionsB,
  bigTagOptionsC,
}) {
  const router = useRouter();
  const searchTerm = router.query;
  return (
    <Layout navbarOptions={navbarOptions}>
      <Seopage />
      <br />
      <br />
      <br />

      <div>
        {/* ------------ */}

        {/* ------------ */}

        {/* <SearchFilterButton
          categoryOptions={categoryOptions}
          tagOptions={tagOptions}
        /> */}

        <SearchFilterButton
          categoryOptions={categoryOptions}
          tagOptions={tagOptions}
          bigTagOptions={bigTagOptions}
          bigTagOptionsB={bigTagOptionsB}
          bigTagOptionsC={bigTagOptionsC}
        />
        {/* ------------ */}
        {/* <div>請在搜索欄輸入 (多重篩選）</div> */}
        <div>類別</div>
        {categoryOptions.map((evt) => (
          <CategoryShowCase key={Object.values(evt.engName)} evt={evt} />
        ))}

        <div>標籤</div>
        {tagOptions.map((evt) => (
          <TagShowCase key={Object.values(evt.chiName)} evt={evt} />
        ))}

        {/* <CategoryShowCase categoryOptions={categoryOptions} /> */}

        {/* <h1 className="text-red-600">Search Results for {router.query}</h1> */}
      </div>
    </Layout>
  );
}

// //  暫時SEARCH 1 會出news category 2 會出nature
// export async function getServerSideProps({ query: { term } }) {
//   const query = qs.stringify({
//     _where: {
//       _or: [
//         { title_contains: term },
//         { description_contains: term },
//         { category_contains: term },
//         { tag_contains: term },
//         { content_contains: term },
//       ],
//     },
//   });

//   const res = await fetch(`${API_URL}/search/${query}`);
//   const posts = await res.json();
//   console.log(`${API_URL}/search/${query}`);
//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output
//     props: { posts },
//   };
// }

export async function getStaticProps() {
  // Dynamic category colorKey and options
  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  // Dynamic tag and options
  const resTagOptions = await fetch(`${API_URL}/tagoptions`);
  const tagOptions = await resTagOptions.json();

  // Dynamic Big tag
  const resBigTagOptions = await fetch(`${API_URL}/bigtagtotags`);
  const bigTagOptions = await resBigTagOptions.json();

  // Dynamic Big tag
  const resBigTagOptionsB = await fetch(`${API_URL}/bigtagtotagsb`);
  const bigTagOptionsB = await resBigTagOptionsB.json();

  // Dynamic Big tag
  const resBigTagOptionsC = await fetch(`${API_URL}/bigtagtotagsb`);
  const bigTagOptionsC = await resBigTagOptionsC.json();

  return {
    props: {
      categoryOptions,
      navbarOptions,
      tagOptions,
      bigTagOptions,
      bigTagOptionsB,
      bigTagOptionsC,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
