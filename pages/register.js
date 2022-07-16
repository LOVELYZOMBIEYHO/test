import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import RegisterModal from "@/components/RegisterModal";
import Link from "next/link";
import axios from "axios";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";

export default function register({ navbarOptions }) {
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");

  const submitRegister = (e) => {
    e.preventDefault();
    if (password !== passwordconfirm) {
      alert("password not match");
      return;
    }
    axios
      .post(
        `${API_URL}/register`,
        {
          email: email,
          // username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${tokenCode}`,
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
  const hi = (e) => {
    e.preventDefault();
  };
  return (
    <Layout navbarOptions={navbarOptions}>
      {/* <RegisterModal /> */}
      <br />
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form className="text-center" onSubmit={submitRegister}>
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Sign up
              </h1>
              <div className="py-2 text-left text-black">
                <input
                  type="text"
                  required="required"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                />
              </div>
              {/* <div className="py-2 text-left">
                <input
                  type="text"
                  required="required"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Username"
                />
              </div> */}
              <div className="py-2 text-left text-black">
                <input
                  type="password"
                  required="required"
                  id="password"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                />
              </div>
              <div className="py-2 text-left text-black">
                <input
                  type="password"
                  required="required"
                  id="confirm_password"
                  autoComplete="on"
                  value={passwordconfirm}
                  onChange={(e) => setPasswordconfirm(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password Confirm"
                />
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Sign Up /注册
                </button>
              </div>
            </form>
            <div className="text-center">
              {/* <a href="#" className="hover:underline">
                Forgot password?
              </a> */}
            </div>
            <div className="text-center mt-12">
              <span>Already have an account?</span>
              <Link href="/login">
                <a className=" font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic category colorKey and options
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
