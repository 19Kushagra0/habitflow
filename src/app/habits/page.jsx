import Habits from "./components/Habits";
import styles from "@/app/dashboard/components/Dashboard.module.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Header from "@/components/ui/Header/Header";

export default function page() {
  return (
    <div className={styles.dashboardPage}>
      <Header />
      <div className={styles.dashboardContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Habits />
        </div>
      </div>
    </div>
  );
}
