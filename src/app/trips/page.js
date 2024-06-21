"use client";
import React, { useState, useEffect } from "react";
import styles from "./trips.module.css";
import { FaArrowRight } from "react-icons/fa";
import Card from "../components/card";
import Link from "next/link";
import Bestsellingcard from "../components/bestsellingcard";
import axios from "axios";

export default function Trips() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const fetchInfo = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://theldtourandtravelbackend.onrender.com/api/v1/destinations/getDestination`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading(false);
    return setData(d.data.reverse());
  };
  const fetchInfo1 = async () => {
    setIsLoading1(true);
    const res = await fetch(
      `https://theldtourandtravelbackend.onrender.com/api/v1/destinations/getDestinationBestSelling`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    setIsLoading1(false);
    return setData1(d.data.reverse());
  };

  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const txt1 = ` Tour Packages are one of the best ways to travel hassle-free. With
          seamless planning, arrangements, and transfers being taken care of,
          booking tour packages from India is the best way to explore the
          world’s varied landscapes.`;

  const filterdData =
    data &&
    data.filter((el) => {
      if (inputText == "") {
        return el.packageName?.toLowerCase().includes(inputText);
      } else {
        return el.packageName?.toLowerCase().includes(inputText);
      }
    });
  useEffect(() => {
    fetchInfo();
    fetchInfo1();
  }, []);
  return (
    <div>
      <div className={styles.tour_package} id="packageid">
        <p className={styles.p1}>Tour Package</p>

        <p className={styles.p2}>{txt1}</p>
        <p className={styles.p1}>Bestselling Tour Packages</p>
        <div className={styles.bestcards}>
          {!isLoading1 ? (
            <div className={styles.bestsellingcroll}>
              {data1 &&
                data1.map((val, index) => (
                  <Link href={`/trips/${val._id}`}>
                    <Bestsellingcard
                      destinatioName={val.packageName}
                      duration={val.duration}
                      originalCost={val.originalCost}
                      discountCost={val.discountCost}
                      bgimg={val.imgurl}
                    />
                  </Link>
                ))}
            </div>
          ) : (
            <div className={styles.load}>
              <p>Loading please wait..</p>
            </div>
          )}
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
            showing all {filterdData && filterdData.length} results
          </p>
        </div>
        <div className={styles.grids}>
          {!isLoading ? (
            <div className={styles.right_div}>
              {filterdData &&
                filterdData.map((data, index) => (
                  <Link href={`/trips/${data._id}`} key={index}>
                    <Card
                      imgurl={data.imgurl}
                      triplocation={data.packageName}
                      originalCost={data.originalCost}
                      discountCost={data.discountCost}
                      duration={data.duration}
                      cityTags={data.cityTags}
                    />
                  </Link>
                ))}
            </div>
          ) : (
            <div className={styles.load}>
              <p>Loading please wait..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
