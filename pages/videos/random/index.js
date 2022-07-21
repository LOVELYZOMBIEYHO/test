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

export default function SearchPage({ navbarOptions, slugOptions }) {
  const router = useRouter();

  const randomSlug = Math.floor(Math.random() * slugOptions.length);
  const randomSlugPush = slugOptions[randomSlug]["slug"];

  //  Redirect Url
  useEffect(() => {
    router.push(`/videos/${randomSlugPush}`);
  }, []);

  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <Seopage /> */}
      <br />
      <br />
      <br />
      <h1>隨機影片</h1>
      <div>請稍等......</div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  // Random slug
  const resRandomSlug = await fetch(`${API_URL}/postforrandom`);
  const slugOptions = await resRandomSlug.json();
  return {
    props: {
      navbarOptions,
      slugOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
