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
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import generateImageBlock from "../components/Block";

const Home: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(95);
  const [element, setElement] = useState(generateImageBlock());

  return (
    <section>
      <header>
        <div className="description">
          <h1>
            The Institute Of Strategic Business Management And Public
            Administration Ghana (ISBMPA)
          </h1>
          <p>
            The Institute of Strategic Business Management and Public
            Administration Ghana is an International Institute headquartered in
            the Republic of Ghana with Liaison Office in Nigeria.
          </p>
          <Link to={"/contact-us"}>Get in Touch</Link>
        </div>
        <div className="animatedGif">
          <img src={logo} alt="" />
        </div>
      </header>
      <section className="intro">
        <p>What We Do</p>
        <p>
          We are professionally structured to strategically navigate the Global
          business landscape and to promote institutional development and
          productivity across African continent.
        </p>
        <div className="flexWrap">
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <div>
              <h2>Mission</h2>
              <p>
                To help individuals and organisations strategically navigate the
                Global business landscape and to promote institutional
                development and productivity across African continent
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div>
              <h2>Vision</h2>
              <p>
                To be the flagship symbol of management ingenuity, raising
                resourceful technocrats and public service professionals that
                would reposition Africa for Global economic prosperity
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div>
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
        <div className="learnMore">
          <Link to={"/about"}>Learn More</Link>
        </div>
      </section>
      <section className="intro about">
        <p>About Us</p>
        <p>
          THE INSTITUTE OF STRATEGIC BUSINESS MANAGEMENT AND PUBLIC
          ADMINISTRATION GHANA "ISBMPA" (Established by the office of the
          Registrar-General Accra, Republic of Ghana Act 992)
        </p>
        <div className="flexWrap">
          <div className="item">
            <div className="icon">
              <img src={logoEdit} alt="" />
            </div>
            <div>
              <h2>ISBMPA</h2>
              <p>
                The Institute of Strategic Business Management and Public
                Administration Ghana is an International Institute headquartered
                in the Republic of Ghana with Liaison Office in Nigeria. We are
                professionally structured to strategically navigate the Global
                business landscape and to promote institutional development and
                productivity across African continent.
              </p>
            </div>
          </div>
        </div>
        <div className="learnMore">
          <Link to={"/about"}>About Us</Link>
        </div>
      </section>
      <section className="intro about imageDescribe">
        <p>Governing Council</p>
        <p>
          A distinguished team of visionary leaders, dedicated to guiding our
          institution toward excellence and fostering innovation for a brighter
          future
        </p>
        <div className="flexImages">{generateImageBlock()}</div>
      </section>
      <section className="intro about listed">
        <p>Our Team</p>
        <p>
          Our leadership comprises seasoned professionals and distinguished
          academics who bring a wealth of experience to the table.
        </p>
        <ul>
          <li>
            Prof. Eric Addo Afful - Vice President / Chairman Governing Council
          </li>
          <li>DR. Ani Freeman - Country Director (Nigeria)</li>
          <li>DR. Obeng Akotua - Registrar / CEO</li>
          <li>Prof. Godwin Michael Ezarafe - Executive Director Research and Training</li>
          <li>Barr (DR.) OPEYEMI ALADETOLA</li>
          <li>MR. Idongesit Usenideh</li>
          <li>MS. Precious Freeman</li>
          <li>REV (DR) James Avelji</li>
          <li>MRS. Ekom Usenideh</li>
        </ul>
        <Spinner percentage={percentage} setPercentage={setPercentage} />
        <div className="learnMore">
          <Link to={"/our-team"}>Check Out Our Team</Link>
        </div>
      </section>
      <section className="intro about imageDescribe">
        <h1 style={{textAlign: "center"}}>Gallery</h1>
        <p>
          Check Out The ISBMPA Gallery
          <FontAwesomeIcon icon={faTrophy} />
        </p>
        <div className="flexImages">{element}</div>
        <div
          className="learnMore"
          onClick={() => setElement(generateImageBlock())}
        >
          <Link onClick={(e) => e.preventDefault()} to={"#"}>
            Load More
          </Link>
        </div>
      </section>
      <section className="intro coloured">
        <p>Reach Out To Us</p>
        <p>Contact us anytime or anywhere</p>
        <div className="flexWrap">
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h2>Ghana Head Office</h2>
              <p>
                HNO C00094, Ghana Flag Area, Kasoa, Awutu-Senya East, Central
                Ghana
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faLocation} />
            </div>
            <div>
              <h2>Nigeria Liaison Office (Lagos Island)</h2>
              <p>5, Ibrahim Paseda Street, Awoyaya, Ibeju-Lekki, Lagos</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div>
              <h2>Give Us A Call</h2>
              <p>
                You can always phone us on: +233 245408582 +2348060427939
                +2349077407568
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
            </div>
            <div>
              <h2>Email Us</h2>
              <div>
                Drop an email at:{" "}
                <div className="flex">
                  <a href="mailto:fellow@isbmpa.com">fellow@isbmpa.com</a>
                  <a href="mailto:info@isbmpa.com ">info@isbmpa.com</a>
                  <a href="mailto:drfreeman.isbmpa@yahoo.com">
                    drfreeman.isbmpa@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="learnMore">
          <Link to={"/about"}>Learn More</Link>
        </div>
      </section>
      <Footer />
    </section>
  );
};
// 1 5 13 12

export default Home;
