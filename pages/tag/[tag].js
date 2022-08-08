// import Link from "next/link";
// import Layout from "@/components/Layout";
// import Eventitem from "@/components/Eventitem";
// import Showcase from "@/components/Showcase";
// import Seopage from "@/components/Seopage";
// // import Card from "@/components/Card";
// // {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

// import { API_URL } from "@/config/index";

// export default function hanime({ cates, cate }) {
//   return (
//     <Layout>
//       {/* <Seopage /> */}
//       <div>
//         <br />
//         <br />
//         <br />

//         <h1 className="text-center text-red-600">{`${cate}`}</h1>

//         {cates.length === 0 && <h3>No cates to show</h3>}
//         <div className="inline-block">
//           {cates.map((evt) => (
//             <Eventitem key={evt.slug} evt={evt} />
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// // export async function getStaticProps() {
// //   const res = await fetch(`${API_URL}/category/hanime`);
// //   const posts = await res.json();

// //   return {
// //     // 這裡用Props是因為data現在在server side 需在function Home中output

// //     props: { posts },
// //     revalidate: 60,
// //   };
// // }

// // ---------------------------
// //  ServerSide Rendering
// export async function getServerSideProps({ query: { cate } }) {
//   const res = await fetch(`${API_URL}/category/${cate}`);
//   const cates = await res.json();

//   return {
//     props: {
//       cates,
//       cate,
//     },
//   };
// }
// ----------------------------

// ------

import Link from "next/link";
import Layout from "@/components/Layout";
import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";

import Showcase from "@/components/Showcase";
import Seo from "@/components/Seo";
import Seopage from "@/components/Seopage";

// import Card from "@/components/Card";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import { API_URL } from "@/config/index";
import { useEffect, useState } from "react";

import AdpostB from "@/components/AdpostB";

export default function tagfindposts({
  posts,
  tag,
  // cate,
  categoryOptions,
  navbarOptions,
}) {
  // const [cateChiName, setCateChiName] = useState("");
  // useEffect(() => {
  //   for (let i = 0; i < categoryOptions.length; i++) {
  //     if (categoryOptions[i].label == cate) {
  //       setCateChiName(categoryOptions[i].chiName);
  //     }
  //   }
  // }, []);

  return (
    <Layout navbarOptions={navbarOptions}>
      <Seopage />
      <div>
        <br />
        <br />
        <br />

        <h1 className="text-center text-blue-300">{`${tag}`}</h1>

        {posts.length === 0 && (
          <h3 className="text-center">{`沒有 ${tag} 標籤顯示`}</h3>
        )}
        <div>
          {posts.map((evt) => (
            <VideoitemHorizontalWithHover
              key={evt.slug}
              evt={evt}
              categoryOptions={categoryOptions}
            />
          ))}
        </div>
      </div>
      <AdpostB />
    </Layout>
  );
}

// // ---Incremental Static Regeneration(ISR) https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration----------

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params: { tag } }) {
  const res = await fetch(`${API_URL}/tag/${tag}`);
  const posts = await res.json();

  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  return {
    props: {
      posts,
      tag,
      categoryOptions,
      navbarOptions,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 120, // In seconds
  };
}
// 求其PICK 一個POST 作為首次RENDER 的POST， 若可行，可npm run build & start （可在FLASK 後台測試有沒有每次更新F5 都會FETCH DATA

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
// -------Wrong------
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/post`);
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { cate: post.slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }
// ------Correct--------
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/categoryoptions`);
//   const categorys = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = categorys.map((category) => ({
//     params: { cate: category.engName },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }
// ------Correct2 for not too much conflict with dynamic sitemap--------
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/tagforisrfirst`);
  const tags = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = tags.map((tag) => ({
    params: { tag: tag.chiName },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
