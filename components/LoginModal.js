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
// logout function
import { clear_cookies } from "api/logoutfunction";

import UseFade from "@/styles/UseFade.module.css";
import SuccessLoginModal from "./SuccessLoginModal";

import styles from "@/styles/LoginModal.module.css";

export default function LoginModal() {
  const [show, setShow] = useState(false);
  const [loginshow, setLoginshow] = useState(false);

  // Define admin login useState
  //   const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
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

  // API post request
  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/login`,
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true, credentials: "include" }
      )
      .then(function(response) {
        if (response.status == "204") {
          alert("You have entered an invalid email or password");
        } else {
          // // Set the token to cookies, Authorization: Bearer tokenCode    (if httpOnly cookies, no need this)
          // Cookies.set("Authorization", `${response.data[0].msg}`);
          if (
            response.data[1].username == "" ||
            response.data[1].username == "null" ||
            response.data[1].username == "undefined"
          ) {
            Cookies.set("username", `${response.data[2].email}`);
          } else {
            Cookies.set("username", `${response.data[1].username}`);
          }
          Cookies.set("email", `${response.data[2].email}`);
          localStorage.setItem("icon", `${response.data[3].icon}`);

          // Redirect original page
          setTimeout(function() {
            window.location.replace("/");
          }, 500);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //   Fade out animation
  const fadeOutAni = () => {
    //   data-attribute of html (instead of Class)
    const fadeOutElement = document.querySelector("[data-fadeoutcustom]");

    fadeOutElement.classList.remove(`${UseFade.fadeInCustom}`);
    fadeOutElement.classList.add(`${UseFade.fadeOutCustom}`);
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 200);
  };

  return (
    <div>
      {mounted ? (
        <SuccessLoginModal
          loginshow={loginshow}
          setLoginshow={setLoginshow}
          submitLogin={submitLogin}
        />
      ) : (
        <div className="flex-shrink-0" onClick={() => setShow((prev) => !prev)}>
          <Image
            className="cursor-pointer rounded-3xl"
            src={"/images/loginIconThumbnail.jpeg"}
            width={30}
            height={30}
            objectFit="cover"
            alt="loginIconThumbnail"
          />
        </div>
      )}
      {show && (
        //   fade in Tailwind : bg-white opacity-25 rounded-lg shadow-xl hover:opacity-100 transition-opacity duration-500
        //  fade in CSS, UseFade from UseFade.module.css (styles)

        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${UseFade.fadeInCustom}`}
          //   data-attribute of html (instead of Class)
          data-fadeoutcustom
        >
          <div
            className={`absolute z-40 h-full w-full bg-gray-900 bg-opacity-60 overflow-y-auto ${UseFade.fadeInCustom} `}
            onClick={() => {
              //   setShow((prev) => !prev);
              fadeOutAni();
            }}
          ></div>
          <div className="relative top-10 mx-auto shadow-lg rounded-md bg-white max-w-md z-50">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
              <h3>Modal header</h3>
              <button
                onClick={() => {
                  //   setShow((prev) => !prev);
                  fadeOutAni();
                }}
              >
                x
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div
              className={`max-h-88 overflow-y-scroll p-4 ${styles.loginModalBody}`}
            >
              <form className="text-center" onSubmit={submitLogin}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Sign in
                </h1>
                <div className="py-2 text-left">
                  <input
                    type="email"
                    required="required"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 text-black"
                    placeholder="Email"
                  />
                </div>
                <div className="py-2 text-left">
                  <input
                    type="password"
                    required="required"
                    id="password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 text-black"
                    placeholder="Password"
                  />
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    Sign In /登入
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link href="/password/reset">
                  <a className=" hover:underline">Forgot password?</a>
                </Link>
              </div>
              <div className="text-center mt-12">
                <span>Don't have an account?</span>
                <Link href="/register">
                  <a
                    className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
                    onClick={() => {
                      //   setShow((prev) => !prev);
                      fadeOutAni();
                    }}
                  >
                    Create One
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- Modal footer --> */}
            {/* <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => setShow((prev) => !prev)}
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
