import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import TagsInput from "@/components/TagsInput";
import { API_URL } from "/config/index";
import { revalidateTimeVariable } from "@/config/index";
import Cookies from "js-cookie";
import axios from "axios";
import format from "format-duration";

export default function createcategoryoptions({ navbarOptions }) {
  let tokenCode = Cookies.get("Authorization");

  const [idCount, setIdCount] = useState("");
  const [colorKey, setColorKey] = useState("");
  const [chiName, setChiName] = useState("");
  const [engName, setEngName] = useState("");
  const [japName, setJapName] = useState("");
  const [showCaseImageHorizontal, setShowCaseImageHorizontal] = useState("");
  const [showCaseImageVertical, setShowCaseImageVertical] = useState("");

  useEffect(() => {
    async function getId() {
      const resultsIdCount = await axios(`${API_URL}/categoryidcount`);
      try {
        // auto increment
        setIdCount(resultsIdCount.data[0].id + 1);
      } catch {
        setIdCount("1");
      }
    }
    getId();
  }, []);

  const submitApplication = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/createcategoryoptions`,
        {
          label: engName,
          id: parseInt(idCount),
          value: engName,
          colorKey: colorKey,
          chiName: chiName,
          engName: engName,
          japName: japName,
          showCaseImageHorizontal: showCaseImageHorizontal,
          showCaseImageVertical: showCaseImageVertical,
        },
        {
          withCredentials: true, // IMPORTANT!!! or Header Bearer Token
        }
      )
      .then(function (response) {
        // console.log(response);
        alert(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        // console.log(error.response.data);
        alert(
          `${error}, "You may try to login again, check the slug or idCount duplication"`
        );
      });
  };
  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <!-- component --> */}
      <br />
      <br />
      <div className="flex items-center justify-center p-12 bg-white text-black">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={submitApplication}>
            <h1 className="text-center">建立類別</h1>
            <div className="mb-5">
              <label htmlFor="idCount">Category Id Count</label>
              <br />
              <input
                required="required"
                type="number"
                id="idCount"
                value={idCount}
                placeholder="Id Count"
                onChange={(e) => setIdCount(e.target.value)}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="chiName">Category Chinese Name</label>
              <br />
              <input
                type="text"
                required="required"
                id="chiName"
                value={chiName}
                placeholder="Category Chinese Name"
                onChange={(e) => setChiName(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="engName">Category English Name</label>
              <br />
              <input
                type="text"
                required="required"
                id="engName"
                value={engName}
                placeholder="Category English Name"
                onChange={(e) => setEngName(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="japName">Category Japan Name</label>
              <br />
              <input
                type="text"
                required="required"
                id="japName"
                value={japName}
                placeholder="Category Japan Name"
                onChange={(e) => setJapName(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="colorKey">
                Category Color Key (for example: #e03e3e)
              </label>
              <br />
              <input
                type="text"
                required="required"
                id="colorKey"
                value={colorKey}
                placeholder="Category Color Key"
                onChange={(e) => setColorKey(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="showCaseImageHorizontal">
                Show Case Image Horizontal
              </label>
              <br />
              <input
                type="text"
                required="required"
                id="showCaseImageHorizontal"
                value={showCaseImageHorizontal}
                placeholder="Show Case Image Horizontal"
                onChange={(e) => setShowCaseImageHorizontal(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="showCaseImageVertical">
                Show Case Image Vertical
              </label>
              <br />
              <input
                type="text"
                required="required"
                id="showCaseImageVertical"
                value={showCaseImageVertical}
                placeholder="Show Case Image Vertical"
                onChange={(e) => setShowCaseImageVertical(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // // Dynamic category colorKey and options
  // const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  // const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      // categoryOptions,
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
