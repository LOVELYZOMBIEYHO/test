import Link from "next/link";
import Footerstyles from "@/styles/Footer.module.css";
import Image from "next/image";

export default function Footer({ navbarOptions }) {
  return (
    <footer className={Footerstyles.footer}>
      <div className={Footerstyles.one}>
        <Image
          className="w-14 h-14"
          // src="/images/website-logo.png"
          // src="https://i.imgur.com/rr8M6Xn.jpg"
          src={navbarOptions[0].brandIconUrl}
          width={120}
          height={50}
          alt={navbarOptions[0].brandName}
        />
        <p>Copyright &copy; Jseedav 2022</p>
      </div>
      <div className={Footerstyles.two}>
        <p>關於</p>
        <Link href="/about">關於這個網站</Link>
        <div>投放廣告</div>
      </div>
      <div className={Footerstyles.three}>
        <p>服務條款</p>
        <Link href="/dmca">DMCA</Link>
      </div>
    </footer>
  );
}
