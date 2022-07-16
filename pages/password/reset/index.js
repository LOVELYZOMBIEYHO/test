import { useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";

export default function requestresetpassword({ navbarOptions }) {
  const [email, setEmail] = useState("");

  const requestReset = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/password/forget`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${tokenCode}`,
          },
        }
      )
      .then(function(response) {
        console.log(response);
        alert(response.data);
      })
      .catch(function(error) {
        // console.log(error);
        // console.log(error.response.data);
        alert(error.response.data);
      });
  };

  return (
    <Layout navbarOptions={navbarOptions}>
      <div className="mb-5 flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form className="col-start-2 col-span-4" onSubmit={requestReset}>
            <br />
            <h1 className="text-center">忘記密碼</h1>
            <br />

            <label htmlFor="EmailReset">Email</label>
            <br />
            <input
              type="email"
              id="EmailReset"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="請輸入你的電郵地址"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            />

            <br />

            <br />
            <button
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none text-center"
              type="submit"
            >
              提交
            </button>
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
