import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Categoryshowcase.module.css";
import CategoryLabel from "./CategoryLabel";

export default function CategoryShowCase({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.hoverDiv}>
        <div className={styles.img}>
          <Image
            src={evt.showCaseImageHorizontal}
            width={670}
            height={400}
            alt={evt.chiName}
            className="rounded"
          />

          <Link href={`/videos/search/${evt.chiName}`}>
            <a>
              <div className={styles.playIconContainer}>
                <span className={styles.cateAndTagsShowCaseDiv}>
                  <span className={`${styles.cateAndTagsName}`}>
                    {evt.chiName}
                  </span>
                  <span className={`${styles.howManyVideosSpan}`}>
                    {evt.cateCountVideosQuantity}部影片
                  </span>
                </span>
                {/* ---------- */}

                {/* ------------ */}
              </div>
            </a>
          </Link>
        </div>

        {/* <div className={styles.info}>{"evt.titleChinese"}</div> */}
      </div>
    </div>
  );
}
