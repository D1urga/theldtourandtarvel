import React from "react";
import styles from "./contact.module.css";

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <p className={styles.contact_title}>Contact Us</p>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Opening hours</p>
            <p className={styles.p2}>monday - friday</p>
            <p className={styles.p2}>9am - 5pm</p>{" "}
            <p className={styles.p2}>weekend</p>
            <p className={styles.p2}>closed</p>
          </div>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Address</p>
            <p className={styles.p2}>Garg Mansion</p>
            <p className={styles.p2}> CB-01/1D , SEC-44</p>{" "}
            <p className={styles.p2}> NOIDA , INDIA</p>
          </div>{" "}
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Support</p>
            <p className={styles.p2}>theldtourandtravels@gmail.com</p>
            <p className={styles.p2}>+91 9821915850</p>{" "}
          </div>
        </div>
        <div className={styles.div2}>
          {/* <p className={styles.p3}>Contact us</p> */}
          <p className={styles.p4}>
            Feel free to contact us and we will get back to you as soon
          </p>
          <input className={styles.input} placeholder="Enter your name"></input>
          <input
            className={styles.input}
            placeholder="Enter your email"
          ></input>
          <input className={styles.input} placeholder="Enter phone no"></input>
          <textarea
            className={styles.input1}
            placeholder="Write your message here"
          ></textarea>
          <button className={styles.btn}>send</button>
        </div>
      </div>
    </div>
  );
}
