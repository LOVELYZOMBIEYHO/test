import Link from "next/link";
import Search from "./Search";
import Headerstyles from "@/styles/Header.module.css";
import React from "react";

import Navbar from "./Navbar";
export default function Header({ fixed, navbarOptions }) {
  return (
    // <header className={Headerstyles.header}>
    <header>
      <Navbar navbarOptions={navbarOptions} />
    </header>
  );
}

// ----------------------------------------------------------
