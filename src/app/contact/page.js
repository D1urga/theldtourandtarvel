import React from "react";
import styles from "./contact.module.css";

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <div>
            {" "}
            <p className={styles.p1}>opening hours</p>
            <p className={styles.p2}>monday - friday</p>
            <p className={styles.p2}>9am - 5pm</p>{" "}
            <p className={styles.p2}>weekend</p>
            <p className={styles.p2}>closed</p>
          </div>
          <div>
            {" "}
            <p className={styles.p1}>address</p>
            <p className={styles.p2}>lhambra, CA 91801.</p>
            <p className={styles.p2}> 329 Saxon Street. San Francisco,</p>{" "}
            <p className={styles.p2}> CA 94109. 465 Littleton Street</p>
          </div>{" "}
          <div>
            {" "}
            <p className={styles.p1}>support</p>
            <p className={styles.p2}>help@gmail.com</p>
            <p className={styles.p2}>+61 21 6339-0806</p>{" "}
          </div>
        </div>
        <div className={styles.div2}>
          <p className={styles.p3}>contact us</p>
          <p className={styles.p4}>
            feel free to contact us and we will get back to you as soon as we
            can
          </p>
          <input
            className={styles.input}
            placeholder="name .. ex a.chaudhary"
          ></input>
          <input
            className={styles.input}
            placeholder="email .. ex email@gmail.com"
          ></input>
          <input
            className={styles.input}
            placeholder="phone .. ex 6396#####"
          ></input>
          <textarea
            className={styles.input1}
            placeholder="write your message here"
          ></textarea>
          <button className={styles.btn}>send</button>
        </div>
      </div>
    </div>
  );
}
