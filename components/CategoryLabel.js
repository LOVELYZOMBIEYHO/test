import Link from "next/link";
import { useState, useEffect } from "react";
import { FRONT_URL } from "@/config/index";
import axios from "axios";
import Cookies from "js-cookie";

export default function CategoryLabel({ children, categoryOptions }) {
  // console.log(categoryOptions[2]);
  // const colorKey = {
  //   hanime: "yellow",
  //   cosplay: "red",
  //   test: "blue",
  // };
  // ------------------
  // Category options from MongoDB and store in NextJS API through ISR everypage
  const [colorKeyB, setColorKeyB] = useState([]); // Array
  const [colorKeyC, setColorKeyC] = useState({}); // Object
  let colorKeyCForCookies = "";
  // useEffect(() => {
  //   async function getCategoryOptions() {
  //     const results = await axios(`${FRONT_URL}/api/categoryOptions-data`);
  //     setColorKeyB(results.data);
  //   }
  //   getCategoryOptions();
  // }, []);

  useEffect(() => {
    // Retrieve the JSON string
    // const jsonCategoryOptionsObject = localStorage.getItem(
    //   "categoryOptionsObject"
    // );
    const jsonCategoryOptionsObject = categoryOptions;
    // Parse the JSON string back to JS object
    // const retrievedCategoryOptions = JSON.parse(jsonCategoryOptionsObject);
    const retrievedCategoryOptions = jsonCategoryOptionsObject;

    setColorKeyB(retrievedCategoryOptions);
  }, []);
  for (let i = 0; i < colorKeyB.length; i++) {
    // For loop and create New Object of ColorKey,  Since getCategoryOptions Change can re-render again, so don't need to use useEffect again
    colorKeyC[colorKeyB[i].label] = colorKeyB[i].colorKey;
    // For cookies store colorKey (since next middleware only read cookies, can't localstorage)
    // -------
    // if (i == colorKeyB.length - 1) {
    //   colorKeyCForCookies += [
    //     Object.keys(colorKeyC)[i] + "," + Object.values(colorKeyC)[i],
    //   ];
    // } else {
    //   colorKeyCForCookies += [
    //     Object.keys(colorKeyC)[i] + "," + Object.values(colorKeyC)[i] + ",",
    //   ];
    // }
    // --------
  }

  // console.log(Object.values(colorKeyC)[1]);
  // console.log(colorKeyCForCookies);
  // console.log(colorKeyC);
  // --------------
  //   return (
  //     <div
  //       className={`bg-${colorKeyC[children]}-600 text-right btnCategoryLabel`}
  //     >
  //       <Link href={`/category/${children.toLowerCase()}`}>
  //         <a>{children}</a>
  //       </Link>
  //     </div>
  //   );
  // }
  // ---------------------
  // return (
  //   <div className={`bg-${colorKey[children]}-600 text-right btnCategoryLabel`}>
  //     <Link href={`/category/${children.toLowerCase()}`}>
  //       <a>{children}</a>
  //     </Link>
  //   </div>
  // );
  // }

  // -----------------Test -use cookies to read colorKey (but fail)
  // const colorObj = {};
  // let [colorObj, setColorObj] = useState({});
  // let [forceReRender, setForceReRender] = useState({});
  // useEffect(() => {
  //   const getColorCookies = Cookies.get("categoryOptionsObject").split(",");
  //   // console.log(getColorCookies.length);
  //   for (let i = 0; i < getColorCookies.length; i += 2) {
  //     colorObj[getColorCookies[i]] = getColorCookies[i + 1];
  //   }
  //   setForceReRender("");
  //   // console.log(typeof getColorCookies);
  //   // console.log(colorKey);
  //   // console.log(colorObj);
  // }, []);
  // -----------------
  return (
    <Link href={`/category/${children}`}>
      <div
        // className={`bg-${colorKeyC[children]}-600 text-center btnCategoryLabel`}
        className={` text-center btnCategoryLabel`}
        style={{ backgroundColor: `${colorKeyC[children]}` }}
      >
        <a>{children.toLowerCase()}</a>
      </div>
    </Link>
  );
}
