// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";

// export default function Eventitem({ evt }) {
//   return (
//     <div className={styles.event}>
//       <div className={styles.img}>
//         {/* if evt.image is true, show evt.image .otherwise show default png   ? = if first is true     := else */}
//         <Image
//           src={
//             evt.image
//               ? evt.image.formats.thumbnail.url
//               : "/image/event-default.png"
//           }
//           width={170}
//           height={100}
//         />
//       </div>
//       <div className={styles.info}>
//         <span>
//           {new Date(evt.date).toLocaleDateString("zh-HK")} at {evt.time}
//         </span>
//         <h3>{evt.name}</h3>
//       </div>
//       <div className={styles.link}>
//         <Link href={`/events/${evt.slug}`}>
//           <a className="btn">Details</a>
//         </Link>
//       </div>
//     </div>
//   );
// }
// ----------------------------------------------------------------------------

// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";
// import { API_URL } from "../config/index";

// export default function Eventitem({ evt }) {
//   return (
//     <div className={styles.img}>
//       {/* if evt.image is true, show evt.image .otherwise show default png   ? = if first is true     := else */}
//       {/* <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image
//             src={
//               evt.picture
//                 ? `${API_URL}`${evt.image.url}`
//                 : "/image/event-default.png"
//             }
//             width={200}
//             height={300}
//           />
//         </a>
//       </Link> */}

//       <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image
//             // src="https://strapi-it-blog.herokuapp.com/uploads/3_7c17a78777.png"
//             // src={`${API_URL}${evt.image.url}`}
//             src={evt.image.url}
//             width={600}
//             height={300}
//           />
//         </a>
//       </Link>
//       <div className={styles.info}>
//         <span>{evt.title}</span>
//         <br />

//         {/* <span>{`https://strapi-it-blog.herokuapp.com${evt.image.url}`}</span> */}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------

// import Link from "next/link";
// import Image from "next/image";
// import styles from "@/styles/Eventitem.module.scss";
// import { API_URL } from "../config/index";

// export default function Eventitem({ evt }) {
//   return (
//     <div className="flex items-center justify-center text-center">
//       <Link href={`/articles/${evt.slug}`}>
//         <a>
//           <Image src={evt.image.url} width={600} height={300} />
//         </a>
//       </Link>
//       <div className={styles.info}>
//         <p>{evt.title}</p>
//         <br />
//       </div>
//     </div>
//   );
// }

// -------------------------------------------------------------------------

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Videoitemhorizontal.module.css";
import CategoryLabel from "./CategoryLabel";

import axios from "axios";
import { useState, useEffect } from "react";

export default function VideoitemHorizontal({ evt, categoryOptions }) {
  // Calculate milliseconds in a year https://www.w3schools.com/jsref/jsref_gettime.asp
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  let compareDate = new Date() - new Date(evt.addedDate);
  let compareDay = Math.round(compareDate / day);
  let compareYear = Math.round(compareDate / year);

  let [viewCount, setViewCount] = useState([]);

  // CountAPI
  useEffect(() => {
    const countAPIGetViewRequest = async () => {
      try {
        const resp = await axios.get(
          `https://api.countapi.xyz/get/jseedav.com/:PATHNAME:${evt.idCount}`
        );
        // console.log(resp.data.value);
        setViewCount((prevState) => ({
          ...prevState,
          [evt.idCount]: resp.data.value,
        }));
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    countAPIGetViewRequest();
  }, []);

  return (
    <div className={styles.event}>
      <div className={styles.hoverDiv}>
        <div className={styles.img}>
          <Link href={`/videos/${evt.slug}`}>
            <a>
              <Image
                src={
                  evt.imageLinkHorizontal
                    ? evt.imageLinkHorizontal
                    : "/images/event-default.png"
                }
                width={670}
                height={400}
                alt={evt.titleChinese}
                className="rounded"
              />
            </a>
          </Link>

          <div className={styles.playIconContainer}>
            <span className={styles.playIconDivB}>
              <span className={`${styles.timeDuration}`}>
                {evt.videoDurationHour}
              </span>
            </span>
            {/* ---------- */}
            <span className={styles.playIconDivC}>
              {compareDay < 365 ? (
                <span
                  className={`${styles.timeDuration}`}
                >{`${compareDay}天前`}</span>
              ) : (
                <span
                  className={`${styles.timeDuration}`}
                >{`${compareYear}年前`}</span>
              )}
              {/* <span className={`${styles.timeDuration}`}>asd:56</span> */}
            </span>
            <span className={styles.playIconDivD}>
              <span className={`material-symbols-outlined ${styles.playIcon}`}>
                update
              </span>
            </span>
            <span className={styles.playIconDivE}>
              <span className={`${styles.pageViewCountText}`}>
                {/* {`${viewCount[evt.idCount]}次`} */}
                {viewCount[evt.idCount] > 10000
                  ? `${viewCount[evt.idCount] / 10000}萬次`
                  : `${viewCount[evt.idCount]}次`}
              </span>
            </span>

            <span className={styles.playIconDivF}>
              <span className={`material-symbols-outlined ${styles.playIcon}`}>
                smart_display
              </span>
            </span>
            {/* ------------ */}
          </div>
        </div>

        <div className={styles.info}>{evt.titleChinese}</div>
      </div>
      <div className={styles.categoryDiv}>
        <CategoryLabel categoryOptions={categoryOptions}>
          {/* {evt.category.categoryChi} */}
          {evt.category.slug}
        </CategoryLabel>
      </div>
    </div>
  );
}
