import React from "react";
import styles from "./styles/bestsellingcard.module.css";

export default function Bestsellingcard() {
  return (
    <div className={styles.main}>
      <p className={styles.p1}>
        Maldives South Palm Resort Package With Flights
      </p>
      <p className={styles.p2}>4 days & 3 nights </p>
      <div className={styles.opts}>
        <div className={styles.price}>
          <p>₹ 73,000</p>
          <p>₹ 96,980</p>
        </div>
        <button className={styles.btn}>View Deal</button>
      </div>
    </div>
  );
}
