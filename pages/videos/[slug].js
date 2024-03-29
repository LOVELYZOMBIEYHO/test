import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import VideoPlaylistWrapper from "@/components/VideoPlaylistWrapper";
import VideoInfoWrapper from "@/components/VideoInfoWrapper";
import AdpostA from "@/components/AdpostA";
import AdpostB from "@/components/AdpostB";
import AdpostC from "@/components/AdpostC";
// import AdpostD from "@/components/AdpostD";

import VideoitemHorizontalWithHover from "@/components/VideoitemHorizontalWithHover";
import VideoitemVertical from "@/components/VideoitemVertical";

import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";
import styles from "@/styles/Slug.module.scss";
import axios from "axios";
// import ReactPlayer from "react-player";
// prevent Hydration error https://stackoverflow.com/questions/72235211/trying-to-use-react-player-throws-a-hydration-error
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// Only loads the YouTube player
// import ReactPlayer from 'react-player/youtube'

import Markdown from "markdown-to-jsx";
import Seo from "@/components/Seo";
import Seopage from "@/components/Seopage";

import countapi from "countapi-js";

import VideoComment from "@/components/VideoComment";
import BtnSwitchComment from "@/components/BtnSwitchComment";
// import CommentTypeBlock from "@/components/CommentTypeBlock";
import VideoRelatedDiv from "@/components/VideoRelatedDiv";

export default function PostPage({
  posts,
  navbarOptions,
  categoryOptions,
  postsRecommand,
}) {
  // //useRouter for check my url query
  // const router = useRouter();
  // const querySearch = router.query;
  // console.log(querySearch);

  // countapi
  //   .visits("jseedav.com/", "579eb421-d702-490a-bfd7-35e38f1126f2")
  //   .then((result) => {
  //     console.log(result.value);
  //   });

  // CountAPI
  // axios.get(
  //   `https://api.countapi.xyz/hit/jseedav.com/:PATHNAME:${posts[0].idCount}`
  // );

  const countAPIHitRequest = async () => {
    try {
      const resp = await axios.get(
        `https://api.countapi.xyz/hit/jseedav.com/:PATHNAME:${posts[0].idCount}`
      );
      // console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  countAPIHitRequest();
  // -------------------
  // post Is Object
  const post = posts[0];
  const postId = post.idCount;

  // console.log(post);
  //  Since the Backend output the data of full series, the post[0] which is the first search by slug must be excluded.  Means posts[1]- posts[i]
  // Copy "posts" array (not Object) to "postSeries",  can't use: const postSeries = posts
  const postSeries = Array.from(posts);

  //  Only splice array[0]
  postSeries.splice(0, 1);

  // console.log(posts);
  // console.log(post);
  // console.log(postSeries);
  const MyParagraph = ({ children, ...props }) => (
    <div {...props}>{children}</div>
  );
  // ---------Dynamic show comment block in different place based on width--------------------

  // assign a number(any number is ok)
  const [isDesktop, setDesktop] = useState(null);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 650);
  // };
  const updateMedia = () => {
    setDesktop(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    // console.log("width", window.innerWidth);
    // console.log(isDesktop);
    setDesktop(window.innerWidth);
    // return () => setDesktop(window.innerWidth);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  // --------------------------------------

  // -------Switch Comment------
  const [switchRelatedVideos, setSwitchRelatedVideos] = useState(true);
  const [switchComment, setSwitchComment] = useState(false);

  // console.log(posts[0].idCount);
  return (
    <Layout navbarOptions={navbarOptions}>
      <Seo evt={posts} />
      {/* <Seopage evt={posts} /> */}

      {/* <div className={styles.event}>
        <div className={styles.image}>
          <Image
            src={evt.imageLink ? evt.imageLink : "/image/event-default.png"}
            width={2260}
            height={1000}
            alt={evt.title}
          />
        </div>

        <hr />
        <div className={styles.emptyBox}></div>
        <div className={styles.heroTitle}>
          <h1>{evt.title}</h1>
        </div>
        <div className={styles.categoryBox}>
          <h1>Tag:</h1>
          <p>{evt.tag}</p>
          <h1>Content:</h1>
        </div>

        <div className={styles.contentBox}>
          <Link href="/videos">
            <a className={styles.back}>{"<"}Go Back</a>
          </Link>
        </div>
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <div className={styles.slugcontainer}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="text-center col-span-2 ...">
              {/* <div>
                <ReactPlayer
                  className="max-w-2xl mx-auto"
                  url={post.videoLink}
                  // url="https://video.gumlet.io/62d62a0175437486ca546bd4/62d62a03c057787d3fdde07d/main.m3u8"
                  width="100%"
                  height={400}
                  controls={true}
                />
              </div> */}
              {/* Bunnycdn */}
              <iframe
                style={{ width: "100%", aspectRatio: 1200 / 675 }}
                // src="https://api.gumlet.com/v1/video/embed/62d62a03c057787d3fdde07d?autoplay=false&start_high_res=true"
                src={post.videoLink}
                title={post.titleChinese}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // sandbox="allow-forms allow-scripts allow-same-origin"
              ></iframe>

              <br />

              {/* ------ */}
              {/* <iframe
                src="https://drive.google.com/file/d/1SpC6MJLpIlZeG9yxhWyQYgkVjBsGj1NJ/preview"
                width="700"
                height="480"
                allow="autoplay"
              ></iframe> */}
              <VideoInfoWrapper postId={postId} posts={posts} />
              {/* --------Dynamic show comment block in different place based on width------------ */}
              {(() => {
                if (isDesktop > 1023) {
                  return (
                    <div>
                      <BtnSwitchComment
                        switchRelatedVideos={switchRelatedVideos}
                        setSwitchRelatedVideos={setSwitchRelatedVideos}
                        switchComment={switchComment}
                        setSwitchComment={setSwitchComment}
                      />

                      {switchRelatedVideos ? (
                        <>
                          {postsRecommand.map((evt) => (
                            <VideoitemVertical
                              key={Object.values(evt.slug)}
                              evt={evt}
                              categoryOptions={categoryOptions}
                            />
                          ))}
                        </>
                      ) : (
                        ""
                      )}

                      {switchComment ? (
                        <div>
                          {/* <CommentTypeBlock /> */}
                          <VideoComment />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                } else if (isDesktop <= 1023) {
                  return <></>;
                }
              })()}
            </div>

            {/* <div className="text-center ...">05</div> */}
            <div className="text-center ...">
              <AdpostA />

              <VideoPlaylistWrapper post={post} postSeries={postSeries} />
            </div>
          </div>
        </div>
      </div>
      {/* --------Dynamic show comment block in different place based on width------------ */}

      {/* {isDesktop ? <div></div> : <VideoRelatedComment />} */}
      {(() => {
        if (isDesktop > 1023) {
          return <></>;
        } else if (isDesktop <= 1023) {
          return (
            <div>
              <BtnSwitchComment
                switchRelatedVideos={switchRelatedVideos}
                setSwitchRelatedVideos={setSwitchRelatedVideos}
                switchComment={switchComment}
                setSwitchComment={setSwitchComment}
              />
              {/* {switchRelatedVideos ? <VideoRelatedDiv /> : ""} */}
              {switchRelatedVideos ? (
                <>
                  {postsRecommand.map((evt) => (
                    <VideoitemVertical
                      key={Object.values(evt.slug)}
                      evt={evt}
                      categoryOptions={categoryOptions}
                    />
                  ))}
                </>
              ) : (
                ""
              )}

              {switchComment ? (
                <div>
                  {/* <CommentTypeBlock /> */}
                  <VideoComment />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        }
      })()}
      {/* ----------------------------------------------------- */}

      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://cdn.pixabay.com/photo/2022/06/18/21/40/strasbourg-7270721_1280.jpg"
              alt="Man looking at item at a store"
            />
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            1
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            2
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            3
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
            4
          </div>
        </div>
      </div> */}
      {/* -------- */}
      <AdpostB />
      <AdpostC />
      {/* <AdpostD /> */}
      {/* ---------- */}
    </Layout>
  );
}

// ---------------------------
// //  ServerSide Rendering
// export async function getServerSideProps({ query: { slug } }) {
//   console.log(slug);
//   const res = await fetch(`${API_URL}/post/${slug}`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// // ---Incremental Static Regeneration(ISR) https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration----------

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// -------------------
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/post/${slug}`);
  const posts = await res.json();

  // Random post for recommand
  const resPostRecommand = await fetch(`${API_URL}/postrandomrecommand`);
  const postsRecommand = await resPostRecommand.json();

  // Dynamic category colorKey and options
  const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  const categoryOptions = await resCategoryOptions.json();

  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  // // Dynamic add pageview to MongoDB
  // const updateDBViewCount = await posts[0].idCount;

  // const resUpdateDBViewCount = await fetch(
  //   `https://api.countapi.xyz/get/jseedav.com/:PATHNAME:${updateDBViewCount}`
  // );
  // const resUpdateDBViewCountJson = await resUpdateDBViewCount.json();
  // const requestForUpdateDBViewCount = await fetch(`${API_URL}/pageviewcount`);
  // const gi = await console.log(resUpdateDBViewCountJson.value);

  return {
    props: {
      posts,
      categoryOptions,
      navbarOptions,
      postsRecommand,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
// 求其PICK 一個POST 作為首次RENDER 的POST， 若可行，可npm run build & start （可在FLASK 後台測試有沒有每次更新F5 都會FETCH DATA

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
export async function getStaticPaths() {
  // this URL is created specifically for fetch first time of ISR
  const res = await fetch(`${API_URL}/postforisrfirst`);
  // const res = await fetch(`${API_URL}/post`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
// -------------------------
