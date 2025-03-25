import React from "react";
import Footer from "../components/Footer";
import "../css/contact-us.css";

const Home: React.FC = () => {
  return (
    <section style={{ paddingTop: "100px" }}>
      <section className="contact-section">
        <h2 className="title">Contact Us</h2>

        <div className="contact-card">
          <div className="info">
            <h3>Institution:</h3>
            <p>ISBMPA</p>
          </div>

          <div className="info">
            <h3>Address:</h3>
            <p>
              <b>Ghana Headquarters Office</b>: HNO C00094, Ghana Flag Area,
              Kasoa, Awutu-Senya East, Central Ghana.
              <br /> <b>Nigeria Liaison Office</b> (Lagos Island): 5, Ibrahim
              Paseda Street, Awoyaya, Ibeju-Lekki, Lagos
            </p>
          </div>

          <div className="info">
            <h3>Contact Info:</h3>
            <p>
              <a style={{ color: "#555" }} href="mailto:fellow@isbmpa.com">
                fellow@isbmpa.com
              </a>
            </p>
            <p>+233 245408582</p>
            <p>+234 8060427939</p>
            <p>+234 9077407568 </p>
          </div>

          <div className="info">
            <h3>Contact Description:</h3>
            <p>
              Feel free to reach out for any inquiries or collaborations.
              Available via phone or email!
            </p>
          </div>

          <div className="map-container">
            <iframe
              title="Business Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63540.3310779738!2d-0.5106237000719054!3d5.526798681707314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbaedda8d54f7%3A0xd48e16c6c340829a!2sKasoa%2C%20Ghana!5e0!3m2!1sen!2sng!4v1738561260210!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            style={{ color: "#fff", textDecoration: "none" }}
            href="mailto:fellow@isbmpa.com"
          >
            <button className="contact-btn">Contact Now</button>
          </a>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
