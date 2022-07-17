import { useState, useEffect } from "react";
import UseFade from "@/styles/UseFade.module.css";
import Image from "next/image";
import styles from "@/styles/SuccessLoginModal.module.css";
import Cookies from "js-cookie";
import { clear_cookies } from "api/logoutfunction";
import Link from "next/link";

export default function SuccessLoginModal({ loginshow, setLoginshow }) {
  //   Fade out animation
  const fadeOutAni = () => {
    //   data-attribute of html (instead of Class)
    const fadeOutElement = document.querySelector("[data-fadeoutcustom]");

    fadeOutElement.classList.remove(`${UseFade.fadeInCustom}`);
    fadeOutElement.classList.add(`${UseFade.fadeOutCustom}`);
    setTimeout(() => {
      setLoginshow((prev) => !prev);
    }, 1000);
  };

  const [icon, setIcon] = useState("");
  // const icon = localStorage.getItem("recent-image");
  // if (icon == "null") {
  //   const icon = "/images/loginIconThumbnail.jpeg";
  // } else {
  //   const icon = icon;
  // }
  useEffect(() => {
    setIcon(localStorage.getItem("icon"));
  }, [icon]);
  return (
    <div>
      <div className="flex justify-center">
        <div
          className="relative inline-block"
          onClick={() => setLoginshow((prev) => !prev)}
        >
          <Image
            className="cursor-pointer rounded-3xl"
            src={
              icon && icon != "undefined"
                ? icon
                : "/images/loginIconThumbnail.jpeg"
            }
            width={30}
            height={30}
            objectFit="cover"
            alt="loginIconThumbnail"
          />
          {loginshow && (
            <div
              className={`fixed z-50 inset-0 overflow-y-auto h-full w-full px-4`}
              //   data-attribute of html (instead of Class)
              data-fadeoutcustom
            >
              <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-gray-800 rounded-md shadow-xl dark:bg-gray-800">
                <a
                  href="#"
                  className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <Image
                    className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                    // src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                    src={
                      icon && icon != "undefined"
                        ? icon
                        : "/images/loginIconThumbnail.jpeg"
                    }
                    alt="登入ICON"
                    width={40}
                    height={40}
                  />
                  <div className="mx-1 w-40">
                    <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                      {Cookies.get("username")}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
                      {Cookies.get("email")}
                    </p>
                  </div>
                </a>

                <hr className="border-gray-200 dark:border-gray-700 " />

                <Link href="/user/profile">
                  <a className="block px-4 py-3 text-sm text-white capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    我的收藏
                  </a>
                </Link>
                <Link href="/user/edit">
                  <a className="block px-4 py-3 text-sm text-white capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    更改個人資料
                  </a>
                </Link>

                <hr className="border-gray-200 dark:border-gray-700 " />

                <Link href="/user/outputlikelist">
                  <a className="block px-4 py-3 text-sm text-white capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    輸出你喜歡的影片列表
                  </a>
                </Link>

                <hr className="border-gray-200 dark:border-gray-700 " />

                <a
                  onClick={clear_cookies}
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                >
                  登出
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
