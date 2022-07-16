import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Videoitemvertical.module.css";
import CategoryLabel from "./CategoryLabel";

export default function VideoitemVertical({ evt, categoryOptions }) {
  return (
    <div className={styles.event}>
      <div className={styles.hoverDiv}>
        <div className={styles.img}>
          <Link href={`/videos/${evt.slug}`}>
            <a>
              <Image
                src={
                  evt.imageLinkVertical
                    ? evt.imageLinkVertical
                    : "/images/event-default.png"
                }
                width={300}
                height={400}
                alt={evt.titleChinese}
                className="rounded"
              />
            </a>
          </Link>
          {/* my version */}
          {/* <div className={styles.playIconContainer}>
            <div className={styles.info}>{evt.titleChinese}</div>
          </div> */}
          {/* sherry version */}
          <div className={styles.nameContainer}>
            <div className={styles.info}>{evt.titleChinese}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
