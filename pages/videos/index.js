import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import Showcase from "@/components/Showcase";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { revalidateTimeVariable } from "@/config/index";

// import Card from "@/components/Card";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import Seopage from "@/components/Seopage";
import { API_URL } from "@/config/index";

export default function Home({ posts, categoryOptions, navbarOptions }) {
  const [cateColorKey, setCateColorKey] = useState([]); // Array
  let colorKeyCForCookiesA = "";

  // console.log(categoryOptions);
  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <Seopage /> */}
      <div>
        <br />
        <br />
        <br />
        {posts.length === 0 && <h3>No posts to show</h3>}
        <div className="inline-block">
          {/* Object.values can get _id(objects) value from mongodb as key */}

          {posts.map((evt) => (
            <VideoitemHorizontal
              key={Object.values(evt.slug)}
              evt={evt}
              categoryOptions={categoryOptions}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}/post`);
  const posts = await res.json();

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
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
