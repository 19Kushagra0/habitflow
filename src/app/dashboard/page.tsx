import styles from "./components/Dashboard.module.css";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Header from "@/components/ui/Header/Header";
import Dashboard from "./components/Dashboard";

export default function page() {
  return (
    <div className="">
      <div className={styles.dashboardContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
