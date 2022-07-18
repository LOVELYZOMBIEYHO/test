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
import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";
import Seo from "@/components/Seo";
import Seopage from "@/components/Seopage";

import Head from "next/head";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";

export default function SearchPageResults({
  posts,
  categoryOptions,
  navbarOptions,
}) {
  const router = useRouter();
  const searchTerm = router.query;
  //   console.log(searchTerm);
  // console.log(posts);
  return (
    <Layout navbarOptions={navbarOptions}>
      <Seopage />
      <div>
        <Link href="/videos">Go Back</Link>
        <br />
        <br />
        <br />

        <h1 className="text-blue-300 text-center">
          {router.query.tags} 搜尋結果
        </h1>
        <br />
        {posts.length === 0 && <h3 className="text-center">暫無相關內容</h3>}
        {/* 將events 的數據取出放在evt 中,使Eventitem.js 可用evt讀取 */}
        {posts.map((post) => (
          <VideoitemHorizontalWithHover
            key={post.slug}
            evt={post}
            categoryOptions={categoryOptions}
          />
        ))}
        {/* {posts.map((post) => (
          <div>{post.slug}</div>
        ))} */}
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

//  ServerSide Rendering
export async function getServerSideProps({ query: { tags } }) {
  // const res = await fetch(`${API_URL}/search/${tags}`);
  // const res = await fetch(`${API_URL}/multisearch?tags=${tags}`);
  // const posts = await res.json();

  // Dynamic Search Switch
  const resSearchA = await (await fetch(`${API_URL}/search/${tags}`)).json();
  const resSearchB = await (
    await fetch(`${API_URL}/multisearch?tags=${tags}`)
  ).json();

  // if (resSearchA.length == 0) {
  //   console.log("true");
  // }
  // const posts = resSearchA;

  const posts = resSearchA.length == 0 ? resSearchB : resSearchA;

  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  return {
    props: {
      posts,
      categoryOptions,
      navbarOptions,
    },
  };
}
