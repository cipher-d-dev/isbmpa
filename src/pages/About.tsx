import {
  faGraduationCap,
  faHandshake,
  faScaleBalanced,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logoEdit from "../assets/logo-edit.png";
import "../css/Home.css";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <section style={{ paddingTop: "72px" }}>
      {/* ── What We Do ─────────────────────────────────────────── */}
      <div className="site-section alt-bg">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Purpose, Vision &amp; Strategy</h2>
          <p className="section-subtitle">
            We are professionally structured to strategically navigate the
            Global business landscape and promote institutional development
            across Africa.
          </p>
          <div className="divider" />
        </div>

        <div className="cards-grid">
          <div className="feature-card">
            <div className="card-icon green">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <div className="card-body">
              <h2>Mission</h2>
              <p>
                To help individuals and organisations strategically navigate the
                Global business landscape and to promote institutional
                development and productivity across the African continent.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-icon gold">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="card-body">
              <h2>Vision</h2>
              <p>
                To be the flagship symbol of management ingenuity, raising
                resourceful technocrats and public service professionals that
                would reposition Africa for Global economic prosperity.
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-icon dark">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="card-body">
              <h2>Objective</h2>
              <p>
                As a globally focused institute, we aim to revitalize Africa's
                economy through the exchange of ideas among top intellectual
                executives, visionary leaders, and growth-driven public
                servants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── About ─────────────────────────────────────────────── */}
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">About Us</span>
          <h2 className="section-title">ISBMPA</h2>
          <p className="section-subtitle">
            Established by the office of the Registrar-General Accra, Republic
            of Ghana Act 992.
          </p>
          <div className="divider" />
        </div>

        <div className="about-row">
          <div className="about-image">
            <img src={logoEdit} alt="ISBMPA" />
          </div>
          <div className="about-content">
            <h2>International Reach, African Heart</h2>
            <p>
              The Institute of Strategic Business Management and Public
              Administration Ghana is an International Institute headquartered
              in the Republic of Ghana with Liaison Office in Nigeria. We are
              professionally structured to strategically navigate the Global
              business landscape and to promote institutional development and
              productivity across African continent.
            </p>
            <div
              className="section-cta"
              style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}
            >
              <Link to="/contact-us" className="btn-primary">
                Get In Touch <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
