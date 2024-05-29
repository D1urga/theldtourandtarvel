"use client";

import React from "react";
import styles from "./landingpage.module.css";
import Navbar from "../components/navbar";
import Bestsellingcard from "../components/bestsellingcard";
import Card from "../components/card.js";
import {
  FaAngleDown,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import ContactUs from "../contact/page";
import Link from "next/link";
import Footer from "../footer/page";
import AboutUs from "../aboutus/page.js";
import Trips from "../trips/page";

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

  const scrollabout = () => {
    var elmntToView = document.getElementById("aboutus");
    elmntToView.scrollIntoView();
  };

  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <Navbar
          fn2={scrollpack}
          fn3={scrolldes}
          fn5={scrollcont}
          fn4={scrollabout}
        />
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
            <button className={styles.btn} onClick={scrolldes}>
              Explore Destinations
            </button>
          </div>
        </div>
      </div>

      <Trips />
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="contactid">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
