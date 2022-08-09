import React from "react";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";

export default function contact({ navbarOptions }) {
  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      <h2> contact: jseedav@yahoo.com</h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  return {
    props: {
      navbarOptions,
    },
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
