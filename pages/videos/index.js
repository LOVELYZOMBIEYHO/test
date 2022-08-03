import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
// import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";
import Showcase from "@/components/Showcase";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { revalidateTimeVariable } from "@/config/index";

import Pagination from "@/components/Pagination";

// import Card from "@/components/Card";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import Seopage from "@/components/Seopage";
import { API_URL } from "@/config/index";
import { postsNumberPerPage } from "@/config/index";

export default function Home({ posts, categoryOptions, navbarOptions }) {
  const [cateColorKey, setCateColorKey] = useState([]); // Array
  let colorKeyCForCookiesA = "";
  // --------------------------------
  // Pagination (slice posts page)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(postsNumberPerPage);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // --------------------------------

  // console.log(categoryOptions);
  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <Seopage /> */}
      <div>
        <br />
        <br />
        <br />
        <h1 className="text-center text-blue-300">全部影片</h1>
        {posts.length === 0 && <h3>No posts to show</h3>}
        <div>
          {/* Object.values can get _id(objects) value from mongodb as key */}

          {/* {posts.map((evt) => (
            <VideoitemHorizontalWithHover
              key={Object.values(evt.slug)}
              evt={evt}
              categoryOptions={categoryOptions}
            />
          ))} */}

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <br />
          {currentPosts.map((evt) => (
            <VideoitemHorizontalWithHover
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
