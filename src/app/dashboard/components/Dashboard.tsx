import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

import Header from "@/components/ui/Header/Header";

export default function Dashboard() {
  return (
    <div className="">
      <div className={styles.dashboardContainer}>
        <Sidebar />
        {/* <div className={styles.sideBar}>
          <div>
            <h1 className={styles.sideBarTitle}>HabitFlow</h1>
            <h2 className={styles.sideBarSubTitle}>The Mindful Architect</h2>
            <nav className={styles.sideBarNav}>
              <Link className={styles.navLink} href="/dashboard">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.navIcon}
                  fill="none"
                >
                  <path
                    d="M12 12C12 11.4477 12.4477 11 13 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H13C12.4477 20 12 19.5523 12 19V12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 5C4 4.44772 4.44772 4 5 4H8C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20H5C4.44772 20 4 19.5523 4 19V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 5C12 4.44772 12.4477 4 13 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H13C12.4477 8 12 7.55228 12 7V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h1>Dashboard</h1>
              </Link>
              <Link className={styles.navLink} href="/dashboard/habits">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.navIcon}
                >
                  <path
                    d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z"
                    fill="currentColor"
                  />
                </svg>
                <h1>Habits</h1>
              </Link>

              <Link className={styles.navLink} href="/dashboard/insight">
                <svg
                  viewBox="0 0 22 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.navIcon}
                >
                  <path
                    d="M2 17C1.45 17 0.979167 16.8042 0.5875 16.4125C0.195833 16.0208 0 15.55 0 15C0 14.45 0.195833 13.9792 0.5875 13.5875C0.979167 13.1958 1.45 13 2 13C2.1 13 2.1875 13 2.2625 13C2.3375 13 2.41667 13.0167 2.5 13.05L7.05 8.5C7.01667 8.41667 7 8.3375 7 8.2625C7 8.1875 7 8.1 7 8C7 7.45 7.19583 6.97917 7.5875 6.5875C7.97917 6.19583 8.45 6 9 6C9.55 6 10.0208 6.19583 10.4125 6.5875C10.8042 6.97917 11 7.45 11 8C11 8.03333 10.9833 8.2 10.95 8.5L13.5 11.05C13.5833 11.0167 13.6625 11 13.7375 11C13.8125 11 13.9 11 14 11C14.1 11 14.1875 11 14.2625 11C14.3375 11 14.4167 11.0167 14.5 11.05L18.05 7.5C18.0167 7.41667 18 7.3375 18 7.2625C18 7.1875 18 7.1 18 7C18 6.45 18.1958 5.97917 18.5875 5.5875C18.9792 5.19583 19.45 5 20 5C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7C22 7.55 21.8042 8.02083 21.4125 8.4125C21.0208 8.80417 20.55 9 20 9C19.9 9 19.8125 9 19.7375 9C19.6625 9 19.5833 8.98333 19.5 8.95L15.95 12.5C15.9833 12.5833 16 12.6625 16 12.7375C16 12.8125 16 12.9 16 13C16 13.55 15.8042 14.0208 15.4125 14.4125C15.0208 14.8042 14.55 15 14 15C13.45 15 12.9792 14.8042 12.5875 14.4125C12.1958 14.0208 12 13.55 12 13C12 12.9 12 12.8125 12 12.7375C12 12.6625 12.0167 12.5833 12.05 12.5L9.5 9.95C9.41667 9.98333 9.3375 10 9.2625 10C9.1875 10 9.1 10 9 10C8.96667 10 8.8 9.98333 8.5 9.95L3.95 14.5C3.98333 14.5833 4 14.6625 4 14.7375C4 14.8125 4 14.9 4 15C4 15.55 3.80417 16.0208 3.4125 16.4125C3.02083 16.8042 2.55 17 2 17ZM3 6.975L2.375 5.625L1.025 5L2.375 4.375L3 3.025L3.625 4.375L4.975 5L3.625 5.625L3 6.975ZM14 6L13.05 3.95L11 3L13.05 2.05L14 0L14.95 2.05L17 3L14.95 3.95L14 6Z"
                    fill="currentColor"
                  />
                </svg>
                <h1>Insight</h1>
              </Link>
              <Link className={styles.navLink} href="/dashboard/settings">
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.navIcon}
                >
                  <path
                    d="M511.956,308.448L512,206.866l-65.97-7.239c-3.584-12.101-8.323-23.822-14.165-35.037l42.198-52.531l-71.812-71.845 
        L350.48,81.766c-11.115-6.041-22.751-10.987-34.783-14.783l-7.318-66.961H206.797l-7.21,65.973 
        c-11.988,3.556-23.608,8.248-34.726,14.021l-52.475-42.265l-71.938,71.72l41.484,51.825 
        c-6.058,11.109-11.02,22.741-14.831,34.763L0.134,203.29L0,304.872l65.963,7.295 
        c3.573,12.101,8.301,23.826,14.135,35.049L37.856,399.71l71.751,71.907l51.807-41.507 
        c11.112,6.052,22.744,11.008,34.769,14.815l7.261,66.966l101.582,0.088l7.266-65.967 
        c12.1-3.578,23.826-8.313,35.043-14.149l52.513,42.22l71.876-71.783l-41.529-51.788 
        c6.046-11.112,10.997-22.747,14.8-34.777L511.956,308.448z 
        M256.021,347.705c-50.659,0-91.727-41.068-91.727-91.727s41.068-91.727,91.727-91.727 
        c50.659,0,91.727,41.068,91.727,91.727S306.681,347.705,256.021,347.705z"
                    fill="currentColor"
                  />
                </svg>
                <h1>Settings</h1>
              </Link>
              <Link className={styles.navLink} href="/dashboard/profile">
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.navIcon}
                >
                  <path
                    d="M16 17c0-2.8-2.4-5-6-5s-6 2.2-6 5c0 .6.4 1 1 1h10c.6 0 1-.4 1-1zM10 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                    fill="currentColor"
                  />
                </svg>
                <h1>profile</h1>
              </Link>
            </nav>
          </div>

          <div className={styles.toogleMode}>
            <Link className={styles.navLink} href="/dashboard">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.navIcon}
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                  fill="currentColor"
                />
              </svg>
              <h1>Theme</h1>
            </Link>
          </div>
        </div> */}
        <div className={styles.mainContent}>
          <Header />
        </div>
      </div>
    </div>
  );
}
