import { useEffect, useRef, Component } from "react";
import VideoitemVertical from "@/components/VideoitemVertical";
import styles from "@/styles/Homeshowcaseone.module.css";

// react-responsive-carousel
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// React Indiana Drag Scroll
import ScrollContainer from "react-indiana-drag-scroll";

// nuka-carousel
import Carousel from "nuka-carousel";

import Image from "next/image";
export default function HomeShowCaseOne({ posts, categoryOptions }) {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     // 👇️ use a ref (best)
  //     const el2 = ref.current;
  //     console.log(el2);

  //     // 👇️ use document.querySelector()
  //     // should only be used when you can't set a ref prop on the element
  //     // (you don't have access to the element)
  //     const el = document.querySelector("#container");
  //     console.log(el);

  //     const handleScroll = (event) => {
  //       console.log("window.scrollX", window.scrollX);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const handleScroll = (event) => {
  //     console.log(event);
  //   };

  return (
    <div className={styles.mainDiv} id="mainDiv">
      <ScrollContainer
        className="scroll-container"
        // ref={ref}
        // id="container"
        // onScroll={handleScroll}
        // onStartScroll={handleScroll}
      >
        {posts.map((evt) => (
          <VideoitemVertical
            key={Object.values(evt.slug)}
            evt={evt}
            categoryOptions={categoryOptions}

            //   className={styles.mainDiv}
          />
        ))}
      </ScrollContainer>

      {/* --------- */}

      {/* ------------ */}
      {/* <Carousel
        showArrows={true}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
      
        <div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665_1280.jpg"
            }
            width={600}
            height={400}
            objectFit="cover"
            alt="loginIconThumbnail"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image
            src={
              "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665_1280.jpg"
            }
            width={600}
            height={400}
            objectFit="cover"
            alt="loginIconThumbnail"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          {posts.map((evt) => (
            <VideoitemVertical
              key={Object.values(evt.slug)}
              evt={evt}
              categoryOptions={categoryOptions}
              className={styles.mainDiv}
            />
          ))}
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
      {/* ------------ */}
      {/* nuka-carousel */}
      {/* <Carousel>
        {posts.map((evt) => (
          <VideoitemVertical
            key={Object.values(evt.slug)}
            evt={evt}
            categoryOptions={categoryOptions}
            //   className={styles.mainDiv}
          />
        ))}
      </Carousel> */}
    </div>
  );
}
