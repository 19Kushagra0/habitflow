import styles from "./HabbitModal.module.css";
import Image from "next/image";
import { useState } from "react";

export default function HabbitModal({ setHabbitModal }) {
  const [frequency, setFrequency] = useState("daily");
  const [days, setDays] = useState("mon");
  return (
    <div className={styles.createHabbitModalContainer}>
      <div className={styles.createHabbitModal}>
        <div className={styles.modalHeader}>
          <h1>Create New Habit</h1>
          <button onClick={() => setHabbitModal(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className={styles.habitName}>
          <h1>Habit Name</h1>
          <input placeholder="e.g. Drink Water" type="text" />
        </div>
        <div className={styles.category}>
          <span>Category</span>

          <select className={styles.select}>
            <option value="">Select Category</option>
            <option value="water">WATER</option>
            <option value="fitness">FITNESS</option>
            <option value="reading">READING</option>
            <option value="meditation">MEDITATION</option>
            <option value="coding">CODING</option>
            <option value="sleep">SLEEP</option>
            <option value="diet">DIET</option>
            <option value="study">STUDY</option>
            <option value="work">WORK</option>
            <option value="other">OTHER</option>
          </select>
        </div>
        <div className={styles.goalContainer}>
          <div className={styles.frequency}>
            <span> FREQUENCY</span>
            <div className={styles.frequencyWrapper}>
              <button
                onClick={() => setFrequency("daily")}
                className={frequency === "daily" ? styles.frequencyActive : ""}
              >
                Daily
              </button>
              <button
                onClick={() => setFrequency("weekly")}
                className={frequency === "weekly" ? styles.frequencyActive : ""}
              >
                Weekly
              </button>
            </div>
          </div>
          <div className={styles.goal}>
            <span>Daily Goal</span>
            <div className={styles.goalWrapper}>
              <input type="number" min="1" placeholder="0" />
              <select>
                <option value="times">Times</option>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="pages">Pages</option>
                <option value="km">Kilometers</option>

                {/* New Additions Recommended */}
                <option value="liters">Liters</option>
                <option value="glasses">Glasses</option>
                <option value="steps">Steps</option>
                <option value="calories">Calories</option>
                <option value="chapters">Chapters</option>
                <option value="pomodoros">Pomodoros</option>
                <option value="tasks">Tasks</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.reminder}>
          <div className={styles.reminderHeader}>
            <Image
              src="/icons/Notification.svg"
              alt="bell"
              width={15}
              height={15}
              className={styles.icon}
            />
            <div>
              <span>Daily Reminder</span>
              <p>We'll nudge you to stay on track</p>
            </div>
          </div>
          <input
            type="time"
            className={styles.time} // You'll need to style this slightly
            defaultValue="08:00"
          />
        </div>

        {frequency === "weekly" && (
          <div className={styles.days}>
            <span className={styles.daysLabel}>Repeat On</span>

            <div className={styles.daysWrapper}>
              <button
                type="button"
                className={days === "mon" ? styles.dayActive : styles.day}
                onClick={() => setDays("mon")}
              >
                Mon
              </button>
              <button
                type="button"
                className={days === "tue" ? styles.dayActive : styles.day}
                onClick={() => setDays("tue")}
              >
                Tue
              </button>
              <button
                type="button"
                className={days === "wed" ? styles.dayActive : styles.day}
                onClick={() => setDays("wed")}
              >
                Wed
              </button>
              <button
                type="button"
                className={days === "thu" ? styles.dayActive : styles.day}
                onClick={() => setDays("thu")}
              >
                Thu
              </button>
              <button
                type="button"
                className={days === "fri" ? styles.dayActive : styles.day}
                onClick={() => setDays("fri")}
              >
                Fri
              </button>
              <button
                type="button"
                className={days === "sat" ? styles.dayActive : styles.day}
                onClick={() => setDays("sat")}
              >
                Sat
              </button>
              <button
                type="button"
                className={days === "sun" ? styles.dayActive : styles.day}
                onClick={() => setDays("sun")}
              >
                Sun
              </button>
            </div>
          </div>
        )}

        <div className={styles.notes}>
          <span>Personal Intent (Notes)</span>
          <textarea
            placeholder="Why is this habit important to you?"
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height =
                Math.min(e.target.scrollHeight, 200) + "px";
            }}
          ></textarea>
        </div>
        <div className={styles.modalButton}>
          <button
            onClick={() => setHabbitModal(false)}
            className={styles.cancel}
          >
            Cancel
          </button>
          <button className={styles.submit}>Create Habit</button>
        </div>
      </div>
    </div>
  );
}
