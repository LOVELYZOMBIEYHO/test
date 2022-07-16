// // pages/_middleware.js    (delete the a to use)

// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   const date = new Date();
//   const day = date.getDay();
//   const hi = true;
//   const isMaintenance = day == 1;

//   // if (isMaintenance) {
//   if (hi) {
//     // automatically change url
//     // url.pathname = "/category";
//     console.log("site is down!");
//   }
//   // Rewrite to url
//   return NextResponse.rewrite(url);
// }

// ----

// import React from "react";

// export default function amiddleware() {
//   return <div>amiddleware</div>;
// }

// ---------------------------

// // pages/_middleware.js

// import { NextResponse } from "next/server";
// import axios from "axios";
// import { API_URL } from "@/config/index";
// import { useEffect } from "react";
// export async function middleware(req, categoryOptions) {
//   const url = req.nextUrl.clone();

//   const hi = true;

//   useEffect(() => {
//     // Retrieve the JSON string
//     const jsonCategoryOptionsObject = localStorage.getItem(
//       "categoryOptionsObject"
//     );
//     // // Parse the JSON string back to JS object
//     // const retrievedCategoryOptions = JSON.parse(jsonCategoryOptionsObject);
//     // console.log(retrievedCategoryOptions);
//   }, []);

//   // if (isMaintenance) {
//   if (jsonCategoryOptionsObject) {
//     // automatically change url
//     // url.pathname = "/category";
//     console.log("You are getting category!");
//     // console.log(categoryOptions);
//     // const req = async () => {
//     //   const response = await axios.get(`${API_URL}/categoryoptions`);
//     //   console.log(response);
//     // };
//     // req(); // Calling this will make a get request and log the response.
//   }
//   // Rewrite to url
//   // return NextResponse.rewrite(url);
// }

// // export async function getStaticProps() {
// //   // Call an external API endpoint to get posts
// //   const res = await fetch(`${API_URL}/categoryoptions`);
// //   const categoryOptions = await res.json();
// //   console.log(categoryOptions);
// //   return {
// //     props: {
// //       categoryOptions,
// //     },
// //     revalidate: 1, // In seconds
// //   };
// // }

// ---------------

// import { NextRequest, NextResponse } from "next/server";

// export const config = {
//   matcher: "/",
// };

// //  ServerSide Rendering
// export async function getServerSideProps() {
//   const isInBeta = JSON.parse(req.cookies.get("beta") || "false");
//   console.log(isInBeta);
//   return {
//     props: {
//       isInBeta,
//     },
//   };
// }

// export function middleware(isInBeta) {
//   //   Parse the cookie
//   const isInBeta = JSON.parse(req.cookies.get("beta") || "false");
//   console.log(isInBeta);
//   //   Update url pathname
//   req.nextUrl.pathname = `/${isInBeta ? "beta" : "non-beta"}`;
//   //   req.nextUrl.pathname = `/`;
//   //   Rewrite to url
//   return NextResponse.rewrite(req.nextUrl);
// }

// ---------------------

// import { NextResponse } from "next/server";

// export function middleware() {
//   // Store the response so we can modify its headers
//   const response = NextResponse.next();

//   // Set custom header
//   response.headers.set("x-modified-edge", "true");

//   return response;
// }

// ----------------------

// // 12.1.7-canary.41 NextJS version applicable
// import { NextRequest, NextResponse } from "next/server";
// import { useRouter } from "next/router";
// // 只在特定PATH才執行
// // export const config = {
// //   matcher: "/",
// // };

// export function middleware(req) {
//   const router = useRouter();

//   // Parse the cookie
//   // const isInBetaB = JSON.parse(
//   //   req.cookies.get("categoryOptionsObject") || "false"
//   // );

//   const isInBetaB = req.cookies.get("categoryOptionsObject") || "false";
//   // const isInBetaB = JSON.parse(
//   //   JSON.stringify(req.cookies.get("categoryOptionsObject"))
//   // );

//   // const isInBetaB = JSON.parse(req.cookies.get("categoryOptionsObject"));
//   console.log(isInBetaB);
//   // const isInBeta = req.cookies.get("username") || "false";
//   // if (isInBetaB == "false") {
//   // req.nextUrl.pathname = `/`;
//   // }
//   router.push("/");
//   // console.log(isInBeta);
//   // Update url pathname

//   // req.nextUrl.pathname = `/${isInBeta ? "beta" : "non-beta"}`;

//   // Rewrite to url
//   return NextResponse.rewrite(req.nextUrl);
// }

// // --------------------------

import { NextRequest, NextResponse } from "next/server";
import { FRONT_URL } from "@/config/index";
// import { areCredentialsValid } from "../lib";

export function middleware(req) {
  const isInBeta = req.cookies.get("categoryOptionsObject") || "false";
  const hi = true;
  // if (isInBeta == "false") {
  //   // const res = NextResponse.redirect(`${FRONT_URL}`); // creates an actual instance
  //   return NextResponse.redirect(new URL(`http://localhost:3000/`));
  // } else {
  //   return NextResponse.next();
  // }
  // if (hi) {
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(new URL(`http://localhost:3000/`));
}
