import React from "react";
import styles from "./adminpage.module.css";
import Navbar from "../components/navbar";
import Bestsellingcard from "../components/bestsellingcard";
import Card from "../components/card.js";
import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import AdminNavbar from "../components/adminnavbar";

export default function AdminPage() {
  const txt1 = ` Tour Packages are one of the best ways to travel hassle-free. With
          seamless planning, arrangements, and transfers being taken care of,
          booking tour packages from India is the best way to explore the
          world’s varied landscapes.`;

  const note1 = `Thank you for managing trip data. 
  Your work ensures our travelers have the best experiences.
   Please verify all details for accuracy and completeness.`;
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <AdminNavbar />
        <div className={styles.page1}>
          <div className={styles.title}>
            <p>WELCOME, ADMIN!</p>
            <p>manage TheLdTravel content</p>
          </div>
        </div>
      </div>
      <div className={styles.add_trips}>
        <div className={styles.div1}>
          <p className={styles.p1}>Add a trip</p>
          <p className={styles.p2}>{note1}</p>
        </div>
        <div className={styles.div2}>
          <div className={styles.inputdiv1}>
            <p>destination name</p>
            <input
              className={styles.input}
              placeholder="destination name"
            ></input>
            <p>destination name</p>
            <input
              className={styles.input}
              placeholder="destination name"
            ></input>
            <p>destination name</p>
            <input
              className={styles.input}
              placeholder="destination name"
            ></input>
            <p>destination name</p>
            <input
              className={styles.input}
              placeholder="destination name"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
