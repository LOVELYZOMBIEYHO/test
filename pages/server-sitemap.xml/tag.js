// -------------------------------
// For all tag in MongoDB
import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { API_URL } from "@/config/index";
import { FRONT_URL } from "@/config/index";

export const getServerSideProps = async (ctx) => {
  // Method to source urls from backend

  const resTags = await fetch(`${API_URL}/sitemaptagschi`);
  const tags = await resTags.json();
  // tag 用中交名，category用英文名
  const fields = tags.map((tag) => ({
    loc: `${FRONT_URL}/videos/search/${tag.chiName}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
