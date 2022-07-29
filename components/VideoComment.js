// import React, { useEffect, useRef } from "react";

// export default function App() {
//   const ref = useRef(null);

//   useEffect(() => {
//     console.log("width", ref.current.offsetWidth);
//   }, []);

//   return (
//     <div ref={ref}>
//       {(() => {
//         if (ref.current.offsetWidth > 1300) {
//           return <div>Big 1300</div>;
//         } else if (ref.current.offsetWidth < 1300) {
//           return <div>small 1300</div>;
//         } else {
//           return <div>catch all</div>;
//         }
//       })()}
//       Hello
//     </div>
//   );
// }

// -----

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

//   const updateMedia = () => {
//     setDesktop(window.innerWidth > 650);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateMedia);
//     return () => window.removeEventListener("resize", updateMedia);
//   });

//   return (
//     <div>
//       {isDesktop ? (
//         <div>I show on 651px or higher</div>
//       ) : (
//         <div>I show on 650px or lower</div>
//       )}
//     </div>
//   );
// }

// -----------------------------

import { useState, useEffect } from "react";
import styles from "@/styles/Videorelatedcomment.module.css";
import { API_URL } from "/config/index";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import CommentTypeBlock from "@/components/CommentTypeBlock";

export default function VideoComment() {
  const router = useRouter();
  const commentSlug = router.query.slug;

  const [allComments, setAllcomments] = useState([]);

  // push Comment to backend
  const [commentToPush, setCommentToPush] = useState("");

  useEffect(() => {
    const getPostComments = async () => {
      try {
        const postComments = await axios.get(
          `${API_URL}/postcomments/${commentSlug}`
        );
        setAllcomments(postComments.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getPostComments();
  }, [commentToPush]);
  // {posts.map((evt) => (
  //   <VideoitemHorizontalWithHover
  //     key={Object.values(evt.slug)}
  //     evt={evt}
  //     categoryOptions={categoryOptions}
  //   />
  // ))}

  return (
    <div>
      {/* <div className="account">
        <div>
          <img
            className="account-png"
            src="https://yt3.ggpht.com/ytc/AAUvwnipRs_TaZT1wXcO-VywMuE-dbpbU0DZeQUjT5moaQ=s48-c-k-c0xffffffff-no-rj-mo"
          />
        </div>
        <div>
          <h5>testName </h5>
        </div>
      </div>
      <p className={styles.commentsDiv}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      </p> */}
      {/* ---------------------------- */}
      <CommentTypeBlock
        commentToPush={commentToPush}
        setCommentToPush={setCommentToPush}
      />

      {/* ---------------------------- */}
      {allComments.map((evt) => (
        <div key={Object.values(evt._id)}>
          <div className="account">
            <div>
              <Image
                className="account-png"
                src="/images/loginIconThumbnail.jpeg"
                width={45}
                height={45}
              />
            </div>
            <div>
              <h5 className="ml-5">
                {evt.author.slice(0, 3)}
                {"xxxxxxxx"}
              </h5>
            </div>
          </div>
          <p className={styles.commentsDiv}>{evt.commentBody}</p>
        </div>
      ))}
    </div>
  );
}
