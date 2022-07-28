import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

export default function caro() {
  return (
    <div>
      {/* <Carousel
        showArrows={true}
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
          <Image
            src={
              "https://cdn.pixabay.com/photo/2022/06/22/10/47/cheetah-7277665_1280.jpg"
            }
            width={600}
            height={400}
            objectFit="cover"
            alt="loginIconThumbnail"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </div>
  );
}
