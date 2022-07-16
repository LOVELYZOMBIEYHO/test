import { useState, useEffect } from "react";
import UseFade from "@/styles/UseFade.module.css";
import shareStyles from "@/styles/ShareModal.module.css";
import styles from "@/styles/VideoInfoWrapper.module.css";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  LineShareButton,
  LineIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  WeiboShareButton,
  WeiboIcon,
} from "react-share";

export default function Sharemodal() {
  const [show, setShow] = useState(false);
  const [loginshow, setLoginshow] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  //   Fade out animation
  const fadeOutAni = () => {
    //   data-attribute of html (instead of Class)
    const fadeOutElement = document.querySelector("[data-fadeoutcustom]");

    fadeOutElement.classList.remove(`${UseFade.fadeInCustom}`);
    fadeOutElement.classList.add(`${UseFade.fadeOutCustom}`);
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 200);
  };

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  return (
    <div>
      <span
        className={`material-symbols-outlined cursor-pointer ${styles.hovertext} ${styles.likeBtn} likes_dislikes_span`}
        data-hover="Share"
        onClick={() => setShow((prev) => !prev)}
      >
        share
      </span>
      {show && (
        <div
          className={`z-10 fixed inset-0 bg-gray-900 bg-opacity-60 h-full w-full px-4 ${UseFade.fadeInCustom}`}
          //   data-attribute of html (instead of Class)
          data-fadeoutcustom
        >
          <div
            className={`absolute z-40 h-full w-full bg-gray-900 bg-opacity-60 overflow-y-auto ${UseFade.fadeInCustom} `}
            onClick={() => {
              //   setShow((prev) => !prev);
              fadeOutAni();
            }}
          ></div>
          <div className="relative top-32 mx-auto shadow-lg rounded-md bg-white max-w-md z-50">
            {/* <!-- Modal header --> */}
            <div
              className={`flex justify-between items-center text-white text-xl px-4 py-2 ${shareStyles.ShareModalHeader}`}
            >
              <h3 className="text-center font-bold text-sm md:text-md lg:text-lg">
                分享內容
              </h3>
              <button
                onClick={() => {
                  //   setShow((prev) => !prev);
                  fadeOutAni();
                }}
              >
                x
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className={`max-h-88 p-4 ${shareStyles.ShareModalBody}`}>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} className="rounded-full" />
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={40} className="rounded-full" />
              </WhatsappShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} className="rounded-full" />
              </EmailShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={40} className="rounded-full" />
              </TelegramShareButton>
              <WeiboShareButton url={shareUrl}>
                <WeiboIcon size={40} className="rounded-full" />
              </WeiboShareButton>

              <br />
              <br />

              <div className="text-center">
                <p className="border-solid border-2 border-sky-500 overflow-auto">
                  {shareUrl}
                </p>
                {/* simple copy link */}
                <br />
                <br />
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="px-4 py-2 bg-transparent outline-none border-2 border-indigo-400 rounded text-indigo-500 font-medium active:scale-95 hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
                >
                  複製
                </button>
              </div>
              {/* <div className="text-center mt-12">
                <span>Test span</span>
              </div> */}
            </div>

            {/* <!-- Modal footer --> */}
            {/* <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={() => setShow((prev) => !prev)}
      >
        Close
      </button>
    </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
