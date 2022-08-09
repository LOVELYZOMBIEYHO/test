import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";

// 468x60px ad
export default function AdpostD() {
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
      {/* popunder ads -- but I saw this no different with popup */}
      <Script
        type="text/javascript"
        src="//sympathydistinguish.com/8c/e9/9e/8ce99e60b9a27341dc804b4136ea6890.js"
      />
    </div>
  );
}
