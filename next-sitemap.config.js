/** @type {import('next-sitemap').IConfig} */
// import { API_URL } from "@/config/index";
// import { FRONT_URL } from "@/config/index";

// const { FRONT_URL } = require("./config/index");

const siteUrl = "http://localhost:3000";
module.exports = {
  // options
  // siteUrl,
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/adminfunctions/*" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/server-sitemap.xml/category`,
      `${siteUrl}/server-sitemap.xml/tag`,
    ],
  },

  exclude: ["/adminfunctions/*"],
};
