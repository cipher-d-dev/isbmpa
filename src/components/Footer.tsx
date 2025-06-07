import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/App.css";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footerFlex">
        <div className="item">
          <h2>Links</h2>
          <Link to="/about">About Us</Link>
          <Link to="/our-team">Our Team</Link>
          <Link to="/fellowship-awards">Fellowship Awards</Link>
          <Link to="/governing-council">Governing Council</Link>
        </div>
        <div className="item">
          <h2>Support</h2>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="item">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:fellow@isbmpa.com">fellow@isbmpa.com</a>
          </p>
          <p>+233 245408582</p>
          <p>+234 8060427939</p>
          <p>+234 9077407568 </p>
        </div>
        <div className="item">
          <h2>Location</h2>
          <p>
            <b>Ghana Headquarters Office</b>: HNO C00094, Ghana Flag Area,
            Kasoa, Awutu-Senya East, Central Ghana.
            <br /> <b>Nigeria Liaison Office</b> (Lagos Island): 5, Ibrahim
            Paseda Street, Awoyaya, Ibeju-Lekki, Lagos
          </p>
        </div>
      </div>
      <div className="footerMain">
        <div className="logo">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <span>ISBMPA</span>
        </div>
        <p>
          <span>&copy; 2024 Copyright ISBMPA, All Rights Reserved</span>
          <span style={{padding: "10px"}}>Powered by <a style={{color: "#4444b5"}} href="https://favesportfolio.vercel.app">Favitech Corporations</a></span>
          <div>
            <Link to={"https://facebook.com"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to={"https://twitter.com"}>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
