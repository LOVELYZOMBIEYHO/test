import { useState, useEffect, useContext } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";

import { useRouter } from "next/router";

export default function Protected({ navbarOptions }) {
  // NextJS redirect function
  const router = useRouter();
  // API get request, with Authorization header to enter the protected route "Bearer tokenCode"
  let tokenJWT = Cookies.get("AT");

  // let tokenCode = Cookies.get("csrf_access_token");
  // console.log(tokenCode);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (
      Cookies.get("username") != null &&
      Cookies.get("username") != "undefined" &&
      Cookies.get("username") != "no_such_user"
    )
      setMounted(true);
  }, []);

  //  Two methods to use JWT (with Javascript GET)
  const getRequest1 = axios
    .get(`${API_URL}/protected`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenJWT}`,

        // access_token_cookie,
        // Authorization: "Bearer <access_token>",
      },
    })
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });

  // //  Two methods to use JWT (with HttpOnly Cookies GET)
  // const getRequest = axios
  //   .get(`${API_URL}/protected`, {
  //     withCredentials: true, // IMPORTANT!!!
  //     credentials: "include",
  //   })
  //   .then(function(response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   });

  // const getRequest = axios
  //   .get(`${API_URL}/protected`)
  //   .then(function(response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     // handle error
  //     console.log(error);
  //   });

  return (
    <Layout navbarOptions={navbarOptions}>
      {/* IF cookies have somthing and not equal "undefined", show login success */}
      {mounted ? (
        <div className="align-center-with-div">
          <br />
          <br />
          <br />

          <h1>Login Success</h1>
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-4">
          <br />
          <br />
          <br />
          <h1>you are not logged into your account</h1>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic category colorKey and options
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
