import { useState, useEffect, useContext } from "react";
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";
import Layout from "@/components/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
// logout function
import { clear_cookies } from "api/logoutfunction";

export default function Login({ navbarOptions }) {
  // Define admin login useState
  // const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginName, setLoginName] = useState("");
  const usernameCookie = Cookies.get("username");
  // console.log(loginName);
  // Cookies checker (mounted)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (
      // Cookies.get("Authorization") != null &&
      // Cookies.get("Authorization") != "undefined" &&
      // Cookies.get("Authorization") != "no_such_user"
      Cookies.get("username") != null &&
      Cookies.get("username") != "undefined" &&
      Cookies.get("username") != "no_such_user"
    )
      setMounted(true);
  }, []);

  // API post request
  const submitLogin = (e) => {
    e.preventDefault();
    // axios.defaults.withCredentials = true;
    axios
      .post(
        `${API_URL}/login`,
        {
          // credentials: "include",
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true, credentials: "include" }
      )
      .then(function(response) {
        // 204 No content, for wrong email password or no user
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
          Cookies.set("AT", `${response.data[0].token}`);
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
        alert(error.response.data);
      });
  };

  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      {/* IF cookies have somthing and not equal "undefined", show login success */}
      {mounted ? (
        <div className="text-center">
          <br />
          <br />
          <br />
          <h1>登入成功</h1>
          <br />
          <h2>{"歡迎 " + usernameCookie}</h2>
          <br />
          <button
            className="bg-green-100 hover:bg-green-400 text-slate-600 font-bold py-2 px-4 border-b-4 border-green-300 hover:border-green-700 rounded"
            onClick={clear_cookies}
          >
            Logout
          </button>
        </div>
      ) : (
        // <div className="grid grid-cols-6 gap-4">
        //   <form
        //     className="col-start-2 col-span-4 align-center-with-div"
        //     onSubmit={submitLogin}
        //   >
        //     <h1>Login</h1>
        //     <br />

        //     <div>
        //       <label htmlFor="username">User Name</label>
        //       <br />
        //       <input
        //         type="text"
        //         id="username"
        //         value={username}
        //         onChange={(e) => setUserName(e.target.value)}
        //       />
        //       <br />
        //       <label htmlFor="password">Password</label>
        //       <br />
        //       <input
        //         type="password"
        //         id="password"
        //         autoComplete="on"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //       />
        //       <br />
        //     </div>
        //     <br />
        //     <button className="submit-btn" type="submit">
        //       submit
        //     </button>
        //     <br />
        //     <br />
        //     <br />
        //   </form>

        // </div>

        // -------------------------------------
        <section className="min-h-screen flex flex-col">
          <div className="flex flex-1 items-center justify-center">
            <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
              <form className="text-center" onSubmit={submitLogin}>
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  登入
                </h1>
                <div className="py-2 text-left text-black">
                  <input
                    type="email"
                    required="required"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Email"
                  />
                </div>
                <div className="py-2 text-left text-black">
                  <input
                    type="password"
                    required="required"
                    id="password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                  />
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    登入
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link href="/password/reset">
                  <a className=" hover:underline">忘記密碼?</a>
                </Link>
              </div>
              <div className="text-center mt-12">
                <span>還沒有帳戶?</span>
                <Link href="/register">
                  <a className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">
                    創建帳戶
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        // -------------------------------------
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic category colorKey and options
  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      categoryOptions,
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}

// -------------------------------------------------------------
// import { useState, useEffect, useContext } from "react";
// import { API_URL } from "/config/index";
// import Layout from "@/components/Layout";
// import axios from "axios";

// export default function Login({}) {
//   // Define admin login useState
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const instance = axios.create({
//     withCredentials: true,
//   });
//   // API post request
//   const submitLogin = (e) => {
//     e.preventDefault();
//     // const instance = axios.create({
//     //   baseURL: "http://localhost:5001/login",
//     //   timeout: 1000,
//     //   headers: { "Access-Control-Allow-Credentials": true },
//     // });

//     // axios.defaults.withCredentials = true;
//     axios
//       .post(
//         "http://localhost:5001/login",
//         {
//           user: {
//             username: username,
//             password: password,
//           },
//         },
//         {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//           },
//         }
//       )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   return (
//     <Layout>
//       {/* IF cookies have somthing and not equal "undefined", show login success */}
//       <div className="grid grid-cols-6 gap-4">
//         <form
//           className="col-start-2 col-span-4 align-center-with-div"
//           onSubmit={submitLogin}
//         >
//           <h1>Login</h1>
//           <br />

//           <div>
//             <label htmlFor="username">User Name</label>
//             <br />
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <br />
//             <label htmlFor="password">Password</label>
//             <br />
//             <input
//               type="password"
//               id="password"
//               autoComplete="on"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br />
//           </div>
//           <br />
//           <button className="submit-btn" type="submit">
//             submit
//           </button>
//           <br />
//           <br />
//           <br />
//         </form>
//       </div>
//       )
//     </Layout>
//   );
// }
//

// ------------

// import { useState, useEffect, useContext } from "react";
// import { API_URL } from "/config/index";
// import Layout from "@/components/Layout";
// import axios from "axios";
// import Cookies from "js-cookie";

// export default function Login({}) {
//   // Define admin login useState
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   // const [loginName, setLoginName] = useState("");
//   const usernameCookie = Cookies.get("username");

//   // console.log(loginName);
//   // Cookies checker (mounted)
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     if (
//       Cookies.get("Authorization") != null &&
//       Cookies.get("Authorization") != "undefined" &&
//       Cookies.get("Authorization") != "no_such_user"
//     )
//       setMounted(true);
//   }, []);

//   // Clean cookies
//   const clear_cookies = () => {
//     Cookies.remove("Authorization");
//     Cookies.remove("username");

//     setTimeout(function () {
//       window.location.replace("/login");
//     }, 500);
//   };
//   // API post request
//   const submitLogin = (e) => {
//     e.preventDefault();
//     // axios.defaults.withCredentials = true;
//     axios
//       .post(
//         `${API_URL}/login`,
//         {
//           // credentials: "include",
//           user: {
//             username: username,
//             password: password,
//           },
//         },
//         { withCredentials: true, credentials: "include" }
//       )
//       .then(function (response) {
//         console.log(response);
//         console.log(response.data);
//         // localStorage.setItem("jwt", response.data);
//         // Set the toke to cookies, Authorization: Bearer tokenCode
//         // Cookies.set("Authorization", `${response.data}`);
//         // Cookies.set("username", `${response.statusText}`);

//         // Cookies.set("Authorization", `${Object.values(response.data[0])}`);
//         // Cookies.set("username", `${Object.values(response.data[1])}`);

//         // Redirect original page
//         // setTimeout(function () {
//         //   window.location.replace("/login");
//         // }, 500);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <Layout>
//       {/* IF cookies have somthing and not equal "undefined", show login success */}
//       {mounted ? (
//         <div className="align-center-with-div">
//           <h1>Login Success</h1>
//           <h2>{"Welcome " + usernameCookie}</h2>
//           <button
//             className="bg-green-100 hover:bg-green-400 text-gray font-bold py-2 px-4 border-b-4 border-green-300 hover:border-green-700 rounded"
//             onClick={clear_cookies}
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-6 gap-4">
//           <form
//             className="col-start-2 col-span-4 align-center-with-div"
//             onSubmit={submitLogin}
//           >
//             <h1>Login</h1>
//             <br />

//             <div>
//               <label htmlFor="username">User Name</label>
//               <br />
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//               <br />
//               <label htmlFor="password">Password</label>
//               <br />
//               <input
//                 type="password"
//                 id="password"
//                 autoComplete="on"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <br />
//             </div>
//             <br />
//             <button className="submit-btn" type="submit">
//               submit
//             </button>
//             <br />
//             <br />
//             <br />
//           </form>
//         </div>
//       )}
//     </Layout>
//   );
// }
