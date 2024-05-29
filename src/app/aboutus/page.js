import React from "react";
import styles from "./aboutus.module.css";

export default function AboutUs() {
  const c1 = `Welcome to The Ldtravel, your trusted partner in transforming travel dreams into reality since [Year]. Founded by passionate travelers [Founders' Names], we specialize in creating unforgettable experiences with our tailor-made tours, seamless booking services for flights, hotels, and car rentals, and authentic local experiences led by knowledgeable guides. We prioritize customer satisfaction through a customer-centric approach, ensuring every journey is personalized to meet your unique preferences and needs. Committed to integrity, transparency, and sustainability, we build trust by offering competitive rates without hidden fees and promoting eco-friendly travel practices. Our dedicated team of travel enthusiasts and 24/7 customer support professionals are here to assist you every step of the way, making your adventure enjoyable and hassle-free. Join us at [Your Company Name] to explore the world and create lasting memories—one unforgettable trip at a time. Contact us today to start planning your next adventure!`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>About Us</p>
        <p className={styles.p2}>{c1}</p>
        <div className={styles.images}>
          <div className={styles.div1}>
            <img src="./bg6.jpg" className={styles.imgs}></img>
          </div>
          <div className={styles.div1}>
            <img src="./bg10.jpg" className={styles.imgs}></img>
          </div>
          <div className={styles.div1}>
            <img src="./bg7.jpg" className={styles.imgs}></img>
          </div>
          <div className={styles.title}>
            <img src="./logo.png" className={styles.logo}></img>
            <p>The Ldtravel</p>
          </div>
        </div>
        <p className={styles.p2}>{c1}</p>
      </div>
    </div>
  );
}
