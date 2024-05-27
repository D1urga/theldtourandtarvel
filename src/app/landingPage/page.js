"use client";

import React from "react";
import styles from "./landingpage.module.css";
import Navbar from "../components/navbar";
import Bestsellingcard from "../components/bestsellingcard";
import Card from "../components/card.js";
import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import ContactUs from "../contact/page";
import Footer from "../footer/page";

export default function LandingPage() {
  const scrolldes = () => {
    var elmntToView = document.getElementById("destinationid");
    elmntToView.scrollIntoView();
  };
  const scrollpack = () => {
    var elmntToView = document.getElementById("packageid");
    elmntToView.scrollIntoView();
  };
  const scrollcont = () => {
    var elmntToView = document.getElementById("contactid");
    elmntToView.scrollIntoView();
  };
  const txt1 = ` Tour Packages are one of the best ways to travel hassle-free. With
          seamless planning, arrangements, and transfers being taken care of,
          booking tour packages from India is the best way to explore the
          world’s varied landscapes.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <Navbar fn2={scrollpack} fn3={scrolldes} fn5={scrollcont} />
        <div className={styles.page1}>
          <div className={styles.title}>
            <p>FIND THE PERFECT</p>
            <p>VACATION</p>
          </div>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              placeholder="type a destination"
            ></input>
            <input
              type="date"
              className={styles.input}
              placeholder="type a destination"
            ></input>
            <button className={styles.btn}>Explore</button>
          </div>
        </div>
      </div>
      <div className={styles.tour_package} id="packageid">
        <p className={styles.p1}>Tour Package</p>
        <p className={styles.p2}>{txt1}</p>
        <p className={styles.p1}>Bestselling Tour Packages</p>
        <div className={styles.bestcards}>
          <Bestsellingcard />
          <Bestsellingcard />
          <Bestsellingcard />
        </div>
      </div>
      <div className={styles.alltrips} id="destinationid">
        <div className={styles.left_div}>
          <p className={styles.cats}>Categories</p>
          <div className={styles.cat}>
            <p>Duration in days</p>
            <FaAngleDown />
          </div>
          <div className={styles.cat}>
            <p>Budget per person</p>
            <FaAngleDown />
          </div>
          <div className={styles.cat}>
            <p>Hotel star rating</p>
            <FaAngleDown />
          </div>{" "}
          <div className={styles.cat}>
            <p>Activities</p>
            <FaAngleDown />
          </div>{" "}
          <div className={styles.cat}>
            <p>Cities</p>
            <FaAngleDown />
          </div>{" "}
          <div className={styles.cat}>
            <p>Inclusion</p>
            <FaAngleDown />
          </div>
        </div>
        <div className={styles.right_div}>
          <p className={styles.heading}>Showing 144 Bali Tour Packages</p>
          <Card imgurl={"/bg2.png"} />
          <Card imgurl={"/bg3.jpg"} />
          <Card imgurl={"/bg4.jpg"} />
          <Card imgurl={"/bg5.jpg"} />
          <Card imgurl={"/bg6.jpg"} />
          <Card imgurl={"/bg7.jpg"} />
          <Card imgurl={"/bg8.jpg"} />
        </div>
      </div>
      <div id="contactid">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
