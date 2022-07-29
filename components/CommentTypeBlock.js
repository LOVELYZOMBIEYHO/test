import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { API_URL } from "/config/index";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "@/styles/Videocomment.module.css";

export default function CommentTypeBlock({ commentToPush, setCommentToPush }) {
  const router = useRouter();
  const parentPostSlug = router.query.slug;

  const [icon, setIcon] = useState("/images/loginIconThumbnail.jpeg");

  //   For Dynamice icon
  //   useEffect(() => {
  //     setIcon(localStorage.getItem("icon"));
  //   }, [icon]);

  //   const [commentToPush, setCommentToPush] = useState("");

  const tokenJWT = Cookies.get("AT");

  const pushCommentToBackend = (e) => {
    e.preventDefault();
    console.log(commentToPush);

    // prevent blank comment body push to backend
    if (commentToPush === "") return;

    // Date time function
    const date = new Date();
    // const [month, day, year] = [
    //   date.getMonth(),
    //   date.getDate(),
    //   date.getFullYear(),
    // ];
    // const [hour, minutes, seconds] = [
    //   date.getHours(),
    //   date.getMinutes(),
    //   date.getSeconds(),
    // ];

    axios
      .post(
        `${API_URL}/postcomments`,
        {
          parentPostSlug: parentPostSlug,
          postedTime: date,
          commentBody: commentToPush,
          //   author not need, backend use JWT to read author name
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenJWT}`,

            // access_token_cookie,
            // Authorization: "Bearer <access_token>"

            // withCredentials: true,
            // credentials: "include",
          },
        }
      )
      .then(function(response) {
        // console.log(response);
        // alert(response.data);
        setCommentToPush("");
      })
      .catch(function(error) {
        // console.log(error);
        // console.log(error.response.data);
        alert(
          `${error}, "You may try to login again, check the slug or idCount duplication"`
        );
      });
  };

  return (
    <div>
      {tokenJWT ? (
        <div className="account">
          <div>
            <Image
              className="account-png"
              src={icon}
              alt="Picture of the author"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.makeCommentDivWidth}>
            <form
              onSubmit={pushCommentToBackend}
              className="inline-grid w-full"
            >
              <input
                type="textarea"
                className="text-black ml-3 w-full w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="發表你的意見"
                value={commentToPush}
                onChange={(e) => setCommentToPush(e.target.value)}
              />

              {/* <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                提交
              </button> */}
            </form>
          </div>
        </div>
      ) : (
        "請登入後討論"
      )}
    </div>
  );
}
