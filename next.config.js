// module.exports = {
//   images: {
//     domains: [
//       "res.cloudinary.com",
//       "www.google.com",
//       "images.unsplash.com",
//       "en.wikipedia.org",
//       "i.imgur.com",
//       "cdn.jsdelivr.net",
//     ],
//     // domains: ["strapi-it-blog.herokuapp.com"],
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };
// -------------------------------------------------------------

// // -------------Test Global variables for Dynamic Navbar and Dynamic Category----------------

// // const API_URL = require("./config/index");

// // The data needs to be fetched synchronously:
// const fetch = require("sync-fetch");

// // Get the data you need - This could be moved into a separate file
// function getNavbarData() {
//   // return fetch(`${API_URL}/navbardynamic`).json();
//   return fetch("http://localhost:5001/navbardynamic").json();
// }

// const navbarData = getNavbarData();
// // Get CategoryOptions
// function getCategoryOptionsData() {
//   // return fetch(`${API_URL}/navbardynamic`).json();
//   return fetch("http://localhost:5001/categoryoptions").json();
// }
// const categoryOptionsData = getCategoryOptionsData();

// module.exports = {
//   images: {
//     domains: [
//       "res.cloudinary.com",
//       "www.google.com",
//       "images.unsplash.com",
//       "en.wikipedia.org",
//       "i.imgur.com",
//       "cdn.jsdelivr.net",
//     ],
//     // domains: ["strapi-it-blog.herokuapp.com"],
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
//   swcMinify: true,
//   serverRuntimeConfig: { navbarData, categoryOptionsData },
// };

// ----------------------------------

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "www.google.com",
      "images.unsplash.com",
      "en.wikipedia.org",
      "i.imgur.com",
      "cdn.jsdelivr.net",
      "cdn.pixabay.com",
      "webtoolsdepot.com",
    ],
    // domains: ["strapi-it-blog.herokuapp.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};
