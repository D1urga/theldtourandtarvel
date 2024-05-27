"use client";
import React, { useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [cvisible, setCvisible] = useState(false);
  const title = `LDTravel excels in providing seamless booking experiences for tours and travels, offering a comprehensive range of services tailored to meet the diverse needs and preferences of travelers worldwide.`;

  const t1 = `The Air Conditioning will be switched off in the hills. Also,
                during the trip, it shall be the Driver’s discretion to put off
                the AC as & when required, considering the travelers’ safety &
                ease of travel along uneven & dangerous routes.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <img src="/logo.png" className={styles.logo}></img>
          <p className={styles.p1}>The Ldtravel</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.p21}>About</p>
          <p className={styles.p22}>About us</p>
          <p className={styles.p22}>Trust & safety</p>

          <p className={styles.p22}>Cookie policy</p>
          <p className={styles.p22}>Privacy policy</p>
        </div>
        <div className={styles.div3}>
          {" "}
          <p className={styles.p21}>Explore</p>
          <p className={styles.p22}>Blog</p>
          <p className={styles.p22}>Review</p>
          <p className={styles.p22}>Join</p>
          <p className={styles.p22}>Places</p>
        </div>
        <div className={styles.div4}>
          <p className={styles.p33}>Ldtravel Policy</p>
          <p
            className={styles.p34}
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Terms and Conditions
          </p>
          <p
            className={styles.p34}
            onClick={() => {
              setCvisible(!cvisible);
            }}
          >
            Cancellation
          </p>
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
      <div className={visible ? styles.terms : styles.terms1}>
        <div className={styles.inner_div}>
          <p className={styles.p41}>Terms and Conditions</p>
          <ul className={styles.termslist}>
            <li>
              <p>
                Full Payment of the trip cost must be made before the trip
                begins.
              </p>
            </li>
            <li>
              <p>
                The IDs shall all be verified before boarding. No boarding shall
                be entertained without a valid Govt. ID.
              </p>
            </li>{" "}
            <li>
              <p>
                No refunds shall be made towards any inclusion(s) not availed by
                the Client.
              </p>
            </li>{" "}
            <li>
              <p>Travelers must take care of their luggage & belongings.</p>
            </li>{" "}
            <li>
              <p>
                The management shall not be accountable for missing items along
                the tour.
              </p>
            </li>{" "}
            <li>
              <p>{t1}</p>
            </li>{" "}
            <li>
              <p>
                Our time of departure is fixed must depart by the stated time &
                keep their status updated with the trip coordinator(s).
              </p>
            </li>
            <li>
              <p>
                Anyone missing the bus shall not be eligible for any refunds. We
                shall call you twice before the scheduled departure.
              </p>
            </li>
            <li>
              <p>
                No act of misconduct or indiscipline shall be tolerated on the
                tours.
              </p>
            </li>
            <li>
              <p>
                We are a cordial travel community and we aspire to bring you a
                hassle-free and memorable experience.
              </p>
            </li>
            <li>
              <p>
                The LD Tour and Travels shall not be responsible for any delays
                or alterations in the program or indirectly incurred expenses in
                cases such as Natural Hazards, accidents, breakdown of
                machinery, weather conditions, landslides, political closure, or
                any untoward incidents.
              </p>
            </li>
            <li>
              <p>
                We do not provide any insurance policy to cover the expenditure
                on sickness or accidents or losses incurred due to theft or
                other reasons.
              </p>
            </li>
            <li>
              <p>
                Numerous factors such as weather and road conditions the
                physical ability of participants etc. may bring alteration to
                the itinerary.
              </p>
            </li>
            <li>
              <p>
                We reserve the right to make necessary changes in the schedule
                in the interest of safety, comfort, and general well-being!
              </p>
            </li>
            <li>
              <p>
                The passenger will not be allowed to board the bus if he is
                having any symptoms of Covid-19 and no refund shall be made in
                that case.
              </p>
            </li>
            <li>
              <p>
                If any passenger experiences any of the Covid-19 symptoms while
                on the trip, he will be isolated there and then and have to face
                all the extra expenses for the same.
              </p>
            </li>
            <li>
              <p>
                A person is required to follow all the safety measures
                prescribed by WHO during the trip for his safety and as well as
                for the safety of others, if he fails to do so or deny to do so,
                The LD Tour and Travels has all the right to cancel his or her
                trip and no refund shall be made.
              </p>
            </li>
          </ul>
          <div className={styles.agree_div}>
            <button
              className={styles.agree_button}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Agree
            </button>
          </div>
        </div>
      </div>
      <div className={cvisible ? styles.cancel : styles.cancel1}>
        <div className={styles.inner_div}>
          <p className={styles.p41}>Terms and Conditions</p>
          <ul className={styles.termslist}>
            <li>
              <p>
                If cancellations are made 30 days before the start date of the
                trip, 50% of the trip cost will be charged as cancellation fees.
              </p>
            </li>
            <li>
              <p>
                If cancellations are made 15-30 days before the start date of
                the trip, 75% of the trip cost will be charged as cancellation
                fees.
              </p>
            </li>{" "}
            <li>
              <p>
                If cancellations are made within 0-15 days before the start date
                of the trip, 100% of the trip cost will be charged as
                cancellation fees.
              </p>
            </li>{" "}
            <li>
              <p>
                In the case of unforeseen weather conditions or government
                restrictions, certain activities may be canceled and in such
                cases, the operator will try his best to provide an alternate
                feasible activity. However, no refund will be provided for the
                same.
              </p>
            </li>{" "}
          </ul>
          <div className={styles.agree_div}>
            <button
              className={styles.agree_button}
              onClick={() => {
                setCvisible(!cvisible);
              }}
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
