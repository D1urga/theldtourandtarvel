"use client";
import React, { useState, useEffect } from "react";
import styles from "./contact.module.css";
import axios from "axios";
export default function ContactUs() {
  const [isposting, setisposting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    setisposting(true);

    const formData1 = new FormData();
    formData1.append("name", formData.name);
    formData1.append("email", formData.email);
    formData1.append("phone", formData.phone);
    formData1.append("message", formData.message);

    const response = await axios({
      method: "post",
      url: `https://theldtourandtravelbackend.onrender.com/api/v1/contact/postContact`,
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setisposting(false);
  };
  return (
    <div className={styles.main}>
      <p className={styles.contact_title}>Contact Us</p>
      <div className={styles.outer_div}>
        <div className={styles.div1}>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Opening hours</p>
            <p className={styles.p2}>monday - friday</p>
            <p className={styles.p2}>9am - 5pm</p>{" "}
            <p className={styles.p2}>weekend</p>
            <p className={styles.p2}>closed</p>
          </div>
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Address</p>
            <p className={styles.p2}>Garg Mansion</p>
            <p className={styles.p2}> CB-01/1D , SEC-44</p>{" "}
            <p className={styles.p2}> NOIDA , INDIA</p>
          </div>{" "}
          <div className={styles.dv}>
            {" "}
            <p className={styles.p1}>Support</p>
            <p className={styles.p2}>theldtourandtravels@gmail.com</p>
            <p className={styles.p2}>+91 9821915850</p>{" "}
          </div>
        </div>
        <div className={styles.div2}>
          <form onSubmit={handleSubmitRegister}>
            <p className={styles.p4}>
              Feel free to contact us and we will get back to you as soon
            </p>
            <input
              className={styles.input}
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            ></input>
            <input
              className={styles.input}
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
            <input
              className={styles.input}
              placeholder="Enter phone no"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            ></input>
            <textarea
              className={styles.input1}
              placeholder="Write your message here"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {!isposting ? (
              <button className={styles.btn} type="submit">
                send
              </button>
            ) : (
              <button className={styles.btn} type="submit">
                sending
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
