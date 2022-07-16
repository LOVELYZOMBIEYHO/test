// import React, { useState } from "react";
// import Image from "next/image";
// export default function LoginModal() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <div className="flex-shrink-0" onClick={() => setShow((prev) => !prev)}>
//         <Image
//           className="cursor-pointer "
//           src={"/images/loginIconThumbnail.jpeg"}
//           width={30}
//           height={30}
//           objectFit="cover"
//           alt="loginIconThumbnail"
//         />
//       </div>
//       {/* <button onClick={() => setShow((prev) => !prev)}>Click</button> */}
//       {show && (
//         <div
//           id="modal"
//           className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
//         >
//           <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
//             {/* <!-- Modal header --> */}
//             <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
//               <h3>Modal header</h3>
//               <button onClick={() => setShow((prev) => !prev)}>x</button>
//             </div>

//             {/* <!-- Modal body --> */}
//             <div className="max-h-48 overflow-y-scroll p-4">
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//               <p>Scrollable modal body</p>
//             </div>

//             {/* <!-- Modal footer --> */}
//             <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                 onClick={() => setShow((prev) => !prev)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ----------------------------------------------------

import Image from "next/image";

import { useState, useEffect, useContext } from "react";
import { API_URL } from "/config/index";
import Link from "next/link";
import Layout from "@/components/Layout";
import axios from "axios";
import Cookies from "js-cookie";

export default function RegisterModal() {
  const [show, setShow] = useState(false);

  // Define admin login useState
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const usernameCookie = Cookies.get("username");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (
      Cookies.get("username") != null &&
      Cookies.get("username") != "undefined" &&
      Cookies.get("username") != "no_such_user"
    )
      setMounted(true);
  }, []);

  // Clean cookies with backend JWT
  const clear_cookies = () => {
    Cookies.remove("username");
    axios
      .get(`${API_URL}/logout`, {
        withCredentials: true,
        credentials: "include",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(function () {
      window.location.replace("/login");
    }, 500);
  };

  // API post request
  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/login`,
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: true, credentials: "include" }
      )
      .then(function (response) {
        console.log(localStorage.getItem("access_token_cookie"));
        // localStorage.setItem("jwt", response.data[0].msg);
        console.log(response.data[1].Welcome);
        // localStorage.setItem("jwt", response.data);
        // Set the toke to cookies, Authorization: Bearer tokenCode
        Cookies.set("Authorization", `${response.data[0].msg}`);
        // Cookies.set("username", `${response.statusText}`);
        Cookies.set("username", `${response.data[1].Welcome}`);

        // Cookies.set("Authorization", `${Object.values(response.data[0])}`);
        // Cookies.set("username", `${Object.values(response.data[1])}`);

        // Redirect original page
        setTimeout(function () {
          window.location.replace("/login");
        }, 500);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex-shrink-0" onClick={() => setShow((prev) => !prev)}>
        <Image
          className="cursor-pointer "
          src={"/images/loginIconThumbnail.jpeg"}
          width={30}
          height={30}
          objectFit="cover"
          alt="loginIconThumbnail"
        />
      </div>
      {/* <button onClick={() => setShow((prev) => !prev)}>Click</button> */}
      {show && (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-10 mx-auto shadow-lg rounded-md bg-white max-w-md">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
              <h3>Modal header</h3>
              <button onClick={() => setShow((prev) => !prev)}>x</button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="max-h-88 overflow-y-scroll p-4">
              <form class="text-center" onSubmit={submitLogin}>
                <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Sign in
                </h1>
                <div class="py-2 text-left">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Username"
                  />
                </div>
                <div class="py-2 text-left">
                  <input
                    type="password"
                    id="password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                  />
                </div>
                <div class="py-2">
                  <button
                    type="submit"
                    class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    Sign In /登入
                  </button>
                </div>
              </form>
              <div class="text-center">
                <Link href="/password/reset">
                  <a className=" hover:underline">Forgot password?</a>
                </Link>
              </div>
              <div class="text-center mt-12">
                <span>Don't have an account?</span>
                <a
                  href="#"
                  class="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
                >
                  Create One
                </a>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => setShow((prev) => !prev)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
