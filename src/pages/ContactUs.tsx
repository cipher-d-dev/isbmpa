import React from "react";
import Footer from "../components/Footer";
import "../css/contact-us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faPhone,
  faCommentDots,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs: React.FC = () => {
  return (
    <section className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <span className="section-label">Get In Touch</span>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out for inquiries or collaborations.
        </p>
      </div>

      {/* Card */}
      <div className="contact-body">
        <div className="contact-card-main">
          <div className="contact-card-header">
            <h2>ISBMPA</h2>
            <p>
              Institute of Strategic Business Management and Public
              Administration Ghana
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-row">
              <div className="ci-icon-wrap">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="ci-content">
                <h3>Institution</h3>
                <p>ISBMPA</p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="ci-icon-wrap">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="ci-content">
                <h3>Address</h3>
                <p>
                  <strong>Ghana Headquarters:</strong> HNO C00094, Ghana Flag
                  Area, Kasoa, Awutu-Senya East, Central Ghana.
                </p>
                <p style={{ marginTop: "0.4rem" }}>
                  <strong>Nigeria Liaison Office</strong> (Lagos Island): 5,
                  Ibrahim Paseda Street, Awoyaya, Ibeju-Lekki, Lagos.
                </p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="ci-icon-wrap">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="ci-content">
                <h3>Contact Info</h3>
                <a href="mailto:fellow@isbmpa.com">fellow@isbmpa.com</a>
                <p>+233 245408582</p>
                <p>+234 8060427939</p>
                <p>+234 9077407568</p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="ci-icon-wrap">
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
              <div className="ci-content">
                <h3>Note</h3>
                <p>
                  Feel free to reach out for any inquiries or collaborations.
                  Available via phone or email!
                </p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63540.3310779738!2d-0.5106237000719054!3d5.526798681707314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbaedda8d54f7%3A0xd48e16c6c340829a!2sKasoa%2C%20Ghana!5e0!3m2!1sen!2sng!4v1738561260210!5m2!1sen!2sng"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-card-footer">
            <a href="mailto:fellow@isbmpa.com" className="btn-contact">
              Contact Now <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
