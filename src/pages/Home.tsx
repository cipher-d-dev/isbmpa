import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoEdit from "../assets/logo-edit.png";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faGraduationCap,
  faHandshake,
  faLocation,
  faLocationDot,
  faPhoneVolume,
  faScaleBalanced,
  faTrophy,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import GalleryPage from "../components/Block";

const Home: React.FC = () => {
  const percentage = 100;
  const [gallery, generateGallery] = useState(
    <GalleryPage onlyCaption={false} />,
  );

  return (
    <section>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="description">
          <span className="hero-label">Est. Republic of Ghana · Act 992</span>
          <h1>
            The Institute Of Strategic Business Management And Public
            Administration Ghana
          </h1>
          <p>
            An International Institute headquartered in the Republic of Ghana
            with a Liaison Office in Nigeria — navigating the global business
            landscape across Africa.
          </p>
          <div className="hero-cta">
            <Link to="/contact-us" className="btn-primary">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="animatedGif">
          <img src={logo} alt="ISBMPA Logo" />
        </div>
      </header>

      {/* ── What We Do ───────────────────────────────────────── */}
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
                Global business landscape and promote institutional development
                and productivity across Africa.
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
                executives and visionary leaders.
              </p>
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Link to="/about" className="btn-outline">
            Learn More
          </Link>
        </div>
      </div>

      {/* ── About Us ─────────────────────────────────────────── */}
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
              productivity across the African continent.
            </p>
            <div
              className="section-cta"
              style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}
            >
              <Link to="/about" className="btn-primary">
                About Us <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Governing Council ────────────────────────────────── */}
      <div className="site-section alt-bg">
        <div className="section-header">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Governing Council</h2>
          <p className="section-subtitle">
            A distinguished team of visionary leaders, dedicated to guiding our
            institution toward excellence and fostering innovation for a
            brighter future.
          </p>
          <div className="divider" />
        </div>

        <div className="flexMedia">
          <GalleryPage onlyCaption={true} limit={8} />
        </div>

        <div className="section-cta">
          <Link to="/governing-council" className="btn-outline">
            Explore Full Council
          </Link>
        </div>
      </div>

      {/* ── Our Team ─────────────────────────────────────────── */}
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Our People</span>
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Our leadership comprises seasoned professionals and distinguished
            academics who bring a wealth of experience to the table.
          </p>
          <div className="divider" />
        </div>

        <ul className="team-list">
          {[
            {
              name: "Prof. Eric Addo Afful",
              role: "Vice President / Chairman Governing Council",
            },
            { name: "DR. Ani Freeman", role: "Country Director (Nigeria)" },
            { name: "DR. Obeng Akotua", role: "Registrar / CEO" },
            {
              name: "Prof. Godwin Michael Ezarafe",
              role: "Executive Director Research and Training",
            },
            { name: "Barr (DR.) Opeyemi Aladetola", role: "" },
            { name: "MR. Idongesit Usenideh", role: "" },
            { name: "MS. Precious Freeman", role: "" },
            { name: "REV (DR) James Avelji", role: "" },
            { name: "MRS. Ekom Usenideh", role: "" },
          ].map(({ name, role }) => (
            <li key={name}>
              <span>
                {name}
                {role && <b>{role}</b>}
              </span>
            </li>
          ))}
        </ul>

        <div className="spinner-section">
          <Spinner percentage={percentage} />
        </div>

        <div className="section-cta">
          <Link to="/our-team" className="btn-outline">
            Check Out Our Team
          </Link>
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="site-section alt-bg">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">
            ISBMPA Gallery{" "}
            <FontAwesomeIcon
              icon={faTrophy}
              style={{ color: "var(--color-gold)", fontSize: "0.7em" }}
            />
          </h2>
          <p className="section-subtitle">
            A visual journey through our events, milestones, and community.
          </p>
          <div className="divider" />
        </div>

        <div className="flexMedia">{gallery}</div>

        <div className="section-cta">
          <button
            className="btn-outline"
            onClick={() => generateGallery(<GalleryPage onlyCaption={false} />)}
            style={{ cursor: "pointer" }}
          >
            Load More
          </button>
        </div>
      </div>

      {/* ── Contact Strip ────────────────────────────────────── */}
      <div className="site-section contact-strip">
        <div className="section-header">
          <span className="section-label">Reach Out</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Connect with us anytime, anywhere — we're here to help.
          </p>
          <div className="divider" />
        </div>

        <div className="contact-cards-grid">
          <div className="contact-card-item">
            <div className="ci-icon g">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="ci-body">
              <h2>Ghana Head Office</h2>
              <p>
                HNO C00094, Ghana Flag Area, Kasoa, Awutu-Senya East, Central
                Ghana
              </p>
            </div>
          </div>

          <div className="contact-card-item">
            <div className="ci-icon b">
              <FontAwesomeIcon icon={faLocation} />
            </div>
            <div className="ci-body">
              <h2>Nigeria Liaison Office</h2>
              <p>
                5, Ibrahim Paseda Street, Awoyaya, Ibeju-Lekki, Lagos Island
              </p>
            </div>
          </div>

          <div className="contact-card-item">
            <div className="ci-icon p">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div className="ci-body">
              <h2>Give Us A Call</h2>
              <p>+233 245408582</p>
              <p>+234 8060427939</p>
              <p>+234 9077407568</p>
            </div>
          </div>

          <div className="contact-card-item">
            <div className="ci-icon r">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
            </div>
            <div className="ci-body">
              <h2>Email Us</h2>
              <a href="mailto:fellow@isbmpa.com">fellow@isbmpa.com</a>
              <a href="mailto:info@isbmpa.com">info@isbmpa.com</a>
              <a href="mailto:drfreeman.isbmpa@yahoo.com">
                drfreeman.isbmpa@yahoo.com
              </a>
            </div>
          </div>
        </div>

        <div className="section-cta" style={{ marginTop: "2.5rem" }}>
          <Link to="/about" className="btn-primary">
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Home;
