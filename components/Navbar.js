// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import Search from "./Search";
// import Link from "next/link";
// import Image from "next/image";

// import LoginModal from "./LoginModal";

// export default function Navbar() {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-white-800 shadow-xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <div>
//                   <Link href="/">
//                     <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
//                       H WEBSITE
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//               <div className="hidden md:block flex-shrink-0">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   {/* <Search /> */}
//                   <Link href="/articles">
//                     <a className=" hover:bg-gray-700 hover:text-white text-red-600 px-1 py-2 rounded-md text-sm font-medium">
//                       All articles
//                     </a>
//                   </Link>
//                   <Link href="/category/web-development">
//                     <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                       Web Development
//                     </a>
//                   </Link>
//                   <Link href="/createpage">
//                     <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                       Create Page
//                     </a>
//                   </Link>
//                   <Link href="/login">
//                     <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                       Login
//                     </a>
//                   </Link>
//                   {/* <div className="text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                     <Image
//                       className="cursor-pointer "
//                       src={"/images/loginIconThumbnail.jpeg"}
//                       width={30}
//                       height={30}
//                       objectFit="cover"
//                       alt="loginIconThumbnail"
//                     />
//                   </div>
//                   <LoginModal /> */}
//                 </div>
//               </div>
//             </div>
//             {/* Login modal when desktop */}
//             <div className="hidden md:block flex-shrink-0">
//               <LoginModal />
//             </div>

//             {/* Login modal when smartphone */}
//             <div className="md:hidden text-right flex-shrink-0 text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
//               <LoginModal />
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {() => (
//             <div className="md:hidden" id="mobile-menu">
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link href="/articles">
//                   <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
//                     All articles
//                   </a>
//                 </Link>
//                 <Link href="/category/web-development">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                     Web Development
//                   </a>
//                 </Link>
//                 <Link href="/createpage">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                     Create Page
//                   </a>
//                 </Link>
//                 <Link href="/login">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                     Login
//                   </a>
//                 </Link>
//                 <Search />
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>
//     </div>
//   );
// }

// -----------------------------------

// import React from "react";

// export default function Navbar({ fixed }) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <a
//               className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
//               href="#pablo"
//             >
//               pink Tailwind Starter Kit
//             </a>
//             <button
//               className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id="example-navbar-danger"
//           >
//             <ul className="flex flex-col lg:flex-row list-none ">
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Share</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Tweet</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Pin</span>
//                 </a>
//               </li>
//             </ul>

//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="nav-item">
//                 <a
//                   className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
//                   href="#pablo"
//                 >
//                   <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
//                   <span className="ml-2">Share</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
// --------------------------------------

// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import Search from "./Search";
// import Link from "next/link";
// import Image from "next/image";
// // import NavStyles from "@/styles/Navbar.module.css";

// import LoginModal from "./LoginModal";

// export default function Navbar() {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <nav
//       // className={`bg-gray-800 w-max fixed z-50 w-full ${NavStyles.navbarcustom}`}
//       className="bg-gray-800 w-max fixed z-50 w-full"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <div>
//                 <Link href="/">
//                   <a className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
//                     H WEBSITE
//                   </a>
//                 </Link>
//               </div>
//             </div>
//             <div className="hidden md:block flex-shrink-0">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {/* <Search /> */}
//                 <Link href="/category/hanime">
//                   <a className=" hover:bg-gray-700 hover:text-cyan-600 text-white px-1 py-2 rounded-md text-sm font-medium">
//                     Hanime
//                   </a>
//                 </Link>
//                 <Link href="/category/web-development">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                     Web Development
//                   </a>
//                 </Link>
//                 <Link href="/createpage">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                     Create Page
//                   </a>
//                 </Link>
//                 <Link href="/login">
//                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
//                     Login
//                   </a>
//                 </Link>
//                 <Search />
//               </div>
//             </div>
//           </div>
//           {/* Login modal when desktop */}
//           <div className="hidden md:block flex-shrink-0">
//             <LoginModal />
//           </div>

//           {/* Login modal when smartphone */}
//           <div className="md:hidden text-right flex-shrink-0 text-black px-3 py-2 rounded-md">
//             <LoginModal />
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {() => (
//           <div className="md:hidden" id="mobile-menu">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link href="/category/hanime">
//                 <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
//                   Hanime
//                 </a>
//               </Link>
//               <Link href="/category/web-development">
//                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Web Development
//                 </a>
//               </Link>
//               <Link href="/createpage">
//                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Create Page
//                 </a>
//               </Link>
//               <Link href="/login">
//                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Login
//                 </a>
//               </Link>
//               <Search />
//             </div>
//           </div>
//         )}
//       </Transition>
//     </nav>
//   );
// }

// -------------------TEST Dynamic navbar-------------------

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Search from "./Search";
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
import { FRONT_URL } from "/config/index";
import { API_URL } from "/config/index";

// import NavStyles from "@/styles/Navbar.module.css";

import LoginModal from "./LoginModal";

export default function Navbar(navbarOptions) {
  // console.log(navOptions);
  // ---------------
  // const [navbarOptions, setNavbarOptions] = useState({}); // Object
  // useEffect(() => {
  //   async function getNavbarOptions() {
  //     // const results = await axios(`${API_URL}/navbardynamic`);
  //     const results = await axios("http://localhost:3000/api/navbar-data");
  //     setNavbarOptions(results.data);
  //   }
  //   getNavbarOptions();
  // }, []);

  // console.log(navbarOptions);
  // ---------------

  // ------------------------
  //   const [navbarOpen, setNavbarOpen] = React.useState(false);
  //   const [isOpen, setIsOpen] = useState(false);
  //   return (
  //     <nav
  //       // className={`bg-gray-800 w-max fixed z-50 w-full ${NavStyles.navbarcustom}`}
  //       className="bg-gray-800 w-max fixed z-50 w-full"
  //     >
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-center justify-between h-16">
  //           <div className="flex items-center">
  //             <div className="flex-shrink-0">
  //               <div>
  //                 <Link href="/">
  //                   <a className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
  //                     H WEBSITE
  //                   </a>
  //                 </Link>
  //               </div>
  //             </div>
  //             <div className="hidden md:block flex-shrink-0">
  //               <div className="ml-10 flex items-baseline space-x-4">
  //                 {/* <Search /> */}
  //                 <Link href="/category/hanime">
  //                   <a className=" hover:bg-gray-700 hover:text-cyan-600 text-white px-1 py-2 rounded-md text-sm font-medium">
  //                     Hanime
  //                   </a>
  //                 </Link>
  //                 <Link href="/category/web-development">
  //                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
  //                     Web Development
  //                   </a>
  //                 </Link>
  //                 <Link href="/createpage">
  //                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
  //                     Create Page
  //                   </a>
  //                 </Link>
  //                 <Link href="/login">
  //                   <a className="text-red-600 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
  //                     Login
  //                   </a>
  //                 </Link>
  //                 <Search />
  //               </div>
  //             </div>
  //           </div>
  //           {/* Login modal when desktop */}
  //           <div className="hidden md:block flex-shrink-0">
  //             <LoginModal />
  //           </div>

  //           {/* Login modal when smartphone */}
  //           <div className="md:hidden text-right flex-shrink-0 text-black px-3 py-2 rounded-md">
  //             <LoginModal />
  //           </div>
  //           <div className="-mr-2 flex md:hidden">
  //             <button
  //               onClick={() => setIsOpen(!isOpen)}
  //               type="button"
  //               className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  //               aria-controls="mobile-menu"
  //               aria-expanded="false"
  //             >
  //               <span className="sr-only">Open main menu</span>
  //               {!isOpen ? (
  //                 <svg
  //                   className="block h-6 w-6"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M4 6h16M4 12h16M4 18h16"
  //                   />
  //                 </svg>
  //               ) : (
  //                 <svg
  //                   className="block h-6 w-6"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M6 18L18 6M6 6l12 12"
  //                   />
  //                 </svg>
  //               )}
  //             </button>
  //           </div>
  //         </div>
  //       </div>

  //       <Transition
  //         show={isOpen}
  //         enter="transition ease-out duration-100 transform"
  //         enterFrom="opacity-0 scale-95"
  //         enterTo="opacity-100 scale-100"
  //         leave="transition ease-in duration-75 transform"
  //         leaveFrom="opacity-100 scale-100"
  //         leaveTo="opacity-0 scale-95"
  //       >
  //         {() => (
  //           <div className="md:hidden" id="mobile-menu">
  //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
  //               <Link href="/category/hanime">
  //                 <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
  //                   Hanime
  //                 </a>
  //               </Link>
  //               <Link href="/category/web-development">
  //                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
  //                   Web Development
  //                 </a>
  //               </Link>
  //               <Link href="/createpage">
  //                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
  //                   Create Page
  //                 </a>
  //               </Link>
  //               <Link href="/login">
  //                 <a className="text-red-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
  //                   Login
  //                 </a>
  //               </Link>
  //               <Search />
  //             </div>
  //           </div>
  //         )}
  //       </Transition>
  //     </nav>
  //   );
  // }

  // ---------------------------

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(navbarOptions.navbarOptions[0].brandIconUrl);
  const navbarLinks = navbarOptions.navbarOptions[0].links;
  return (
    <nav
      // className={`bg-gray-800 w-max fixed z-50 w-full ${NavStyles.navbarcustom}`}
      className="bg-gray-800 fixed z-50 w-full noSelect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div>
                <Link href="/">
                  {/* <a className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"> */}
                  <a>
                    <Image
                      className="w-14 h-14"
                      // src="/images/website-logo.png"
                      // src="https://i.imgur.com/rr8M6Xn.jpg"
                      src={navbarOptions.navbarOptions[0].brandIconUrl}
                      width={120}
                      height={50}
                      alt={navbarOptions.navbarOptions[0].brandName}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <Search /> */}
                {/* <Link href="/category/hanime">
                  <a className=" hover:bg-gray-700 hover:text-cyan-600 text-white px-1 py-2 rounded-md text-sm font-medium">
                    Hanime
                  </a>
                </Link> */}
                {/* ---------Navbar options------------------------- */}
                {navbarLinks.map((evt) => (
                  <Link href={evt.url} key={evt.label}>
                    <a className=" hover:bg-gray-700 hover:text-cyan-600 text-white px-1 py-2 rounded-md text-sm font-medium">
                      {evt.label}
                    </a>
                  </Link>
                ))}
                {/* ---------Navbar options------------------------- */}

                <Search />
              </div>
            </div>
          </div>
          {/* Login modal when desktop */}
          <div className="hidden md:block flex-shrink-0">
            <LoginModal />
          </div>

          {/* Login modal when smartphone */}
          <div className="md:hidden text-right flex-shrink-0 text-black px-3 py-2 rounded-md">
            <LoginModal />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* <Link href="/category/hanime">
                <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                  Hanime
                </a>
              </Link> */}

              {/* ---------Navbar options------------------------- */}

              {navbarLinks.map((evt) => (
                <Link href={evt.url} key={evt.label}>
                  <a className=" hover:text-white hover:bg-gray-700 text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                    {evt.label}
                  </a>
                </Link>
              ))}
              {/* ---------Navbar options------------------------- */}

              <Search />
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
