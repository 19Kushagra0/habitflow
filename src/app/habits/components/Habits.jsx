import styles from "./Habits.module.css";
import Image from "next/image";
import HabbitModal from "../../../components/ui/HabbitModal/HabbitModal";
export default function Habits() {
  return (
    <div className={styles.habitsPage}>
      <div className={styles.habitsPageLeft}>
        <div className={styles.inputHabitContainer}>
          <div className={styles.inputHabitText}>
            <h1>Daily Rituals</h1>
            <span>Consistency is the architect of character.</span>
          </div>
          <div className={styles.habbitOptions}>
            <button className={styles.inputRefineButton}>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z"
                  fill="currentColor"
                />
              </svg>
              <h2>Sort</h2>
            </button>
            <button className={styles.inputHabitButton}>
              +<h2> New Habit</h2>
            </button>
          </div>
        </div>
        <div className={styles.habitsContainer}>
          <div className={styles.habit}>
            <div className={styles.habitImageContainer}>
              <div className={styles.habitImage}></div>
            </div>
            <div className={styles.habitDetail}>
              <h2>Hydration Target</h2>
              <div className={styles.bar}>
                <div className={styles.progress}></div>
              </div>
              <div className={styles.habitDetailText}>
                <span>2.5L / 4.0L</span>
                <span>65% complete</span>
              </div>
            </div>
            <button className={styles.habitTick}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className={styles.habit}>
            <div className={styles.habitImageContainer}>
              <div className={styles.habitImage}></div>
            </div>
            <div className={styles.habitDetail}>
              <h2>Hydration Target</h2>
              <div className={styles.bar}>
                <div className={styles.progress}></div>
              </div>
              <div className={styles.habitDetailText}>
                <span>2.5L / 4.0L</span>
                <span>65% complete</span>
              </div>
            </div>
            <button className={styles.habitTick}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.habitsPageLeftBoxesContainer}>
          <div className={styles.longStreak}>
            <span>Longest Streak</span>
            <h1>42 days</h1>
            <span>Achieved with "Morning Journaling" in Spring 2024</span>
          </div>
          <div className={styles.instractions}>
            <span>Total Interactions</span>
            <h1>1,243</h1>
            <span>Individual habit completions tracked this year</span>
          </div>
        </div>
      </div>
      <div className={styles.habitsPageRight}>
        <div className={styles.insights}>
          <div className={styles.insightsText}>Habit Insights</div>
          <div className={styles.insightsAvg}>
            <div className={styles.insightsComplete}>
              <h1>75%</h1>
              <span>AVG Complete</span>
            </div>
            <div className={styles.insightsIncomplete}>
              <h1>25%</h1>
              <span>AVG Incomplete</span>
            </div>
          </div>
        </div>
        <div className={styles.moodCorrelation}>
          <div className={styles.moodCorrelationText}>
            <h2>Mood Correlation</h2>
            <Image
              width={20}
              height={20}
              src="/icons/moodCorrelation.svg"
              alt="Mood Correlation"
            />
          </div>
        </div>
      </div>
      <HabbitModal />
    </div>
  );
}
