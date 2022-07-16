import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from "/config/index";

// Clean cookies with backend JWT
const clear_cookies = () => {
  Cookies.remove("username");
  Cookies.remove("email");
  localStorage.removeItem("icon");

  axios
    .get(`${API_URL}/logout`, {
      withCredentials: true,
      credentials: "include",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  setTimeout(function () {
    window.location.replace("/login");
  }, 500);
};

export { clear_cookies };
