"use client";
import React, { useState, useEffect } from "react";
import styles from "./trip.module.css";
import {
  FaArrowLeft,
  FaCross,
  FaCut,
  FaEnvelope,
  FaEnvelopeOpen,
  FaEnvelopeSquare,
  FaIcons,
  FaPhoneAlt,
  FaTimes,
  FaVoicemail,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Trip({ params }) {
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
  const [isshowing, setIsShowing] = useState(false);
  const router = useRouter();
  const [data, setData] = useState(null);
  const fetchInfo = async () => {
    const res = await fetch(
      `https://theldtourandtravelbackend.onrender.com/api/v1/destinations/getDestinationbyid/${decodeURIComponent(
        params.trip[0]
      )}`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.heading}>
          <div
            className={styles.back}
            onClick={() => {
              router.back();
            }}
          >
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
          <p className={styles.head}>{data && data.packageName}</p>
          <div className={styles.card}>
            <div className={styles.div1}>
              <img src={data && data.imgurl} className={styles.img}></img>
            </div>
            <div className={styles.div2}>
              <div>
                <p className={styles.p1}> {data && data.duration}</p>
                <p className={styles.p2}>{data && data.cityTags}</p>
              </div>
              <p className={styles.p8}>Meals Sightseeing and more</p>
              <div>
                <p className={styles.p4}>starting from :</p>
                <div className={styles.cost}>
                  <p className={styles.p5}>₹{data && data.originalCost}</p>
                  <p className={styles.p6}>₹{data && data.discountCost}</p>
                </div>
                <p className={styles.p7}>Per person on twin sharing</p>
              </div>
              <button
                className={styles.btn}
                onClick={() => {
                  setIsShowing(!isshowing);
                }}
              >
                Book Now
              </button>
            </div>
          </div>{" "}
          <p className={styles.head}>Overview</p>
          <p className={styles.txt}>{data && data.description}</p>
          <p className={styles.head}>Itinerary</p>
          <div className={styles.iterations}>
            <div className={styles.it}>
              <div className={styles.tit}>
                <p className={styles.pp1}>{data && data.ittitle}</p>
                <div>
                  <p className={styles.pp2}>{data && data.packageName}</p>
                </div>
              </div>
              <p className={styles.txt1}>{data && data.itdes}</p>
            </div>
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
