"use client";
import React, { useState } from "react";
import styles from "./trips.module.css";
import { FaArrowRight } from "react-icons/fa";
import Card from "../components/card";
import Link from "next/link";
import Bestsellingcard from "../components/bestsellingcard";

export default function Trips() {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const txt1 = ` Tour Packages are one of the best ways to travel hassle-free. With
          seamless planning, arrangements, and transfers being taken care of,
          booking tour packages from India is the best way to explore the
          world’s varied landscapes.`;

  const alltrips = [
    { triplocation: "Himalaya" },
    { triplocation: "Himalaya" },
    { triplocation: "Himalaya" },
    { triplocation: "Himalaya" },
    { triplocation: "Ladakh" },
    { triplocation: "Ladakh" },
    { triplocation: "Ladakh" },
    { triplocation: "Ladakh" },
    { triplocation: "Ladakh" },
    { triplocation: "Ladakh" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
    { triplocation: "Bali local Tour Package" },
  ];

  const filterdData = alltrips.filter((el) => {
    if (inputText == "") {
      return el.triplocation.toLowerCase().includes(inputText);
    } else {
      return el.triplocation.toLowerCase().includes(inputText);
    }
  });
  return (
    <div>
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
      <p className={styles.p1}>All Packages</p>
      <div className={styles.alltrips} id="destinationid">
        <div className={styles.left_div}>
          {/* <p className={styles.cats}>Categories</p>
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
          </div> */}
          <div className={styles.search_div}>
            <input
              className={styles.search}
              type="text"
              onChange={inputHandler}
              placeholder="Enter the destination"
            ></input>
            <FaArrowRight className={styles.search_icon} />
          </div>
          <p className={styles.allresults}>
            showing all {filterdData.length} results
          </p>
        </div>
        <div className={styles.grids}>
          <div className={styles.right_div}>
            {filterdData.map((data, index) => (
              <Link href={`/trips/bjhb`} key={index}>
                <Card imgurl={"/bg2.png"} triplocation={data.triplocation} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
