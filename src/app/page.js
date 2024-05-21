import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landingPage/page.js";
import ContactUs from "./contact/page.js";
import Footer from "./footer/page.js";
import Logins from "./logins/page.js";
import AdminPage from "./adminpage/page.js";

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
