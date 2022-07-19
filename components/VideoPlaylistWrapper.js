import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VideoPlaylistWrapper(evt) {
  // console.log(evt.post);
  // console.log(evt.postSeries);

  return (
    <div>
      {/* <div className="max-w-2xl mx-auto"> */}
      <div className="p-4 bg-gray-800 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <Image
            className="w-14 h-14 rounded-full"
            // src="https://i.imgur.com/Ektetlk.jpg"
            src={evt.post.imageLinkVertical}
            width={50}
            height={50}
            alt={evt.post.slug}
          />
          {/* <a
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      View all
                    </a> */}
          <p className="flex-1 text-left ml-1 dark:text-white">
            {evt.post.series}
          </p>
        </div>
        <div className="flow-root">
          {/* ------------------------------------------- */}
          {/* <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>

            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Thomas image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
          </ul> */}
          {/* ------------------------------------------- */}
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700 overflow-auto h-48"
          >
            {evt.postSeries.map((evts) => (
              <li className="py-3 sm:py-4" key={evts.slug.toString()}>
                <Link href={`/videos/${evts.slug}`}>
                  <a className="text-sm font-medium dark:text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {/* <img
                      className="w-12 h-18"
                      src={evts.imageLinkVertical}
                      alt="Neil image"
                    /> */}
                        <Image
                          className="w-12 h-18"
                          src={evts.imageLinkHorizontal}
                          width={160}
                          height={90}
                          alt={evts.slug}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* <Link href={`/videos/${evts.slug}`}>
                      <a className="text-sm font-medium dark:text-white">
                        {" "}
                        {evts.titleChinese}
                      </a>
                    </Link> */}
                        <p className="text-sm font-medium dark:text-white">
                          {evts.titleChinese}
                        </p>
                        {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          觀看次數
                        </p> */}
                      </div>
                      {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> */}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </div> */}

      {/* Reference for map */}
      {/* {evt.postSeries.map((evts) => (
        <div key={evts.slug.toString()}>{evts.slug}</div>
      ))} */}
    </div>
  );
}
