import React from "react";
import styles from "./trip.module.css";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

export default function Trip({ params }) {
  const txt1 = `Your Andaman Honeymoon holiday begins with your arrival in Port Blair.

Upon your arrival, at the Veer Savarkar Airport you will be greeted by the agent’s representative. Check in your hotel and find a beautifully decorated room with lots of honeymoon freebies. Have some delicious lunch at your hotel and make yourself at home.

After some time, head out with your spouse for a little sightseeing. Your Andaman tour itinerary starts at Corbyn’s Cove Beach where you can enjoy quite a sight of turquoise waters. The beach also provides a lot of fun water activities like jet skiing or motor scooter.

Your next destination would be the Light and Sound Show at the Cellular Jail where you would come across a musical tale of heroism of freedom fighters.

On return to the hotel, you will be served a deliciously hot dinner. Enjoy your overnight stay at Port Blair.`;

  const txt = `Spend your dream honeymoon by booking this 4 nights, 5 days Andaman honeymoon package. Your amazing honeymoon starts as you land in Port Blair and check in your hotel where a beautifully decorated room awaits you.Your Andaman honeymoon package covers Port Blair and Havelock - two of the most popular stops.
At Port Blair, you go for city tours and sightseeing. The package takes you to Corbyn’s Cove Beach and Cellular Jail. Also, don’t miss the amazing Light and Sound Show at the Cellular Jail. It is a wonderful experience and creates a patriotic atmosphere with the powerful narration of the history of the freedom movement.

Comprising 572 islands, only a dozen or so are open to tourists, Havelock by far being the most popular for its splendid beaches and diving. Next place to visit as per your honeymoon trip is the luxurious Havelock Island after which you will proceed to the Radhanagar beach for some water fun. Shimmering turquoise waters are surrounded by primeval jungle and mangrove forest, and its sugar-white beaches melt under glorious flame-and-purple sunsets. Breathtakingly beautiful coastline, picturesque beaches, lush forested interior, crystal clear water, fantastic diving possibilities, and a far-flung location make the Andaman Islands a perfect place for honeymoon couples. Further, your romantic Andaman honeymoon takes you go to Elephant Beach, where you can go for snorkeling in the lucid waters. The luxurious Havelock island and proceed to the Radhanagar beach for some water fun. Further, your romantic Andaman honeymoon takes you go to Elephant Beach, where you can go for snorkeling in the lucid waters.

Andaman offers a lot for adventure enthusiasts to explore. You can try watersports like Scuba Diving and sea bed walking as well. The cost of these activities is not included in the cost of your Andaman honeymoon package.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.heading}>
          <div className={styles.back}>
            <FaArrowLeft className={styles.arrow} />
            <p>Back</p>
          </div>
          <div className={styles.name}>
            <img src="/logo.png"></img>
            <p>The Ldtravel</p>
          </div>

          <div className={styles.contact}>
            {" "}
            <FaPhoneAlt className={styles.icon} />
            <div>
              <p>Call us for details</p>
              <p>+91 9821915850</p>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.head}>Fantastic Andman Honeymoon Package</p>
          <div className={styles.card}>
            <div className={styles.div1}>
              <img src="/bg9.jpg" className={styles.img}></img>
            </div>
            <div className={styles.div2}>
              <div>
                <p className={styles.p1}> 10 Days & 9 Nights</p>
                <p className={styles.p2}>{"Cities : Kuto(5D) -> Ubud(5D)"}</p>
              </div>
              <p className={styles.p8}>Meals Sightseeing and more</p>
              <div>
                <p className={styles.p4}>starting from :</p>
                <div className={styles.cost}>
                  <p className={styles.p5}>{"₹23500"}</p>
                  <p className={styles.p6}>{"₹29500"}</p>
                </div>
                <p className={styles.p7}>Per person on twin sharing</p>
              </div>
              <button className={styles.btn}>Book Now</button>
            </div>
          </div>{" "}
          <p className={styles.head}>Overview</p>
          <p className={styles.txt}>{txt}</p>
          <p className={styles.head}>Itinerary</p>
          <div className={styles.iterations}>
            <div className={styles.it}>
              <div className={styles.tit}>
                <p className={styles.pp1}>Day 1</p>
                <div>
                  <p className={styles.pp2}>
                    Port Blair: Welcome to Andaman Islands
                  </p>
                  <p className={styles.pp2}>
                    Corbyn’s Beach Cove | Light & Sound Show
                  </p>
                </div>
              </div>
              <p className={styles.txt1}>{txt1}</p>
            </div>
            <div className={styles.it}>
              <div className={styles.tit}>
                <p className={styles.pp1}>Day 1</p>
                <div>
                  <p className={styles.pp2}>
                    Port Blair: Welcome to Andaman Islands
                  </p>
                  <p className={styles.pp2}>
                    Corbyn’s Beach Cove | Light & Sound Show
                  </p>
                </div>
              </div>
              <p className={styles.txt1}>{txt1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
