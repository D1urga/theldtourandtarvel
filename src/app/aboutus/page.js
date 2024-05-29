import React from "react";
import styles from "./aboutus.module.css";

export default function AboutUs() {
  const c1 = `Welcome to TheLD Tour and Travels, where your journey begins with us. We are more than just a travel agency; we are your travel companions, dedicated to making your dream vacations come true. Specializing in affordable and customized travel packages, we cater to both Indian and international destinations.

At TheLD Tour and Travels, we understand that every traveler is unique. That’s why we offer personalized travel experiences tailored to your specific needs and desires. Whether you're dreaming of a grand international adventure or a delightful one-day getaway, we have something special for you. Our one-day trips are particularly popular, giving you the freedom to choose your food, vehicle, and the locations you wish to explore.`;
  const c2 = `We believe that travel is not just about the destination, but also about the journey and the memories you create along the way. Our dedicated team is here to ensure that every detail of your trip is perfect, allowing you to focus on making unforgettable memories. From the moment you contact us, to the moment you return home, we are committed to providing you with exceptional service and a truly personalized travel experience.

Join us at TheLD Tour and Travels, and let us help you explore the world your way. Your adventure awaits!`;
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
        <p className={styles.p2}>{c2}</p>
      </div>
    </div>
  );
}
