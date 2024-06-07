import React from "react";
import styles from "./styles/card.module.css";
import {
  FaInstagram,
  FaRupeeSign,
  originalCost,
  discountCost,
} from "react-icons/fa";

export default function Card({
  imgurl,
  triplocation,
  originalCost,
  discountCost,
  duration,
  cityTags,
}) {
  return (
    <div className={styles.Main}>
      <div className={styles.outer_div_1}>
        <img src={imgurl} className={styles.bgimg}></img>
        <div className={styles.themes}>
          <p className={styles.theme1}>Adventure</p>
          <p className={styles.theme1}>Nightlife</p>
        </div>
      </div>
      <div className={styles.outer_div_2}>
        <div className={styles.inner_div_1}>
          <p className={styles.tripLocation}>{triplocation}</p>
          <p className={styles.tripDuration}>{duration}</p>
        </div>
        <div className={styles.inner_div_2}>
          <p className={styles.tripPrice1}>₹ {originalCost}/-</p>
          <p className={styles.tripPrice2}>₹ {discountCost}</p>
        </div>
        <div className={styles.inner_div_3}>
          <p>Per Person on twin sharing</p>
        </div>
        <div className={styles.inner_div_4}>
          <p>Hotel included: </p>
          <form className={styles.form1}>
            <input
              type="radio"
              value="4 star"
              name="card"
              id="4_star"
              className={styles.input}
            ></input>
            <label for="4_star" className={styles.labels}>
              4 Star
            </label>
            <input
              type="radio"
              value="5 star"
              name="card"
              id="5_star"
              className={styles.input}
            ></input>
            <label for="5_star" className={styles.labels}>
              5 Star
            </label>
          </form>
        </div>
        <div className={styles.inner_div_5}>
          <p>Cities:</p>
          <p className={styles.cities}>{cityTags}</p>
        </div>
        <div className={styles.inner_div_6}>
          <button className={styles.button1}>View Details</button>
          <button className={styles.button2}>Customize</button>
        </div>
      </div>
    </div>
  );
}
