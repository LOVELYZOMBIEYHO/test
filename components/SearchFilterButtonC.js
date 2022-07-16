import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Searchfilterbutton.module.css";

export default function SearchFilterButton({ categoryOptions, tagOptions }) {
  const router = useRouter();

  //   handle checked/clicked event
  const [isCheck, setIsCheck] = useState([]);
  const [arrayCheck, setArrayCheck] = useState([]);
  const [filterClickCss, setFilterClickCss] = useState(
    "bg-purple-600 text-white font-montserrat py-2 px-4 font-medium rounded-xl hover:bg-purple-500 transition-all duration-300"
  );
  const handleClick = (e) => {
    const { value, checked } = e.target;
    setIsCheck([...isCheck, { value: value }]);
    const arrayForCheckIncludes = isCheck.map((a) => a.value);

    // if value includes in array, filter out this
    if (arrayForCheckIncludes.includes(e.target.value)) {
      setIsCheck(isCheck.filter((item) => item.value !== value));
    }
    // if (checked) {
    //   setFilterClickCss(
    //     "bg-purple-800 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-purple-500 transition-all duration-300 text-xs"
    //   );
    // }
  };

  //   useEffect(() => {
  //     setArrayCheck(isCheck.map((a) => a.value));
  //   }, [isCheck]);
  //   console.log(arrayCheck);
  //   filter Show
  const [showA, setShowA] = useState(false);
  const cssTurnOff =
    "h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100";
  const cssTurnOn =
    "h-2 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500 hover:h-3 hover:w-3 transition-all duration-150 delay-100";
  const cssWordTurnOff = `text-gray-400 hover:text-yellow-500 ${styles.formBtnDiv}`;
  const cssWordTurnOn = `text-yellow-400 hover:text-yellow-500 ${styles.formBtnDiv}`;

  const [cssClassNameChangeA, setCssClassNameChangeA] = useState(cssTurnOff);
  const [cssClassNameChangeB, setCssClassNameChangeB] = useState(cssTurnOff);
  const [cssClassNameChangeC, setCssClassNameChangeC] = useState(cssTurnOff);
  const [cssClassNameChangeD, setCssClassNameChangeD] = useState(cssTurnOff);
  const [cssClassNameChangeE, setCssClassNameChangeE] = useState(cssTurnOff);

  const [cssWordClassNameChangeA, setCssWordClassNameChangeA] = useState(
    cssWordTurnOff
  );
  const [cssWordClassNameChangeB, setCssWordClassNameChangeB] = useState(
    cssWordTurnOff
  );
  const [cssWordClassNameChangeC, setCssWordClassNameChangeC] = useState(
    cssWordTurnOff
  );
  const [cssWordClassNameChangeD, setCssWordClassNameChangeD] = useState(
    cssWordTurnOff
  );
  const [cssWordClassNameChangeE, setCssWordClassNameChangeE] = useState(
    cssWordTurnOff
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const arrayForCheck = isCheck.map((a) => a.value);
    const searchQuery = arrayForCheck.toString().replace(",", " ");
    router.push(`/videos/search/${searchQuery}`);
  };

  return (
    <div>
      <div className="w-full max-w-md px-1 py-1 mx-auto rounded-2xl">
        <div className="px-5 pt-3 shadow-lg rounded-2xl">
          <div className="flex flex-row justify-center">
            <div
              className="flex group"
              onClick={() => {
                setShowA((prev) => !prev);
                setCssClassNameChangeA(cssTurnOn);
                setCssClassNameChangeB(cssTurnOff);
                setCssClassNameChangeC(cssTurnOff);
                setCssClassNameChangeD(cssTurnOff);
                setCssClassNameChangeE(cssTurnOff);
                setCssWordClassNameChangeA(cssWordTurnOn);
                setCssWordClassNameChangeB(cssWordTurnOff);
                setCssWordClassNameChangeC(cssWordTurnOff);
                setCssWordClassNameChangeD(cssWordTurnOff);
                setCssWordClassNameChangeE(cssWordTurnOff);
              }}
            >
              <button className={`${cssWordClassNameChangeA}`}>
                <span className="flex flex-col items-center">
                  <span
                    className={`${styles.formBtn} mb-2 transition-all duration-200`}
                  >
                    多項篩選
                  </span>

                  <span className={`${cssClassNameChangeA}`}></span>
                </span>
              </button>
            </div>

            <div
              className="flex group"
              onClick={() => {
                setShowA(false);

                setCssClassNameChangeB(cssTurnOn);
                setCssClassNameChangeA(cssTurnOff);
                setCssClassNameChangeC(cssTurnOff);
                setCssClassNameChangeD(cssTurnOff);
                setCssClassNameChangeE(cssTurnOff);
                setCssWordClassNameChangeB(cssWordTurnOn);
                setCssWordClassNameChangeA(cssWordTurnOff);
                setCssWordClassNameChangeC(cssWordTurnOff);
                setCssWordClassNameChangeD(cssWordTurnOff);
                setCssWordClassNameChangeE(cssWordTurnOff);
              }}
            >
              <button className={`${cssWordClassNameChangeB}`}>
                <span className="flex flex-col items-center">
                  <span
                    className={`${styles.formBtn} mb-2 transition-all duration-200`}
                  >
                    多項選擇
                  </span>

                  <span className={`${cssClassNameChangeB}`}></span>
                </span>
              </button>
            </div>

            <div
              className="flex group"
              onClick={() => {
                setShowA(false);

                setCssClassNameChangeC(cssTurnOn);
                setCssClassNameChangeA(cssTurnOff);
                setCssClassNameChangeB(cssTurnOff);
                setCssClassNameChangeD(cssTurnOff);
                setCssClassNameChangeE(cssTurnOff);
                setCssWordClassNameChangeC(cssWordTurnOn);
                setCssWordClassNameChangeA(cssWordTurnOff);
                setCssWordClassNameChangeB(cssWordTurnOff);
                setCssWordClassNameChangeD(cssWordTurnOff);
                setCssWordClassNameChangeE(cssWordTurnOff);
              }}
            >
              <button className={`${cssWordClassNameChangeC}`}>
                <span className="flex flex-col items-center">
                  <span
                    className={`${styles.formBtn} mb-2 transition-all duration-200`}
                  >
                    根據片長
                  </span>

                  <span className={`${cssClassNameChangeC}`}></span>
                </span>
              </button>
            </div>

            {/* <div
              className="flex group"
              onClick={() => {
                setShowA(false);

                setCssClassNameChangeD(cssTurnOn);
                setCssClassNameChangeA(cssTurnOff);
                setCssClassNameChangeB(cssTurnOff);
                setCssClassNameChangeC(cssTurnOff);
                setCssClassNameChangeE(cssTurnOff);
                setCssWordClassNameChangeD(cssWordTurnOn);
                setCssWordClassNameChangeA(cssWordTurnOff);
                setCssWordClassNameChangeB(cssWordTurnOff);
                setCssWordClassNameChangeC(cssWordTurnOff);
                setCssWordClassNameChangeE(cssWordTurnOff);
              }}
            >
              <button className={`${cssWordClassNameChangeD}`}>
                <span className="flex flex-col items-center">
                  <span
                    className={`${styles.formBtn} mb-2 transition-all duration-200`}
                  >
                    Cart
                  </span>

                  <span className={`${cssClassNameChangeD}`}></span>
                </span>
              </button>
            </div>

            <div
              className="flex group"
              onClick={() => {
                setShowA(false);

                setCssClassNameChangeE(cssTurnOn);
                setCssClassNameChangeA(cssTurnOff);
                setCssClassNameChangeB(cssTurnOff);
                setCssClassNameChangeC(cssTurnOff);
                setCssClassNameChangeD(cssTurnOff);
                setCssWordClassNameChangeE(cssWordTurnOn);
                setCssWordClassNameChangeA(cssWordTurnOff);
                setCssWordClassNameChangeB(cssWordTurnOff);
                setCssWordClassNameChangeC(cssWordTurnOff);
                setCssWordClassNameChangeD(cssWordTurnOff);
              }}
            >
              <button className={`${cssWordClassNameChangeE}`}>
                <span className="flex flex-col items-center">
                  <span
                    className={`${styles.formBtn} mb-2 transition-all duration-200`}
                  >
                    Account
                  </span>

                  <span className={`${cssClassNameChangeE}`}></span>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* ---------- */}
      {showA && (
        <div className="container mx-auto rounded shadow-lg">
          <span className={`m-3 ${styles.filterLabelName}`}>類別</span>
          <div className="grid grid-cols-3 gap-4 text-center md:grid-cols-5">
            {categoryOptions.map((option) => (
              <div key={option.chiName}>
                {/* use label to wrap all input and span can make click anywhere inside label activate "checked" */}
                <label className="checkBoxContainer">
                  {/* {option.chiName} */}
                  <input
                    type="checkbox"
                    value={option.chiName}
                    name={option.chiName}
                    onChange={handleClick}
                  />
                  <span
                    className={`checkmark ${filterClickCss} ${styles.tagBtn}`}
                  >
                    {option.chiName}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <span className={`m-3 ${styles.filterLabelName}`}>標籤</span>

          <div className="grid grid-cols-3 gap-4 text-center md:grid-cols-5">
            {tagOptions.map((option) => (
              <div key={option.chiName}>
                {/* use label to wrap all input and span can make click anywhere inside label activate "checked" */}
                <label className="checkBoxContainer">
                  {/* {option.chiName} */}
                  <input
                    type="checkbox"
                    value={option.chiName}
                    name={option.chiName}
                    onChange={handleClick}
                  />
                  <span
                    className={`checkmark ${filterClickCss} ${styles.tagBtn}`}
                  >
                    {option.chiName}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="grid gap-4 text-center">
            <button
              type="submit"
              onClick={(e) => handleSearchSubmit(e)}
              className={`grid mx-auto border border-purple-600 text-purple-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 ${styles.submitBtn}`}
            >
              提交
            </button>
          </div>
        </div>
      )}

      {/* ------------- */}
    </div>
  );
}
