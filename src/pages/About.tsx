import { faGraduationCap, faHandshake, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logoEdit from "../assets/logo-edit.png";
import "../css/Home.css";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <section style={{ paddingTop: "50px" }}>
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
      <Footer />
    </section>
  );
};

export default Home;
