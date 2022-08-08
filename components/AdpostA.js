import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";

export default function AdpostA() {
  return (
    <div className="m-10">
      {/* <Link
        href={
          "https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_1280.jpg"
        }
      >
        <a rel="nofollow">
          <Image
            src={
              "https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_1280.jpg"
            }
            width={2260}
            height={2000}
            alt={"Ad"}
            rel="nofollow"
          />
        </a>
      </Link> */}

      {/* Adsterra */}
      <Script
        async="async"
        data-cfasync="false"
        src="//pl17559545.highperformancegate.com/e28ba9e484bf75db00eb45066ce57674/invoke.js"
      />
      <div id="container-e28ba9e484bf75db00eb45066ce57674"></div>
    </div>
  );
}
