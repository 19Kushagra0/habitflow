import styles from "./Dashboard.module.css";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.status}>
        <div className={styles.statusBox}>
          <div className={styles.statusRow}>
            <h2>CURRENT STREAK</h2>
            <Image src="/icons/fire.svg" alt="fire" width={16} height={18} />
          </div>
          <div className={styles.statusRow}>
            <h2>
              <span>14</span> Days
            </h2>
          </div>
          <div className={` justify-start!  ${styles.statusRow} `}>
            <Image src="/icons/up.svg" alt="up" width={11} height={7} />
            <span>20% increase from last week</span>
          </div>
        </div>
        <div className={styles.statusBox}>
          <div className={styles.statusRow}>
            <h2 className="mr-[7px]">AVG. COMPLETION</h2>
            <Image
              src="/icons/thunder.svg"
              alt="thunder"
              width={16}
              height={18}
            />
          </div>
          <br />

          <div className={styles.statusRow}>
            <h2>
              <span className="mr-[8px]"> 88</span>%
            </h2>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.completionBar}>
              <div className={styles.progress}></div>
            </div>
          </div>
        </div>
        <div className={styles.statusBox}>
          <div className={styles.statusRow}>
            <h2>TRENDING MOOD</h2>
            <Image src="/icons/fire.svg" alt="fire" width={16} height={18} />
          </div>
          <div className={styles.statusRow}>
            <h2>
              <span>Stable</span>
            </h2>
          </div>
          <div className={styles.statusRow}>
            <span>Consistent mindful patterns detected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
