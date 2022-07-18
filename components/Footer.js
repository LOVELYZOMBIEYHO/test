import Link from "next/link";
import Footerstyles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={Footerstyles.footer}>
      <p>Copyright &copy; Jseedav 2022</p>
      <p>
        <Link href="/about">關於這個網站</Link>
      </p>
    </footer>
  );
}
