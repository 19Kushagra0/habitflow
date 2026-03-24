import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <div className={styles.headerTitle}>
          <div className={styles.hamburger}>
            <Image
              src="/icons/hamburger.svg"
              alt="Hamburger"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </div>
          <h1 className={styles.headerTitle}>HabitFlow</h1>
          <h2 className={styles.headerSubTitle}>The Mindful Architect</h2>
        </div>
        <h1 className={styles.headerGreeting}>Welcome, User</h1>
      </div>

      <div className={styles.headerOptions}>
        {/* <div className={styles.headerOption}>
          <Image
            src="/icons/Notification.svg"
            alt="Notification"
            width={14}
            height={14}
          />
        </div> */}
        <div>
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
