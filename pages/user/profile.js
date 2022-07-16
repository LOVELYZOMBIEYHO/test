import Layout from "@/components/Layout";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VideoitemHorizontal from "@/components/VideoitemHorizontal";
import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";

export default function profile({ categoryOptions, navbarOptions, likePosts }) {
  const router = useRouter();
  let [dataLikePost, setDataLikePost] = useState([]);

  // const res = fetch(`${API_URL}/user/profile`, {
  //   method: "GET",
  //   credentials: "include",
  //   headers: new Headers({
  //     Accept: "application/json",
  //     "Access-Control-Allow-Origin": "http://localhost:5001/",
  //     "Content-Type": "application/json",
  //   }),
  // }).then((response) => {
  //   console.log(response.json());
  // });
  // console.log(res);

  // Vertify Token function

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

  // axios
  //   .get(`${API_URL}/user/profile`, {
  //     withCredentials: true,
  //     credentials: "include",
  //   })
  //   .then(function(response) {
  //     // console.log(response);
  //     // console.log(response.data.Token_Expire);
  //     // if (response.data.Token_Expire == false) {
  //     //   console.log("not expire");
  //     // }
  //     if (response.data.Token_Expire == true) {
  //       Cookies.remove("username");
  //       // alert("expire");
  //       alert("驗證時間已過時，請重新登入");

  //       router.push("/login");
  //     }
  //   })
  //   .catch(function(error) {
  //     // Login Error with no token, redirect to login
  //     // Clear console message if error (prevent show backend)
  //     // console.clear();
  //     Cookies.remove("username");
  //     router.push("/login");
  //     console.log(error);
  //   });

  // // Logout function
  // axios
  //   .get(`${API_URL}/logout`, {
  //     withCredentials: true,
  //     credentials: "include",
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     Cookies.remove("username");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // ------------
  // useEffect(() => {
  //   async function getLikedPosts() {
  //     const results = await axios
  //       .get(`${API_URL}/user/addlikevideo`, {
  //         withCredentials: true,
  //         credentials: "include",
  //       })
  //       .then(function(response) {
  //         // console.log(response);
  //         console.log(results.data);
  //         // setDataLikePost(results.data);
  //         // setDataLikePost((tags) => [...tags, tag.toLowerCase()]);
  //         // setDataLikePost((tags) => [...tags, tag.toLowerCase()]);
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  //   getLikedPosts();
  // }, []);
  // ----Axios get like post-----------
  useEffect(() => {
    async function getLikedPosts() {
      const results = await axios(`${API_URL}/user/getlikevideo`, {
        withCredentials: true,
        credentials: "include",
      });
      setDataLikePost(results.data);
    }
    getLikedPosts();
  }, []);
  // -----------------------

  // let abc = dataLikePost.postLike;
  // console.log(Object.keys(dataLikePost));
  // abc.forEach((element) => {
  //   console.log(element);
  // });
  // var myObject = { a: 1, b: 2, c: 3 };

  // Object.keys(dataLikePost.postLike).map(function(key, index) {
  //   dataLikePost.postLike[key] *= 2;
  // });

  // axios
  //   .get(`${API_URL}/user/addlikevideo`, {
  //     withCredentials: true,
  //     credentials: "include",
  //   })
  //   .then(function(response) {
  //     // console.log(response);
  //     // console.log(response.data);
  //     setDataLikePost(response.data.postLike);
  //     // setDataLikePost((tags) => [...tags, tag.toLowerCase()]);
  //     // setDataLikePost((tags) => [...tags, tag.toLowerCase()]);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });

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
      <h1 className="text-center">喜歡的影片</h1>
      {/* -------------------------- */}
      {/* {dataLikePost.length != 0 ? (
        dataLikePost.map((evt) => (
          <VideoitemHorizontal
            key={Object.values(evt.slug)}
            evt={evt}
            categoryOptions={categoryOptions}
          />
        ))
      ) : (
        <h3>No posts to show</h3>
      )} */}

      {dataLikePost.length != 0 ? (
        dataLikePost.map((evt) => (
          <VideoitemHorizontalWithHover
            key={Object.values(evt.slug)}
            evt={evt}
            categoryOptions={categoryOptions}
          />
        ))
      ) : (
        <h3>No posts to show</h3>
      )}

      {/* -------------------------- */}

      {/* {dataLikePost.map((evt) => (
        <VideoitemHorizontal
          key={Object.values(evt.slug)}
          evt={evt}
          categoryOptions={categoryOptions}
        />
      ))} */}
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

  // const resLikePosts = await fetch(`${API_URL}/user/getlikevideo`, {
  //   method: "GET",
  //   // equal axios withCredentials: true,
  //   credentials: "include",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NzY0NTA0MSwianRpIjoiOWI2MWEyN2EtODU5ZS00YTQ4LWI5MjYtZTQ5ZTA0NjkwNGMzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Inlob3NvbjExMTZAZ21haWwuY29tIiwibmJmIjoxNjU3NjQ1MDQxLCJleHAiOjE2NTgyNDk4NDF9.MC8VuqXYxPQR6JL6NUQKwTVY4-y6rmT64ln4mWWd56M",
  //   },
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
