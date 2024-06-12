"use client";
import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import {
  FaBars,
  FaHandshake,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";

export default function Navbar({ fn1, fn2, fn3, fn4, fn5 }) {
  const [isposting, setisposting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
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
    formData1.append("details", formData.details);

    const response = await axios({
      method: "post",
      url: `https://theldtourandtravelbackend.onrender.com/api/v1/booknow/postBooknow`,
      data: formData1,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({ name: "", email: "", phone: "", details: "" });
    setisposting(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isshowing, setIsShowing] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.upper_div}>
          <div className={styles.contact}>
            {" "}
            <FaPhoneAlt className={styles.icon} />
            <div>
              <p>Call us for details</p>
              <p>+91 9821915850</p>
            </div>
          </div>
          <div className={styles.title}>
            <img src="/logo.png" className={styles.logo}></img>
            <p>The Ldtravel</p>
          </div>
          <div className={styles.join}>
            {" "}
            <FaHandshake className={styles.icon} />
            <div>
              <p>Travel Agent?</p>
              <p>Become a partner</p>
            </div>
          </div>
        </div>
        <div className={styles.devider}></div>
        <div
          className={styles.lower_div}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FaBars className={styles.menu} />
          <div className={isOpen ? styles.nav : styles.nav1}>
            <div className={styles.icons}>
              <FaInstagram className={styles.icon2} />
              <FaTwitter className={styles.icon2} />
            </div>
            <ul className={styles.list}>
              <li>
                <p className={styles.links} href="" onClick={fn1}>
                  Home
                </p>
              </li>
              <li>
                <p className={styles.links} href="" onClick={fn2}>
                  Packages
                </p>
              </li>{" "}
              <li>
                <p className={styles.links} href="" onClick={fn3}>
                  Destination
                </p>
              </li>{" "}
              <li>
                <p className={styles.links} href="" onClick={fn4}>
                  About us
                </p>
              </li>{" "}
              <li>
                <p className={styles.links} href="" onClick={fn5}>
                  Contact us
                </p>
              </li>{" "}
            </ul>
            <button
              className={styles.btn}
              onClick={() => {
                setIsShowing(!isshowing);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {isshowing ? (
        <form onSubmit={handleSubmitRegister}>
          {" "}
          <div className={styles.contact_card}>
            <div className={styles.outer_div2}>
              <div className={styles.cancel}>
                <FaTimes
                  className={styles.cut}
                  onClick={() => {
                    setIsShowing(!isshowing);
                  }}
                />
              </div>
              <div className={styles.couter_div}>
                <div className={styles.cdiv1}>
                  <img src="/logo.png" className={styles.cimg}></img>
                  <p className={styles.cp1}>TheIdtravel</p>
                  <div className={styles.c1}>
                    <FaPhoneAlt className={styles.cicon1} />
                    <p className={styles.cp2}>+91 9821915850</p>
                  </div>
                  <div className={styles.c2}>
                    <FaEnvelope className={styles.cicon1} />
                    <p className={styles.cp2}>theldtourandtravels@gmail.com</p>
                  </div>
                </div>
                <div className={styles.cdiv2}>
                  <p className={styles.ctext}>Name</p>
                  <input
                    className={styles.cinput}
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  ></input>
                  <p className={styles.ctext}>Phone no</p>
                  <input
                    className={styles.cinput}
                    placeholder="Enter phone no"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  ></input>
                  <p className={styles.ctext}>Email</p>
                  <input
                    className={styles.cinput}
                    placeholder="Enter email id"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  ></input>
                  <p className={styles.ctext}>Trip Details</p>
                  <textarea
                    className={styles.cinput1}
                    placeholder="Enter trip details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                  ></textarea>
                  <button className={styles.cbtn} type="submit">
                    {isposting ? "Submitting" : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}
