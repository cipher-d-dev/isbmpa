import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h2>Links</h2>
          <Link to="/about">About Us</Link>
          <Link to="/our-team">Our Team</Link>
          <Link to="/fellowship-awards">Fellowship Awards</Link>
          <Link to="/governing-council">Governing Council</Link>
        </div>

        <div className="footer-col">
          <h2>Support</h2>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:fellow@isbmpa.com">fellow@isbmpa.com</a>
          </p>
          <p>+233 245408582</p>
          <p>+234 8060427939</p>
          <p>+234 9077407568</p>
        </div>

        <div className="footer-col">
          <h2>Location</h2>
          <p>
            <b>Ghana HQ</b>: HNO C00094, Ghana Flag Area, Kasoa, Awutu-Senya
            East, Central Ghana.
          </p>
          <p>
            <b>Nigeria Liaison</b> (Lagos Island): 5, Ibrahim Paseda Street,
            Awoyaya, Ibeju-Lekki, Lagos.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <div className="brand-img">
            <img src={logo} alt="ISBMPA" />
          </div>
          <span>ISBMPA</span>
        </div>

        <div className="footer-meta">
          <span className="copyright">
            &copy; {new Date().getFullYear()} ISBMPA. All Rights Reserved.
          </span>
          <span className="powered">
            Powered by{" "}
            <a
              href="https://favesportfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Favitech Corporations
            </a>
          </span>
        </div>

        <div className="footer-social">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
