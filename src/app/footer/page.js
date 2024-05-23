import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const title = `LDTravel excels in providing seamless booking experiences for tours and travels, offering a comprehensive range of services tailored to meet the diverse needs and preferences of travelers worldwide.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <img src="/logo.png" className={styles.logo}></img>
          <p className={styles.p1}>{title}</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.p21}>About Ldtravel</p>
          <p className={styles.p22}>about us</p>
          <p className={styles.p22}>trust & safety</p>
          <p className={styles.p22}>contact us</p>
          <p className={styles.p22}>cookie policy</p>
          <p className={styles.p22}>privacy policy</p>
        </div>
        <div className={styles.div3}>
          {" "}
          <p className={styles.p21}>Explore</p>
          <p className={styles.p22}>write a review</p>
          <p className={styles.p22}>add a place</p>
          <p className={styles.p22}>join</p>
          <p className={styles.p22}>blog</p>
          <p className={styles.p22}>help center</p>
        </div>
        <div className={styles.div4}>
          {" "}
          <p className={styles.p21}>Follows</p>
          <div className={styles.icons}>
            <FaTwitter className={styles.icon} />
            <FaFacebookF className={styles.icon} />
            <FaGoogle className={styles.icon} />
            <FaYoutube className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaPinterest className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
