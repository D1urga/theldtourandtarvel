import React from "react";
import styles from "./contact.module.css";

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <p className={styles.contact_title}>Contact us</p>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>opening hours</p>
            <p className={styles.p2}>monday - friday</p>
            <p className={styles.p2}>9am - 5pm</p>{" "}
            <p className={styles.p2}>weekend</p>
            <p className={styles.p2}>closed</p>
          </div>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>address</p>
            <p className={styles.p2}>Garg Mansion</p>
            <p className={styles.p2}> CB-01/1D , SEC-44</p>{" "}
            <p className={styles.p2}> NOIDA , INDIA</p>
          </div>{" "}
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>support</p>
            <p className={styles.p2}>theldtourandtravels@gmail.com</p>
            <p className={styles.p2}>+91 9821915850</p>{" "}
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
