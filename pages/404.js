import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { revalidateTimeVariable } from "@/config/index";
import { API_URL } from "@/config/index";

// 不用打if XXX page 不在才顯示404, nextjs 直接幫你做,因此只需在pages中打404.js便行, 第2,function 後不能跟數字,因此寫NotFoundPage(自定)

export default function NotFoundPage({ navbarOptions }) {
  return (
    <Layout navbarOptions={navbarOptions}>
      <Head>
        <title>Page not found</title>
      </Head>
      <br />
      <br />
      <br />
      <br />
      <br />
      <span className={styles.icon}>
        <FaExclamationTriangle className="text-red-600 transform scale-150" />
      </span>
      <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Dynamic navbar options
  const resNavbarOptions = await fetch(`${API_URL}/navbardynamic`);
  const navbarOptions = await resNavbarOptions.json();
  return {
    props: {
      navbarOptions,
    },
    // Please change config -> index.js option, it needs to be changed to Int
    revalidate: parseInt(revalidateTimeVariable), // In seconds
  };
}
