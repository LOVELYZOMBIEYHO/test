import React from "react";
import { hello, world } from "api/hello";
import Layout from "@/components/Layout";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";

export default function test({ navbarOptions }) {
  hello();
  world();
  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      test
    </Layout>
  );
}

export async function getStaticProps() {
  // // Dynamic category colorKey and options
  // const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  // const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      // categoryOptions,
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
