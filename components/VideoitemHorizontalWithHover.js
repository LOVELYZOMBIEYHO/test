import Link from "next/link";
import Image from "next/image";
// import styles from "@/styles/Videoitemhorizontal.module.css";
import styles from "@/styles/VideoitemhorizontalWithHover.module.css";

import CategoryLabel from "./CategoryLabel";

import axios from "axios";
import { useState, useEffect } from "react";
import HoverVideoPlayer from "react-hover-video-player";

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
              {/* <Image
                src={
                  evt.imageLinkHorizontal
                    ? evt.imageLinkHorizontal
                    : "/images/event-default.png"
                }
                width={670}
                height={400}
                alt={evt.titleChinese}
                className="rounded"
              /> */}
              <HoverVideoPlayer
                // videoSrc="/videos/videoplayback.mp4"
                // videoSrc="https://i.imgur.com/sprhuAp.mp4"
                // videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                videoSrc={evt.previewVideoLink ? evt.previewVideoLink : ""}
                className={styles.HoverVideoPlayer}
                pausedOverlay={
                  <img
                    src={evt.imageLinkHorizontal}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}

                    // <Image
                    //   src={evt.imageLinkHorizontal}
                    //   alt={evt.titleChinese}
                    //   layout="fill"
                    //   style={{
                    //     // Make the image expand to cover the video's dimensions
                    //     width: "100%",
                    //     height: "100%",
                    //     objectFit: "cover",
                    //   }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </a>
          </Link>

          <div className={`${styles.playIconContainer} z-10`}>
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
