import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/Home.css";

const awardees = [
  "Amb. (Engr) Dr. Fajumo Adejide Emmanuel, DFD",
  "Dr. Ifeoluwa Solomon Oladeji, DFD",
  "Dr. Ayodeji Olowoloba, DFD",
  "Dr. Giwa Damilare, DFD",
  "Dr. Abraham Adeshile Great, DF & DFD",
  "Dr. Oluwayemisi Oyenubi, DFD",
  "Dr. Prisca Angwe, DFD",
  "Dr. Chioma Margaret Oyebisi, DFD",
  "Dr. Francis Adeyeye, DFD",
  "Dr. Olalekan Oluwalonimi Oluyelu, DFD",
  "Dr. Alexander Onyeisi Okafor, DFD",
  "Dr. Jonathan Tobin, DFD",
  "Dr. (Mrs) Modupe Oriyomi Ativie, DFD",
  "Dr. Pabina Yinkere, DFD",
  "Dr. Moses B. Arokoyo, DF",
  "Dr. Chuba Edmund Ojiba, DFD",
  "Dr. David Jacob, DFD",
];

const Awardees: React.FC = () => {
  return (
    <section style={{ paddingTop: "72px" }}>
      <div className="site-section">
        <div className="section-header">
          <span className="section-label">Fellowship Recognition</span>
          <h2 className="section-title">
            Awardees ({new Date().getFullYear()})
          </h2>
          <p className="section-subtitle">
            ISBMPA proudly recognises outstanding individuals who have made
            significant contributions to their fields and communities.
          </p>
          <div className="divider" />
        </div>

        <ol className="awardees-list">
          {awardees.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ol>

        <div className="section-cta">
          <Link to="/" className="btn-outline">
            ← Go Back
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Awardees;
