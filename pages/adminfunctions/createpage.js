import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import TagsInput from "@/components/TagsInput";
import { API_URL } from "/config/index";
import { revalidateTimeVariable } from "@/config/index";
import Cookies from "js-cookie";
import axios from "axios";
import format from "format-duration";

export default function createpage({ navbarOptions }) {
  let tokenCode = Cookies.get("Authorization");

  const [titleChinese, setTitleChinese] = useState("");
  const [titleJapanese, setTitleJapanese] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [previewVideoLink, setPreviewVideoLink] = useState("");
  const [slug, setSlug] = useState("");
  const [imageLinkVertical, setImageLinkVertical] = useState("");
  const [imageLinkHorizontal, setImageLinkHorizontal] = useState("");
  const [series, setSeries] = useState("");
  const [categoryEng, setCategoryEng] = useState("JapAV");
  const [categoryChi, setCategoryChi] = useState("日本AV");
  const [categoryJap, setCategoryJap] = useState("日本AV");

  const [avcode, setAvcode] = useState("");
  const [companyPublished, setCompanyPublished] = useState("");
  // Actress with tags
  const [actressValue, setActressValue] = "";
  const [actress, setActress] = useState([]);

  const [idCount, setIdCount] = useState("");
  const [officialPublishedDate, setOfficialPublishedDate] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  // Tags
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const tokenJWT = Cookies.get("AT");

  // const [searchTagsArray, setSearchTagsArray] = useState([]);

  // Category options from MongoDB
  // const [categoryOptionsEng, setCategoryoptionsEng] = useState([]);
  // const [categoryOptionsChi, setCategoryoptionsChi] = useState([]);
  // const [categoryOptionsJap, setCategoryoptionsJap] = useState([]);
  const [categoryOptions, setCategoryoptions] = useState([]);
  useEffect(() => {
    async function getCategoryOptionsAndPostId() {
      const resultsCategoryOptions = await axios(`${API_URL}/categoryoptions`);
      const resultsIdCount = await axios(`${API_URL}/videosidcount`);

      setCategoryoptions(resultsCategoryOptions.data);
      try {
        // auto increment
        setIdCount(resultsIdCount.data[0].idCount + 1);
      } catch {
        setIdCount("1");
      }
    }
    getCategoryOptionsAndPostId();
  }, []);

  // ---------Get category options by hard code, not use database-----------------------------------------------------
  // // Need to add ID to avoid error: Each child in a list should have a unique "key" prop.
  // const categoryOptions = [
  //   {
  //     label: "cosplay",
  //     id: "1",
  //     value: "cosplay",
  //   },

  //   {
  //     label: "hanime",
  //     id: "2",
  //     value: "hanime",
  //   },
  // ];
  // --------------------------------------------------------------
  const submitApplication = (e) => {
    e.preventDefault();

    // Date time function
    const date = new Date();
    // const [month, day, year] = [
    //   date.getMonth(),
    //   date.getDate(),
    //   date.getFullYear(),
    // ];
    // const [hour, minutes, seconds] = [
    //   date.getHours(),
    //   date.getMinutes(),
    //   date.getSeconds(),
    // ];

    axios
      .post(
        `${API_URL}/post`,
        {
          titleChinese: titleChinese,
          titleJapanese: titleJapanese,
          titleEnglish: titleEnglish,
          description: description,
          videoLink: videoLink,
          previewVideoLink: previewVideoLink,
          slug: slug,
          imageLinkVertical: imageLinkVertical,
          imageLinkHorizontal: imageLinkHorizontal,
          series: series,
          category: {
            slug: categoryEng,
            id: categoryEng,
            categoryChi: categoryChi,
            categoryEng: categoryEng,
            categoryJap: categoryJap,
          },
          avcode: avcode,
          companyPublished: companyPublished,
          actress: actress,
          idCount: parseInt(idCount),
          officialPublishedDate: officialPublishedDate,
          videoDurationHour: format(parseInt(videoDuration)),
          videoDurationForCompare: parseInt(videoDuration),
          tags: tags,
          addedDate: date,
          viewCount: parseInt(0),
          // searchTags: [
          //   titleChinese,
          //   titleJapanese,
          //   titleEnglish,
          //   slug,
          //   series,
          //   categoryChi,
          //   categoryEng,
          //   categoryJap,
          //   avcode,
          //   companyPublished,
          //   actress,
          //   tags,
          // ],

          searchTagsBigram:
            titleChinese +
            titleJapanese +
            titleEnglish +
            slug +
            series +
            categoryChi +
            categoryEng +
            categoryJap +
            avcode +
            companyPublished +
            actress +
            tags,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenJWT}`,

            // access_token_cookie,
            // Authorization: "Bearer <access_token>"

            // withCredentials: true,
            // credentials: "include",
          },
        }
      )
      .then(function(response) {
        // console.log(response);
        alert(response.data);
      })
      .catch(function(error) {
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
            <h1 className="text-center">建立影片</h1>

            <div className="mb-5">
              <label htmlFor="TitleChinese">Title Chinese</label>
              <input
                type="text"
                id="titleChinese"
                value={titleChinese}
                placeholder="Title Chinese"
                onChange={(e) => setTitleChinese(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="TitleJapanese">Title Japanese</label>
              <input
                type="text"
                id="titleJapanese"
                value={titleJapanese}
                placeholder="Title Japanese"
                onChange={(e) => setTitleJapanese(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="TitleEnglish">Title English</label>
              <input
                type="text"
                id="titleEnglish"
                value={titleEnglish}
                placeholder="Title English"
                onChange={(e) => setTitleEnglish(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="VideoLink">Video Link</label>
              <br />
              <input
                type="text"
                required="required"
                id="videoLink"
                value={videoLink}
                placeholder="Video Link"
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="PreviewVideoLink">Preview Video Link</label>
              <br />
              <input
                type="text"
                id="previewVideoLink"
                value={previewVideoLink}
                placeholder="Preview Video Link"
                onChange={(e) => setPreviewVideoLink(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Slug">Slug</label>
              <br />
              <input
                required="required"
                type="text"
                id="slug"
                value={slug}
                placeholder="Slug"
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="ImageLinkVertical">Image Link Vertical</label>
              <br />
              <input
                type="text"
                required="required"
                id="imageLink"
                value={imageLinkVertical}
                placeholder="Image Link Vertical"
                onChange={(e) => setImageLinkVertical(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="ImageLinkHorizontal">Image Link Horizontal</label>
              <br />
              <input
                type="text"
                required="required"
                id="imageLink"
                value={imageLinkHorizontal}
                placeholder="Image Link Horizontal"
                onChange={(e) => setImageLinkHorizontal(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="series">Series</label>
              <br />
              <input
                type="text"
                id="series"
                value={series}
                placeholder="Series"
                onChange={(e) => setSeries(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Category">Category</label>
              <br />
              <select
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={categoryChi}
                onChange={(e) => {
                  setCategoryChi(e.target.value);
                }}
              >
                {categoryOptions.map((option) => (
                  <option key={option.id} value={option.chiName}>
                    {option.chiName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="Category">Category</label>
              <br />
              <select
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={categoryEng}
                onChange={(e) => {
                  setCategoryEng(e.target.value);
                }}
              >
                {categoryOptions.map((option) => (
                  <option key={option.id} value={option.engName}>
                    {option.engName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="Category">Category</label>
              <br />
              <select
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={categoryJap}
                onChange={(e) => {
                  setCategoryJap(e.target.value);
                }}
              >
                {categoryOptions.map((option) => (
                  <option key={option.id} value={option.japName}>
                    {option.japName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="avcode">Av Code</label>
              <br />
              <input
                type="text"
                id="avcode"
                value={avcode}
                placeholder="Av Code"
                onChange={(e) => setAvcode(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="companypublished">Company Published</label>
              <br />
              <input
                type="text"
                id="companypublished"
                value={companyPublished}
                placeholder="Company Published"
                onChange={(e) => setCompanyPublished(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="actress">Actress</label>
              <br />
              <TagsInput
                tags={actress}
                setTags={setActress}
                value={value}
                setValue={setValue}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="idcount">Id Count</label>
              <br />
              <input
                required="required"
                type="number"
                id="idcount"
                value={idCount}
                placeholder="Id Count"
                onChange={(e) => setIdCount(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="officialpublisheddate">
                Official Published Date
              </label>
              <br />
              <input
                type="date"
                id="avcode"
                value={officialPublishedDate}
                placeholder="Official Published Date"
                onChange={(e) => setOfficialPublishedDate(e.target.value)}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="videoduration">Video Duration</label>
              <br />
              <br />
              <p>1000是 一秒， 60000是 一分鐘， 3600000是 一小時</p>
              <br />
              <input
                type="number"
                id="videoduration"
                value={videoDuration}
                placeholder="輸入影片長度"
                onChange={(e) => setVideoDuration(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="Tags">Tags</label>
              <br />
              <TagsInput
                tags={tags}
                setTags={setTags}
                value={value}
                setValue={setValue}
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
