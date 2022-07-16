// -------------------------
// // sample (not used tsx- work!)
// import { getServerSideSitemap } from "next-sitemap";
// import { GetServerSideProps } from "next";

// export const getServerSideProps = async (ctx) => {
//   // Method to source urls from cms
//   const res = await fetch("https://api.spacexdata.com/v4/capsules");
//   const capsules = await res.json();

//   const fields = capsules.map((capsule) => ({
//     loc: `https://www.capsules.com/capsules/${capsule.id}`,
//     lastmod: new Date().toISOString(),
//   }));

//   return getServerSideSitemap(ctx, fields);
// };

// // Default export to prevent next.js errors
// export default function Sitemap() {}
// -------------------------------
// For all post
import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { API_URL } from "@/config/index";
import { FRONT_URL } from "@/config/index";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from backend
  const resPosts = await fetch(`${API_URL}/post`);
  const posts = await resPosts.json();

  const fields = posts.map((post) => ({
    loc: `${FRONT_URL}/videos/${post.slug}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
