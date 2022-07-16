import UseFade from "@/styles/UseFade.module.css";
import Link from "next/link";

export default function LoginModalForm({ submitLogin }) {
  //   Fade out animation
  const fadeOutAni = () => {
    //   data-attribute of html (instead of Class)
    const fadeOutElement = document.querySelector("[data-fadeoutcustom]");

    fadeOutElement.classList.remove(`${UseFade.fadeInCustom}`);
    fadeOutElement.classList.add(`${UseFade.fadeOutCustom}`);
    setTimeout(() => {
      setShow((prev) => !prev);
    }, 1000);
  };
  return (
    //   fade in Tailwind : bg-white opacity-25 rounded-lg shadow-xl hover:opacity-100 transition-opacity duration-500
    //  fade in CSS, UseFade from UseFade.module.css (styles)
    <div
      className={`fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${UseFade.fadeInCustom}`}
      //   data-attribute of html (instead of Class)
      data-fadeoutcustom
    >
      <div className="relative top-10 mx-auto shadow-lg rounded-md bg-white max-w-md">
        {/* <!-- Modal header --> */}
        <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
          <h3>Modal header</h3>
          <button
            onClick={() => {
              //   setShow((prev) => !prev);
              fadeOutAni();
            }}
          >
            x
          </button>
        </div>

        {/* <!-- Modal body --> */}
        <div className="max-h-88 overflow-y-scroll p-4">
          <form className="text-center" onSubmit={submitLogin}>
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Sign in
            </h1>
            <div className="py-2 text-left">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
              />
            </div>
            <div className="py-2 text-left">
              <input
                type="password"
                id="password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
              />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sign In /登入
              </button>
            </div>
          </form>
          <div className="text-center">
            <Link href="/password/reset">
              <a className=" hover:underline">Forgot password?</a>
            </Link>
          </div>
          <div className="text-center mt-12">
            <span>Don't have an account?</span>
            <Link href="/register">
              <a className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">
                Create One
              </a>
            </Link>
          </div>
        </div>

        {/* <!-- Modal footer --> */}
        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setShow((prev) => !prev)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
