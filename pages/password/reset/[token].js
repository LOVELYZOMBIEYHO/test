import { useState } from "react";
import Layout from "@/components/Layout";
import axios from "axios";
import { API_URL } from "@/config/index";
import { revalidateTimeVariable } from "@/config/index";

import { useRouter } from "next/router";

export default function resetpassword({ navbarOptions }) {
  const router = useRouter();
  // router query get Name must be same as [token].js
  const { token } = router.query;
  console.log({ router });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requestReset = (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}/password/reset`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
        alert(error.response.data);
      });
  };

  return (
    <Layout navbarOptions={navbarOptions}>
      <br />
      <br />
      <br />
      <div className="mx-auto w-full max-w-[550px]">
        <form className="col-start-2 col-span-4" onSubmit={requestReset}>
          <br />
          <h1 className="text-center">重設密碼</h1>
          <br />

          <label htmlFor="Email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            placeholder="請輸入你的電郵地址"
          />
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md text-black"
            placeholder="請輸入你想更改的密碼"
          />
          <br />
          <br />
          <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none text-center"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

//  ServerSide Rendering
export async function getServerSideProps() {
  // const resCategoryOptions = await fetch(`${API_URL}/categoryoptions`);
  // const categoryOptions = await resCategoryOptions.json();

  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();

  return {
    props: {
      // categoryOptions,
      navbarOptions,
    },
  };
}
