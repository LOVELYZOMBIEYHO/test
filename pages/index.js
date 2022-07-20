import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";

import Showcase from "@/components/Showcase";
import HomeShowCaseOne from "@/components/HomeShowCaseOne";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { revalidateTimeVariable } from "@/config/index";

import ReactGA from "react-ga4";
// import Card from "@/components/Card";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json

import Seopage from "@/components/Seopage";
import { API_URL } from "@/config/index";

import axios from "axios";
import HoverVideoPlayer from "react-hover-video-player";

export default function Home({ posts, navbarOptions, categoryOptions }) {
  // const test = ReactGA.send("pageview");
  // console.log(test);
  // react-ga4
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  // const countAPIGetViewRequest = async () => {
  //   try {
  //     const resp = await axios.get(
  //       `https://api.countapi.xyz/hit/jseedav.com/:PATHNAME:${posts[0].idCount}`
  //     );
  //     console.log(resp.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  // countAPIGetViewRequest();

  // for test vps
  // useEffect(() => {
  //   async function checkLikedPosts() {
  //     // if not login, dont render

  //     const results = await axios.get(`${API_URL}/post`);

  //     console.log(results);
  //   }
  //   checkLikedPosts();
  // }, []);

  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <Seopage /> */}
      <div>
        <br />
        <br />
        <br />

        {/* <Showcase /> */}
        <br />
        <div>人氣熱門</div>
        <br />
        <HomeShowCaseOne posts={posts} categoryOptions={categoryOptions} />
        {posts.length === 0 && <h3>No posts to show</h3>}
        <br />

        <div>最近更新</div>
        <br />
        {/* Object.values can get _id(objects) value from mongodb as key */}

        {/* <div>
          {posts.map((evt) => (
            <VideoitemHorizontal
              key={Object.values(evt.slug)}
              evt={evt}
              categoryOptions={categoryOptions}
            />
          ))}
        </div> */}
        {/* ----- */}

        {/* Object.values can get _id(objects) value from mongodb as key */}
        {posts.map((evt) => (
          <VideoitemHorizontalWithHover
            key={Object.values(evt.slug)}
            evt={evt}
            categoryOptions={categoryOptions}
          />
        ))}

        {/* --------- */}

        <div className="w-full text-center my-5">
          {posts.length > 0 && (
            <Link href="/videos">
              <a className="btn-secondary align-center-with-div">
                View All posts
              </a>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
}

// //  ServerSide Rendering
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/post`);

//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// // Static Generation
// // Use this for blog post is better than ServerSide Rendering
// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`${API_URL}/post`);
//   const posts = await res.json();
//   // const resB = await fetch(`${API_URL}/navbardynamic`);

//   // const navOptions = await resB.json();
//   // 這裡用Props是因為data現在在server side 需在function Home中output
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   console.log("Running ISR");
//   return {
//     props: {
//       posts,
//       // navOptions,
//     },
//     revalidate: 60, // In seconds
//   };
// }

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
