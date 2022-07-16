import Layout from "@/components/Layout";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import UploadForm from "@/components/UploadForm";
import Link from "next/link";

export default function editprofile({
  categoryOptions,
  navbarOptions,
  likePosts,
}) {
  const router = useRouter();
  let [changeUserName, setChangeUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  useEffect(() => {
    async function checkTokenFunction() {
      const checkToken = axios
        .get(`${API_URL}/user/profile`, {
          withCredentials: true,
          credentials: "include",
        })
        .then(function(response) {
          // console.log(response);
          // console.log(response.data.Token_Expire);
          // if (response.data.Token_Expire == false) {
          //   console.log("not expire");
          // }
          if (response.data.Token_Expire == true) {
            Cookies.remove("username");
            // alert("expire");
            alert("驗證時間已過時，請重新登入");

            router.push("/login");
          }
        })
        .catch(function(error) {
          // Login Error with no token, redirect to login
          // Clear console message if error (prevent show backend)
          // console.clear();
          Cookies.remove("username");
          router.push("/login");
          console.log(error);
        });
    }
    checkTokenFunction();
  }, []);

  const submitChangeUserName = (e) => {
    e.preventDefault();

    axios
      .post(
        `${API_URL}/user/editusername`,
        {
          newUserName: changeUserName,
        },
        {
          withCredentials: true, // IMPORTANT!!!
        }
      )
      .then(function(response) {
        // console.log(response);
        Cookies.set("username", changeUserName);

        alert(response.data);
      })
      .catch(function(error) {
        // console.log(error);
        // console.log(error.response.data);
        alert(`${error}, "系統錯誤，請重新登入或稍後再試"`);
      });
  };

  const submitChangePassword = (e) => {
    e.preventDefault();

    if (newPassword !== newPasswordConfirm) {
      alert("輸入密碼不一致");
      return;
    }
    console.log("test");
    axios
      .post(
        `${API_URL}/password/changepassword`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          withCredentials: true, // IMPORTANT!!!
        }
      )
      .then(function(response) {
        // console.log(response);

        alert(response.data);
      })
      .catch(function(error) {
        // console.log(error);
        // console.log(error.response.data);
        alert(`${error}, "系統錯誤，請重新登入或稍後再試"`);
      });
  };

  // Upload Icon
  // const [url, setUrl] = useState("");

  // const uploader = (file) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     localStorage.setItem("recent-image", reader.result);
  //     setUrl(localStorage.getItem("recent-image"));

  //     fetch("https://api.imgur.com/3/image/", {
  //       method: "post",
  //       headers: {
  //         Authorization: "Client-ID 82592c12c4ed121",
  //       },
  //       body: reader.result,
  //     })
  //       .then((data) => data.json())
  //       .then((data) => {
  //         console.log(data.data.link);
  //         console.log(data.data.link);
  //       });
  //   });
  //   reader.readAsDataURL(file);
  // };
  // useEffect(() => {
  //   setUrl(localStorage.getItem("recent-image"));
  // }, [url]);

  // -------------------------
  // useEffect(() => {
  //   const file = document.getElementById("file");
  //   const img = document.getElementById("img");
  //   const url = document.getElementById("url");
  //   file.addEventListener("change", (ev) => {
  //     const formdata = new FormData();
  //     formdata.append("image", ev.target.files[0]);
  //     fetch("https://api.imgur.com/3/image/", {
  //       method: "post",
  //       headers: {
  //         Authorization: "Client-ID 82592c12c4ed121",
  //       },
  //       body: formdata,
  //     })
  //       .then((data) => data.json())
  //       .then((data) => {
  //         img.src = data.data.link;
  //         url.innerText = data.data.link;
  //       });
  //   });
  // }, []);

  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />

      {/* https://stackoverflow.com/questions/22876978/loop-inside-react-jsx */}
      {/* Map- the first one is value, the second one (i)is key */}
      {/* {dataLikePost ? (
        Object.values(dataLikePost).map((value, i) => <p key={i}>{value}</p>)
      ) : (
        <h3>No posts to show</h3>
      )} */}
      <h1 className="text-center">編輯個人檔案</h1>

      {/* <h2 className="text-center">更改用戶名稱</h2> */}
      <div className="mb-5 flex items-center justify-center p-12 ">
        <div className="mx-auto w-full max-w-[550px]">
          {/* <UploadForm uploader={uploader} /> */}
          {/* ------------------------------------------------ */}
          {/* <img src="https://i.imgur.com/U7afLiO.png" id="img" height="20px" />
          <br />
          <input type="file" id="file" />
          <br />
          <strong>
            <p id="url"></p>
          </strong> */}
          {/* ------------------------------------------------ */}
          <label htmlFor="changeUserName">更改用戶名稱</label>
          <br />
          <form onSubmit={submitChangeUserName}>
            <input
              //   required="required"
              type="text"
              id="changeUserName"
              value={changeUserName}
              placeholder="更改你的用戶名稱"
              onChange={(e) => setChangeUserName(e.target.value)}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            />
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none m-5 text-center">
                更改
              </button>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none m-5 text-center">
                更改
              </button>
            </div>
          </form>
          <div>如忘記當前密碼，請用以下連結更改密碼</div>
          {/* <button>/password/reset</button> */}
          <Link href={`/password/reset`}>
            <a>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none m-5 text-center">
                按我更改密碼
              </button>
            </a>
          </Link>
          <br />
          <br />
          <label htmlFor="changeUserName">更改你的密碼</label>
          <form onSubmit={submitChangePassword}>
            <input
              //   required="required"
              type="password"
              id="oldPassword"
              value={oldPassword}
              placeholder="舊密碼"
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            />
            <br />
            <br />
            <input
              //   required="required"
              type="password"
              id="newPassword"
              value={newPassword}
              placeholder="新密碼"
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            />
            <br />
            <br />
            <input
              //   required="required"
              type="password"
              id="newPasswordConfirm"
              value={newPasswordConfirm}
              placeholder="確認新密碼"
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            />
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none m-5 text-center">
                更改
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

// //  ServerSide Rendering
// export async function getServerSideProps() {
//     if (!user) {
//         return {
//           redirect: {
//             destination: '/login',
//             permanent: false,
//           },
//         }
//       }

//   const res = await fetch(`${API_URL}/post`);

//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export async function getServerSideProps() {
//   // Instantiate
//   const res = await fetch(`${API_URL}/logout`, {
//     method: "GET",
//     withCredentials: true,
//     credentials: "include",
//   });
//   // .then((response) => console.log("Instantiate...", response))
//   // .catch((error) => console.error("Instantiation error", error));
//   //   const posts = await res.json();
//   //   console.log(posts);
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// //  ServerSide Rendering
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/user/profile`, {
//     method: "GET",
//     credentials: "include",
//     headers: new Headers({
//       Accept: "application/json",
//       "Access-Control-Allow-Origin": "http://localhost:5001/",
//       "Content-Type": "application/json",
//     }),
//   });
//   console.log(res);
//   const userData = await res.json();
//   // const userData = [];
//   return {
//     props: {
//       userData,
//     },
//   };
// }

// //  ServerSide Rendering
// export async function getServerSideProps() {
//   const res = await fetch(
//     `${API_URL}/user/profile`,
//     {
//       method: "GET",
//       // mode: "no-cors",
//       credentials: "include",
//       withCredentials: true,

//       // headers: new Headers({
//       //   // Accept: "application/json",
//       //   // "Access-Control-Allow-Origin": "http://localhost:5001/",
//       //   // "Content-Type": "application/json",

//       // }),
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//         // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NDU2NzMxMiwianRpIjoiZGYyMTZhODEtOGQ1Ni00MDAzLWJjMTItNjk3ZjhiMmViOGNkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNjU0NTY3MzEyLCJleHAiOjE2NTQ1NzA5MTJ9.y4hs3cKW2Vu0XcbZI6IyUw9R3SxIz_un265FT1rV7Z4`,
//         credentials: "include",
//         // credentials: "omit",
//         withCredentials: true,
//       },
//     },
//     { withCredentials: true }
//   );
//   console.log(res.headers);
//   const message_a = await res.json();
//   console.log(message_a);
//   const userData = [];
//   // const userData = [];
//   return {
//     props: {
//       userData,
//     },
//   };
// }

export async function getStaticProps() {
  // // Dynamic category colorKey and options
  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  // const resLikePosts = await fetch(`${API_URL}/user/addlikevideo`, {
  //   credentials: "include",
  // });
  // const likePosts = await resLikePosts.json();

  return {
    props: {
      categoryOptions,
      navbarOptions,
      // likePosts,
    },
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
