import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/VideoInfoWrapper.module.css";
import axios from "axios";
import { API_URL } from "/config/index";
import Sharemodal from "@/components/Sharemodal";
import Cookies from "js-cookie";

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

export default function VideoInforWrapper({ postId, posts }) {
  const [showIsLike, setShowIsLike] = useState("");
  let [viewCount, setViewCount] = useState([]);

  const dateForShow = posts[0].addedDate.split("T")[0];
  const likePost = (e) => {
    e.preventDefault();
    // if not login, dont render
    if (Cookies.get("username")) {
      axios
        .post(
          `${API_URL}/user/addlikevideo`,
          {
            likePostId: postId,
          },
          {
            withCredentials: true, // IMPORTANT!!!
            credentials: "include",
          }
        )
        .then(function(response) {
          // console.log(response);
          if (response.data == "已加入影片收藏") {
            setShowIsLike("likeBtnLiked");
          }
          if (response.data == "已取消影片收藏") {
            setShowIsLike("likeBtnNormal");
          }
          alert(response.data);
        })
        .catch(function(error) {
          // console.log(error);
          // console.log(error.response.data);
          alert(
            `${error}, "You may try to login again, check the slug or idCount duplication"`
          );
        });
    } else {
      alert("請登入帳戶");
    }
  };

  // useEffect(() => {
  //   async function getLikedPosts() {
  //     const results = await axios(`${API_URL}/user/getlikevideo`, {
  //       withCredentials: true,
  //       credentials: "include",
  //     });
  //     setDataLikePost(results.data);
  //   }
  //   getLikedPosts();
  // }, []);
  // -----------------------
  // useEffect(() => {
  //   async function checkLikedPosts() {
  //     // if not login, dont render
  //     // if (Cookies.get("username")) {
  //     const results = await axios.post(
  //       `${API_URL}/user/renderlikevideoicon`,
  //       {
  //         likePostId: postId,
  //       },
  //       {
  //         withCredentials: true,
  //         credentials: "include",
  //       }
  //     );

  //     if (results.data.like == true) {
  //       setShowIsLike("likeBtnLiked");
  //     } else {
  //       setShowIsLike("likeBtnNormal");
  //     }
  //     // }
  //   }
  //   checkLikedPosts();
  // }, []);
  // ----------------------------------
  useEffect(() => {
    async function checkLikedPosts() {
      // if not login, dont render
      // if (Cookies.get("username")) {

      const params = new URLSearchParams();
      params.append("likePostId", postId);
      const results = await axios(
        {
          method: "post",
          url: `${API_URL}/user/renderlikevideoicon`,
          data: params,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      if (results.data.like == true) {
        setShowIsLike("likeBtnLiked");
      } else {
        setShowIsLike("likeBtnNormal");
      }
      // }
    }
    checkLikedPosts();
  }, []);

  // --------------------------------------
  // const response = await fetch(`${API_URL}/user/likelistcsvdownload`, {
  //   method: "GET",
  //   // equal axios withCredentials: true,
  //   credentials: "include",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1Nzc0MzM2MywianRpIjoiNmZmZWQwOGQtZjEyMy00NzI1LTg2ZTQtMGYwOTQ0NGE5MjU1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Inlob3NvbjExMTZAZ21haWwuY29tIiwibmJmIjoxNjU3NzQzMzYzLCJleHAiOjE2NTgzNDgxNjN9.CXbXsVoGkJQ0H5K36I-L7PXF1MahiMGU0AawxltLCr0",
  //   },
  // });
  // const data = await response.json();

  // --------------------------------------

  // CountAPI
  useEffect(() => {
    const countAPIGetViewRequest = async () => {
      try {
        const resp = await axios.get(
          `https://api.countapi.xyz/get/jseedav.com/:PATHNAME:${posts[0].idCount}`
        );
        // console.log(resp.data.value);
        setViewCount((prevState) => ({
          ...prevState,
          [posts[0].idCount]: resp.data.value,
        }));
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    countAPIGetViewRequest();
  }, []);

  console.log(viewCount);

  return (
    <div className="m-3">
      {/* -------- */}
      <div className="video-info">
        <h1>{posts[0].titleChinese}</h1>
        <div className="metrics">
          <div className="views">{`${
            viewCount[posts[0].idCount]
          } views · ${dateForShow}`}</div>
          <div className="video-options">
            <div className="likes_dislikes">
              <span
                className={`material-symbols-outlined cursor-pointer ${styles.hovertext} ${styles.likeBtn} ${showIsLike} likes_dislikes_span`}
                data-hover="Like"
                onClick={likePost}
              >
                favorite
              </span>
              <span
                className={`material-symbols-outlined cursor-pointer ${styles.hovertext} ${styles.likeBtn} likes_dislikes_span`}
                data-hover="Add"
              >
                playlist_add
              </span>
              {/* <span
                className={`material-symbols-outlined cursor-pointer ${styles.hovertext} ${styles.likeBtn} likes_dislikes_span`}
                data-hover="Share"
              >
                share
              </span> */}
              <Sharemodal />
            </div>
          </div>
        </div>
        <hr className="info-divider" />
      </div>
      <div className="author-info">
        {/* <div className="account">
          <div>
            <img
              className="account-png"
              src="https://yt3.ggpht.com/ytc/AAUvwnipRs_TaZT1wXcO-VywMuE-dbpbU0DZeQUjT5moaQ=s48-c-k-c0xffffffff-no-rj-mo"
            />
          </div>
          <div>
            <h5>PekinWoof </h5>
            <p>124k subscribers</p>
          </div>
          <div className="subscribe">
            <button>SUBSCRIBE</button>
          </div>
        </div> */}
        <p className="summary">{posts[0].description}</p>
        <hr className="info-divider" />
      </div>

      {/* --------- */}
    </div>
  );
}
