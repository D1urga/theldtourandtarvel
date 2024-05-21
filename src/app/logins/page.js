import React from "react";
import styles from "./logins.module.css";

export default function Logins() {
  const title = `LDTravel excels in providing seamless booking experiences for tours and travels, offering a comprehensive range of services tailored to meet the diverse needs and preferences of travelers worldwide.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.main_div}>
          <div className={styles.div1}>
            <img src="/logo.png" className={styles.logo}></img>
            <p className={styles.p1}>TheLdTravel</p>
            <p className={styles.p2}>{title}</p>
            <button className={styles.btn}>admin login</button>
          </div>
          <div className={styles.div2}>
            <p className={styles.p3}>log in</p>
            <div className={styles.inputs}>
              <div className={styles.names}>
                <p className={styles.p4}>fullname</p>
              </div>
              <input
                className={styles.input}
                placeholder="fullname .. ex "
              ></input>{" "}
              <div className={styles.names}>
                <p className={styles.p4}>email</p>
              </div>
              <input
                className={styles.input}
                placeholder="email .. ex "
              ></input>{" "}
              <div className={styles.names}>
                <p className={styles.p4}>password</p>
              </div>
              <input
                className={styles.input}
                placeholder="password .. ex "
              ></input>
            </div>
            <button className={styles.btn1}>login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
