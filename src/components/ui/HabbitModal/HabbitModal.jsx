import React from "react";
import styles from "./HabbitModal.module.css";
import Image from "next/image";

export default function HabbitModal() {
  return (
    <div className={styles.createHabbitModalContainer}>
      <div className={styles.createHabbitModal}>
        <div className={styles.modalHeader}>
          <h1>Create New Habit</h1>
          <button>
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
        {/* <div className={styles.category}>
          <span>Category & Icon</span>
          <div className={styles.categoryWrapper}>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
            <div className={styles.categoryIcon}>
              <div className={styles.icon}></div>
              <p>WATER</p>
            </div>
          </div>
        </div> */}
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
              <button className={styles.daily}>daily</button>
              <button className={styles.weekly}>weekly</button>
            </div>
          </div>
          <div className={styles.goal}>
            <span>Daily Goal</span>
            <div className={styles.goalWrapper}>
              <input type="text" />
              <select>
                <option> Times</option>
                <option> Minutes</option>
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
          <div className={styles.time}>08:00 AM</div>
        </div>
        <div className={styles.notes}>
          <span>Personal Intent (Notes)</span>
          <textarea placeholder="Why is this habit important to you?"></textarea>
        </div>
        <div className={styles.modalButton}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.submit}>Create Habit</button>
        </div>
      </div>
    </div>
  );
}
