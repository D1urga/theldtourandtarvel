import React from "react";
import styles from "./styles/bestsellingcard.module.css";

export default function Bestsellingcard({
  destinatioName,
  duration,
  originalCost,
  discountCost,
  bgimg,
}) {
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${bgimg})` }}>
      <p className={styles.p1}>{destinatioName}</p>
      <p className={styles.p2}>{duration}</p>
      <div className={styles.opts}>
        <div className={styles.price}>
          <p>₹ {originalCost}</p>
          <p>₹ {discountCost}</p>
        </div>
        <button className={styles.btn}>View Deal</button>
      </div>
      {/* <img security={bgimg} className={styles.bg}></img> */}
    </div>
  );
}
