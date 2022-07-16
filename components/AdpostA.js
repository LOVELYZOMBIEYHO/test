import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdpostA() {
  return (
    <div className="m-10">
      <Link
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
      </Link>
    </div>
  );
}
