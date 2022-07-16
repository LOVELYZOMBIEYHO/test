import Layout from "@/components/Layout";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function outputlikelist({ navbarOptions }) {
  const tokenJWT = Cookies.get("AT");

  const downloadLikeListCSV = async (e) => {
    // Prevent Form submit, the form will refresh too fast and can't be sent the data to backend database if no prevent default
    e.preventDefault();
    const response = await fetch(`${API_URL}/user/likelistcsvdownload`, {
      method: "GET",
      // equal axios withCredentials: true,
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenJWT}`,

        // access_token_cookie,
        // Authorization: "Bearer <access_token>"

        // withCredentials: true,
        // credentials: "include",
      },
    });
    const data = await response.blob();

    // Create a blob with the data we want to download as a file
    //  ***Need to change {type: "jpg/mp3/csv or other"}
    const blob = new Blob([data], { type: "csv" });
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement("a");
    //  ***Need to change "output.csv" => This is a file name can be changed
    a.download = "output.csv";
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      <div className="text-center">
        <button
          className="bg-green-100 hover:bg-green-400 text-slate-600 font-bold py-2 px-4 border-b-4 border-green-300 hover:border-green-700 rounded"
          onClick={downloadLikeListCSV}
        >
          輸出csv
        </button>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  //   // Dynamic category colorKey and options
  //   const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  //   const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  // const resLikePosts = await fetch(`${API_URL}/user/addlikevideo`, {
  //   credentials: "include",
  // });
  // const likePosts = await resLikePosts.json();

  return {
    props: {
      //   categoryOptions,
      navbarOptions,
      // likePosts,
    },
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
