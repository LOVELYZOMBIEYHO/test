import React from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";

export default function clickrevalidation({ navbarOptions, categoryOptions }) {
  function revalidate() {
    fetch("/api/revalidate");
  }
  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      <button
        className="text-centet mx-auto block px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  return {
    props: {
      categoryOptions,
      navbarOptions,
    },
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
