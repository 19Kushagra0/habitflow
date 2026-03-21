import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerGreeting}>Welcome, User</h1>
      <div className={styles.headerOptions}>
        <div className={styles.headerOption}>
          <Image src="/icons/Search.svg" alt="Search" width={18} height={18} />
        </div>
        <div className={styles.headerOption}>
          <Image
            src="/icons/Notification.svg"
            alt="Notification"
            width={16}
            height={20}
          />
        </div>
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
